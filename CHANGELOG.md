# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Export panel name as `PanelName`. ([851b486](https://github.com/pocka/storybook-addon-designs/commit/851b486543475384173532be27702e6a776b827d))

## [6.2.1] - 2022-01-06

### Fixed

- Fix `Design` tab does not appear when `renderTarget: "tab"`. ([#134](https://github.com/pocka/storybook-addon-designs/issues/134))

## [6.2.0] - 2021-10-03

### Deprecated

- `experimental-figspec` type. Use `figspec` type instead. The parameter interface is same, just replace the `type` property. ([#127](https://github.com/pocka/storybook-addon-designs/pull/127))

### Added

- `figspec` type ([#127](https://github.com/pocka/storybook-addon-designs/pull/127)).

## [6.1.0] - 2021-08-22

### Added

- An ability to customize addon tab name via `name` property ([#112](https://github.com/pocka/storybook-addon-designs/pull/112)).
- Show the number of design specs in addon tab name ([#112](https://github.com/pocka/storybook-addon-designs/pull/112)).

## [6.0.1] - 2021-07-04

### Fixed

- Fix our Doc Blocks causes a runtime error on some Storybook versions ([#110](https://github.com/pocka/storybook-addon-designs/pull/110)).

## [6.0.0] - 2021-05-17

### Removed

- PDF embedding ([5085b1c](https://github.com/pocka/storybook-addon-designs/commit/5085b1c9a9b0829fa5e2ed1ebba11c46d54dcb1a)).
- Support for Storybook@v5.x ([6598be6](https://github.com/pocka/storybook-addon-designs/commit/6598be61ae6869ff6b50e502330d4fcd71b44d8f)).

### Added

- Experimental [Figspec](https://github.com/pocka/figspec) embedding (enchanced Figma embeds powered by Figma API), see [here][figspec-usage] for the usage ([7066b62](https://github.com/pocka/storybook-addon-designs/commit/7066b62a2836f4b8b480b81e1c17d60f3f41b752)).

[figspec-usage]: https://pocka.github.io/storybook-addon-designs/?path=/story/docs-figma-figspec-readme--page

### Fixed

- Improve reliablity between story/design changes ([#97](https://github.com/pocka/storybook-addon-designs/pull/97)).
- Remove `peerDependencies`, which is used as constraints for transitive dependencies ([94bcd84](https://github.com/pocka/storybook-addon-designs/commit/94bcd84aa2013d06c63f5502b085b031a1deb459)).

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
