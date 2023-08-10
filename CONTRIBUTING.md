# Contributing guide

## Create a release

1. Make sure there is no unstaged files in your local repository.
2. Update `CHANGELOG.md`.
3. Stage `CHANGELOG.md`.
4. Run `npm version <new-version> -ws`.
5. Stage changed files (e.g. `git add package-lock.json packages`)
6. Run `npm version <new-version> --include-workspace-root --force`. (`<new-version>` is the same one you specified at step 4)
7. Push the generated commit and tag.
8. Wait for CI publish the new version to npm.
9. Create a new release on [GitHub](https://github.com/storybookjs/addon-designs/releases).
