workflow "New workflow" {
  on = "push"
  resolves = ["Deploy example to ghpages"]
}

action "Master branch only" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Install" {
  uses = "borales/actions-yarn@master"
  args = "install"
}

action "Build examples" {
  uses = "borales/actions-yarn@master"
  args = "example:build"
  needs = ["Install"]
}

action "Deploy example to ghpages" {
  uses = "maxheld83/ghpages@v0.2.1"
  env = {
    BUILD_DIR = "packages/examples/storybook-static/"
  }
  secrets = ["GH_PAT"]
  needs = ["Master branch only", "Build examples"]
}
