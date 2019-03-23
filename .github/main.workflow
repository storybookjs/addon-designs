workflow "master" {
  on = "push"
  resolves = ["[master] Deploy examples"]
}

action "[master] Ensure branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "[master] Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
  needs = ["[master] Ensure branch"]
}

action "[master] Build" {
  uses = "borales/actions-yarn@master"
  args = "build"
  needs = ["[master] Install"]
}

action "[master] Build examples" {
  uses = "borales/actions-yarn@master"
  args = "example:build"
  needs = ["[master] Build"]
}

action "[master] Deploy examples" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "packages/examples/storybook-static/"
  }
  secrets = ["GH_PAT"]
  needs = ["[master] Build examples"]
}

workflow "tags" {
  on = "push"
  resolves = ["[tags] Publish"]
}

action "[tags] Ensure branch" {
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "[tags] Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
  needs = ["[tags] Ensure branch"]
}

action "[tags] Publish" {
  uses = "borales/actions-yarn@master"
  args = "lerna publish from-package -y"
  needs = ["[tags] Install"]
  secrets = ["NPM_AUTH_TOKEN"]
}
