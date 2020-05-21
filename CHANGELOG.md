# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `offscreen` option. (PR: [#40](https://github.com/pocka/storybook-addon-designs/pull/40))
- `renderTarget` preset option. (PR: [#47](https://github.com/pocka/storybook-addon-designs/pull/47))

### Fixed

- Fix Figma preview's scale value goes too small when the preview located at second tab or later one. (PR: [#40](https://github.com/pocka/storybook-addon-designs/pull/40))

## [5.2.1] - 2020-05-05

### Fixed

- Fix the addon code is not being transpiled down to ES5. (PR: [#51](https://github.com/pocka/storybook-addon-designs/pull/51))
- Provide CommonJS modules for non-webpack environments (e.g. Storyshots+Jest). (PR: [#52](https://github.com/pocka/storybook-addon-designs/pull/52))

## [5.2.0] - 2020-02-01

### Added

- `link` type. (PR: [#32](https://github.com/pocka/storybook-addon-designs/pull/32))

## [5.1.2] - 2020-01-22

### Fixed

- Fix crashing when there is no `design` parameter. (PR: [#30](https://github.com/pocka/storybook-addon-designs/pull/30))

## [5.1.1] - 2019-06-06

### Fixed

- Do not persist design panel. (PR: [#15](https://github.com/pocka/storybook-addon-designs/pull/15))

## [5.1.0] - 2019-05-12

### Added

- multiple designs tab support. (PR: [#9](https://github.com/pocka/storybook-addon-designs/pull/9))
