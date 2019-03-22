workflow "On push" {
  on = "push"
  resolves = ["Deploy example to ghpages"]
}

action "Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Build" {
  uses = "borales/actions-yarn@master"
  args = "build"
  needs = ["Install"]
}

action "Build examples" {
  uses = "borales/actions-yarn@master"
  args = "example:build"
  needs = ["Build"]
}

action "Prepare deploy to ghpages" {
  uses = "actions/bin/filter@master"
  args = "branch master"
  needs = ["Build examples"]
}

action "Deploy example to ghpages" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "packages/examples/storybook-static/"
  }
  secrets = ["GH_PAT"]
  needs = ["Prepare deploy to ghpages"]
}
