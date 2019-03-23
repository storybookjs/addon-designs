workflow "On push" {
  on = "push"
  resolves = ["Deploy example to ghpages"]
}

action "Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Build only on master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
  needs = ["Install"]
}

action "Build" {
  uses = "borales/actions-yarn@master"
  args = "build"
  needs = ["Build only on master"]
}

action "Build examples" {
  uses = "borales/actions-yarn@master"
  args = "example:build"
  needs = ["Build"]
}

action "Deploy example to ghpages" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "packages/examples/storybook-static/"
  }
  secrets = ["GH_PAT"]
  needs = ["Prepare deploy to ghpages"]
}

action "Publish only on tag" {
  uses = "actions/bin/filter@master"
  args = "tag"
  needs = ["Install"]
}

action "Publish" {
  uses = "borales/actions-yarn@master"
  args = "lerna publish from-git"
  needs = "Publish only on tag"
  secrets = ["NPM_AUTH_TOKEN"]
}
