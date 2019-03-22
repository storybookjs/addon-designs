workflow "New workflow" {
  on = "push"
  resolves = ["Execute only for master branch"]
}

action "Execute only for master branch" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}
