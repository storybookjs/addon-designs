# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [5.4.6] - 2021-07-04

### Fixed

- Fix our Doc Blocks causes a runtime error on some Storybook versions ([61ce68e](https://github.com/pocka/storybook-addon-designs/commit/61ce68e8613878cc28c8b9837d45c206b2ba8119)).

## [5.4.5] - 2021-02-20

### Fixed

- Fix tab contents does not switch between stories ([#83](https://github.com/pocka/storybook-addon-designs/issues/83)).

## [5.4.4] - 2021-02-18

### Fixed

- Hide loading placeholder for `type: "iframe"` when the embedded iframe is loaded ([#81](https://github.com/pocka/storybook-addon-designs/issues/81)).

## [5.4.3] - 2021-01-13

### Fixed

- Fix `allowFullscreen` option is outdated on each render ([#78](https://github.com/pocka/storybook-addon-designs/pull/78)).

## [5.4.2] - 2020-09-16

### Added

- Support for Storybook 6.x ([#67](https://github.com/pocka/storybook-addon-designs/issues/67#issuecomment-692846928)).

## [5.4.1] - 2020-07-31

### Fixed

- Fix `blocks.js` is missing from published package ([#64](https://github.com/pocka/storybook-addon-designs/issues/64)).

## [5.4.0] - 2020-06-27

### Added

- Doc Blocks. (PR: [#62](https://github.com/pocka/storybook-addon-designs/pull/62))

## [5.3.0] - 2020-06-20

### Added

- `offscreen` option. (PR: [#40](https://github.com/pocka/storybook-addon-designs/pull/40))
- `renderTarget` preset option. (PR: [#47](https://github.com/pocka/storybook-addon-designs/pull/47))
- An addon preset file so you can write `addons: ["storybook-addon-designs"]` in `main.js`.
- Export an addon name as `PARAM_KEY` and an interface type of config as `Config` from entry file. (PR: [#57](https://github.com/pocka/storybook-addon-designs/pull/57))

### Fixed

- Fix Figma preview's scale value goes too small when the preview located at second tab or later one. (PR: [#40](https://github.com/pocka/storybook-addon-designs/pull/40))
- You can now disable this addon by `disabled: true` option. (PR: [#57](https://github.com/pocka/storybook-addon-designs/pull/57))

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
