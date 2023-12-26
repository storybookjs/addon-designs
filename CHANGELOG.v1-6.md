# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Bump the minimum supported Storybook version to v6.4.x. ([605f751](https://github.com/pocka/storybook-addon-designs/commit/605f75145aca453f8b6d1d3e432b493e3be5bc0c))

### Added

- `sketch` type. ([4e75ddf](https://github.com/pocka/storybook-addon-designs/commit/4e75ddfbc46ec5760db198cbf6d0d8a4074987db))
- Support for Storybook v7. ([#160](https://github.com/pocka/storybook-addon-designs/pull/160), [#173](https://github.com/pocka/storybook-addon-designs/pull/173), [3789d09](https://github.com/pocka/storybook-addon-designs/commit/3789d09d34166a87b11026120bae4eed2f45166a))

### Fixed

- Declare necessary `peerDependencies`. ([#133](https://github.com/pocka/storybook-addon-designs/pull/133), [dc8dac0](https://github.com/pocka/storybook-addon-designs/commit/dc8dac0a66224a2d6842c2e3bd6127860023f078))
- Improve content loading performance by retaining loaded content. ([#157](https://github.com/pocka/storybook-addon-designs/pull/157))
- Fix addon crashes when `type` is not absent. ([9eeb0e2](https://github.com/pocka/storybook-addon-designs/commit/9eeb0e2786f2f3e425df592a28f4fb33af5d00b9))
- Prevent the entire Storybook UI crash when uncaught error thrown in the addon. ([e51e907](https://github.com/pocka/storybook-addon-designs/commit/e51e90791e4ed71413e023de472a6ead0cae52c2))

## [6.3.1] - 2022-06-14

### Fixed

- Include `blocks.d.ts` in published tarball. ([d966871](https://github.com/pocka/storybook-addon-designs/commit/d966871785d87e7f919b37bb686460bb51e21697))

## [6.3.0] - 2022-06-14

### Added

- Export panel name as `PanelName`. ([851b486](https://github.com/pocka/storybook-addon-designs/commit/851b486543475384173532be27702e6a776b827d))

### Fixed

- Add type definition file for `storybook-addon-designs/blocks`. ([4bf0125](https://github.com/pocka/storybook-addon-designs/commit/4bf012598b476b891779f35d614f9b212af24765))

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

[unreleased]: https://github.com/pocka/storybook-addon-designs/compare/v6.3.1...HEAD
[6.3.1]: https://github.com/pocka/storybook-addon-designs/compare/v6.3.0...v6.3.1
[6.3.0]: https://github.com/pocka/storybook-addon-designs/compare/v6.2.1...v6.3.0
[6.2.1]: https://github.com/pocka/storybook-addon-designs/compare/v6.2.0...v6.2.1
[6.2.0]: https://github.com/pocka/storybook-addon-designs/compare/v6.1.0...v6.2.0
[6.1.0]: https://github.com/pocka/storybook-addon-designs/compare/v6.0.1...v6.1.0
[6.0.1]: https://github.com/pocka/storybook-addon-designs/compare/v6.0.0...v6.0.1
[6.0.0]: https://github.com/pocka/storybook-addon-designs/compare/v5.4.6...v6.0.0
[5.4.6]: https://github.com/pocka/storybook-addon-designs/compare/v5.4.5...v5.4.6
[5.4.5]: https://github.com/pocka/storybook-addon-designs/compare/v5.4.4...v5.4.5
[5.4.4]: https://github.com/pocka/storybook-addon-designs/compare/v5.4.3...v5.4.4
[5.4.3]: https://github.com/pocka/storybook-addon-designs/compare/v5.4.2...v5.4.3
[5.4.2]: https://github.com/pocka/storybook-addon-designs/compare/v5.4.1...v5.4.2
[5.4.1]: https://github.com/pocka/storybook-addon-designs/compare/v5.4.0...v5.4.1
[5.4.0]: https://github.com/pocka/storybook-addon-designs/compare/v5.3.0...v5.4.0
[5.3.0]: https://github.com/pocka/storybook-addon-designs/compare/v5.2.1...v5.3.0
[5.2.1]: https://github.com/pocka/storybook-addon-designs/compare/v5.2.0...v5.2.1
[5.2.0]: https://github.com/pocka/storybook-addon-designs/compare/v5.1.2...v5.2.0
[5.1.2]: https://github.com/pocka/storybook-addon-designs/compare/v5.1.1...v5.1.2
[5.1.1]: https://github.com/pocka/storybook-addon-designs/compare/v5.1.0...v5.1.1
[5.1.0]: https://github.com/pocka/storybook-addon-designs/compare/v5.0.0...v5.1.0
