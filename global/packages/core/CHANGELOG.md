# Change Log

## 0.45.10

### Patch Changes

- [`ecf8797f`](https://github.com/authup/authup/commit/ecf8797fcacff6a560564fb9d01561c04b56cc63) Thanks [@tada5hi](https://github.com/tada5hi)! - fix throwing error

## 0.45.9

### Patch Changes

- [`f0b015a0`](https://github.com/authup/authup/commit/f0b015a07c960610031412368f83fc07ba4dde40) Thanks [@tada5hi](https://github.com/tada5hi)! - patch ecosystem

## 0.45.8

### Patch Changes

- [`63b4414e`](https://github.com/authup/authup/commit/63b4414eed4442a40dd25aab7c0dd69d0bd46f26) Thanks [@tada5hi](https://github.com/tada5hi)! - fix docker build

## 0.45.7

### Patch Changes

- [`7faa3d10`](https://github.com/authup/authup/commit/7faa3d10dc0a048a84792d6d0d7a2dc717f13e1b) Thanks [@tada5hi](https://github.com/tada5hi)! - next patch release

## 0.45.6

### Patch Changes

- [`9b94d2be`](https://github.com/authup/authup/commit/9b94d2be82498faa4e28d63450d8e8c1beda5d37) Thanks [@tada5hi](https://github.com/tada5hi)! - force docker publish to docker.io

## 0.45.5

### Patch Changes

- [`3f5d3d72`](https://github.com/authup/authup/commit/3f5d3d728576a51ec96fac740a2738451d2d2cd1) Thanks [@tada5hi](https://github.com/tada5hi)! - release docker

## 0.45.4

### Patch Changes

- [`622729b0`](https://github.com/authup/authup/commit/622729b086d0a833b4e18bcb0ce9c046ebe0d1d8) Thanks [@tada5hi](https://github.com/tada5hi)! - force docker release

## 0.45.3

### Patch Changes

- [`05849783`](https://github.com/authup/authup/commit/058497834a176c5efa4412408fda5de144a3bc61) Thanks [@tada5hi](https://github.com/tada5hi)! - trigger release workflow

## 0.45.2

### Patch Changes

- [`c4f56913`](https://github.com/authup/authup/commit/c4f56913ceb64100ec86f443d1eceddb4adc0d1c) Thanks [@tada5hi](https://github.com/tada5hi)! - bump to next patch version

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.45.0](https://github.com/authup/authup/compare/v0.44.0...v0.45.0) (2023-10-23)

### Bug Fixes

- **deps:** bump @types/jsonwebtoken from 9.0.3 to 9.0.4 ([#1444](https://github.com/authup/authup/issues/1444)) ([185bee1](https://github.com/authup/authup/commit/185bee120615e5c51a9d643b9af03d73c35e56d0))

# [0.44.0](https://github.com/authup/authup/compare/v0.42.0...v0.44.0) (2023-10-07)

### Bug Fixes

- exposing client errors via API ([00098fb](https://github.com/authup/authup/commit/00098fb0971247f2748b928942d0aa169190e7b9))

### Features

- enhance removing duplicte slashes ([9dd17b2](https://github.com/authup/authup/commit/9dd17b26ebf0ab9e7a776dedc6736069e4221fd7))

# [0.43.0](https://github.com/authup/authup/compare/v0.42.0...v0.43.0) (2023-10-05)

### Features

- enhance removing duplicte slashes ([ee3302b](https://github.com/authup/authup/commit/ee3302b019c4c87e21fc9fb377e08d0ef8020a55))

# [0.42.0](https://github.com/authup/authup/compare/v0.41.0...v0.42.0) (2023-10-05)

### Bug Fixes

- **deps:** bump @types/jsonwebtoken from 9.0.2 to 9.0.3 ([#1387](https://github.com/authup/authup/issues/1387)) ([67869f4](https://github.com/authup/authup/commit/67869f4fa471bc4a983ba12803a086fb09c60555))

### Features

- bump routup to v3.0 ([f46f066](https://github.com/authup/authup/commit/f46f0661923a64b392fd62a845a5bab9a2f0891c))

# [0.41.0](https://github.com/authup/authup/compare/v0.40.3...v0.41.0) (2023-09-01)

### Bug Fixes

- **deps:** bump @ebec/http from 1.1.0 to 1.1.1 ([#1343](https://github.com/authup/authup/issues/1343)) ([2e92c03](https://github.com/authup/authup/commit/2e92c03836b087e3a4499951f5e6f1032f5bb113))
- **deps:** bump hapic to v2.3.0 ([23d59bd](https://github.com/authup/authup/commit/23d59bd02f09ffbdfbae7534914b7004894b1b52))

# [0.40.0](https://github.com/authup/authup/compare/v0.39.1...v0.40.0) (2023-08-15)

### Features

- implemmented socket manager + refactored entiy-{list,manager} ([b6ddb51](https://github.com/authup/authup/commit/b6ddb513a89d495e7a86dc9e5a41eabc23db44a8))
- simplified entity assign actions ([c22ab45](https://github.com/authup/authup/commit/c22ab4528b1df0e81500bfdc59ab6bcf08517a08))

# [0.39.0](https://github.com/authup/authup/compare/v0.38.0...v0.39.0) (2023-07-18)

### Bug Fixes

- oauth2 github identity-provider workflow ([f6843e2](https://github.com/authup/authup/commit/f6843e2957224f87ff8cd2dc44a94623afc84016))
- rename identity-provider protocol_config column to preset ([bf4020e](https://github.com/authup/authup/commit/bf4020e7033de7584fb3f27a4b58452afd8a6eeb))
- rename realm column drop_able to built_in ([dd93239](https://github.com/authup/authup/commit/dd932393ba7391b9b0196dc3bbb63718a1f89ec0))

### Features

- better typing and structure for entity-{list,manager} ([abbfe43](https://github.com/authup/authup/commit/abbfe43587a02e8b0a6c4b3fd5ad10379a24acc4))
- extended identity-provider form to manage protocols and protocol-configs ([0d01e7f](https://github.com/authup/authup/commit/0d01e7f49510722ec3fdd32050c22d64f931e478))
- implemented (social)login flow for identity provider authorization & redirect ([8db22c9](https://github.com/authup/authup/commit/8db22c9ef7adb29487c3bb6068ed34c53a7670b9))
- implemented entity-manager + created domain entity components ([391969d](https://github.com/authup/authup/commit/391969d4c4ba0abd325a2fbc032da4eef0eab66c))
- split identity-provider form fields + additional utitlity components ([a50a695](https://github.com/authup/authup/commit/a50a695614f8261083776e1d0d34418dba2ceeec))

# [0.38.0](https://github.com/authup/authup/compare/v0.37.1...v0.38.0) (2023-06-29)

**Note:** Version bump only for package @authup/core

## [0.37.1](https://github.com/authup/authup/compare/v0.37.0...v0.37.1) (2023-06-14)

### Bug Fixes

- bump hapic to v2.x ([2dd66ed](https://github.com/authup/authup/commit/2dd66ed87e89338be682a93bec4fe12ca86be712))
- bump minimatch to v9.x ([0c63d48](https://github.com/authup/authup/commit/0c63d481d20dbae273130595bde4453b476eca37))
- rename token-hook-options to client-response-error-token-hook-options ([103f707](https://github.com/authup/authup/commit/103f707002b38f39c05fcbcef80167cd2945da37))

# [0.37.0](https://github.com/authup/authup/compare/v0.36.0...v0.37.0) (2023-05-31)

### Bug Fixes

- add mising type export ([b4d5944](https://github.com/authup/authup/commit/b4d594451ab17725690c5a526391ec64e785513a))
- **deps:** bump @ebec/http from 1.0.0 to 1.1.0 ([#1148](https://github.com/authup/authup/issues/1148)) ([9f3de59](https://github.com/authup/authup/commit/9f3de59114efc3cb8bb37d9de5de71f3b24843bd))
- **deps:** bump smob to v1.4.0 ([8eefa83](https://github.com/authup/authup/commit/8eefa83a55271ad139dde2e0ccbacc8c937e6a4e))

# [0.36.0](https://github.com/authup/authup/compare/v0.35.0...v0.36.0) (2023-05-27)

### Bug Fixes

- add missing call for token created hook after token refresh ([ff31fe8](https://github.com/authup/authup/commit/ff31fe88804206b9ea84e6e24b9b55d5deb6af42))
- rename register-timer to set-timer ([77793bc](https://github.com/authup/authup/commit/77793bc961e4695520dd08187182238647aee2ba))

### Features

- cleanup and relocate auth store + set token max age for oauth2 grant types ([13643fd](https://github.com/authup/authup/commit/13643fd76e8c471f8d90b555c386041a34bcb2ff))
- refactor and optimized client response error token hook ([fae52c8](https://github.com/authup/authup/commit/fae52c8cfcc0aa563d6edd0702f3438ab76e6e5a))

# [0.35.0](https://github.com/authup/authup/compare/v0.34.0...v0.35.0) (2023-05-25)

### Features

- add callback handler for token creator ([515bdee](https://github.com/authup/authup/commit/515bdee793de15a8bbe8ad97a1f1db483984383a))
- allow disabling token refresh timer + add token creation hook option ([d042e62](https://github.com/authup/authup/commit/d042e62829241df930ef43141aa8dc6dae46408d))

# [0.34.0](https://github.com/authup/authup/compare/v0.33.0...v0.34.0) (2023-05-24)

### Bug Fixes

- better token error handling + token error verification ([e323e83](https://github.com/authup/authup/commit/e323e834b2f4f695fd9b0c8dc1629d6a4b265ebe))
- **deps:** bump @types/jsonwebtoken from 9.0.1 to 9.0.2 ([#1061](https://github.com/authup/authup/issues/1061)) ([d00c6e3](https://github.com/authup/authup/commit/d00c6e3b62aa15a52fa59924e57d388aa0d72fdf))
- **deps:** bump smob from 1.0.0 to 1.1.1 ([#1122](https://github.com/authup/authup/issues/1122)) ([0dc6667](https://github.com/authup/authup/commit/0dc66679c7b65c37f2eec5793727d00b0c35c013))

### Features

- better error messages for refresh_token grant type ([13f3239](https://github.com/authup/authup/commit/13f32392cf234c81b3d1c787f0c586036e2c4968))

# [0.33.0](https://github.com/authup/authup/compare/v0.32.3...v0.33.0) (2023-04-24)

### Bug Fixes

- http client (error) hook implementation ([86ddd6c](https://github.com/authup/authup/commit/86ddd6c341a36ab37cf76844129552031618c926))
- rename retry state tracker ([a233a61](https://github.com/authup/authup/commit/a233a6155f9f0fa5d29490a9b79bea7e0c88f221))
- typings for auth error check ([8a69037](https://github.com/authup/authup/commit/8a6903746e5c16d804df3c5d90de1360f82fcc89))

### Features

- bump hapic to v2.0.0-alpha.x (axios -> fetch) ([#1036](https://github.com/authup/authup/issues/1036)) ([e09c919](https://github.com/authup/authup/commit/e09c91930d65b41725e5b1c4e26c21f9a5c67342))
- implemented hapic v2.0 alpha ([f1da95b](https://github.com/authup/authup/commit/f1da95bb3be6d1fe0cfd195a44a63c5a8d60dc6c))

## [0.32.2](https://github.com/authup/authup/compare/v0.32.1...v0.32.2) (2023-04-05)

### Bug Fixes

- restructured ability-manger in module + force version bump ([b59f485](https://github.com/authup/authup/commit/b59f485eec2e6e7ddf6d771f7eaad0f1ef46b569))

## [0.32.1](https://github.com/authup/authup/compare/v0.32.0...v0.32.1) (2023-04-04)

### Bug Fixes

- adjusted http interceptors ([57bedf7](https://github.com/authup/authup/commit/57bedf7bb4d8d98bec8445420624dbff580f26b1))
- non async response interceptor should throw error ([e7f22d6](https://github.com/authup/authup/commit/e7f22d6c6dab07f7f9a916393c297c14c8ffc010))

# [0.32.0](https://github.com/authup/authup/compare/v0.31.3...v0.32.0) (2023-04-03)

### Features

- move token-creator & http interceptor to global core package ([3824f86](https://github.com/authup/authup/commit/3824f86799003de2f4fc3602522fcbfbafa4d13c))
- use core token-interceptor for ui token session management ([33ec6e0](https://github.com/authup/authup/commit/33ec6e0ad835c7203d3d848f074a2210507e0ad3))

## [0.31.3](https://github.com/authup/authup/compare/v0.31.2...v0.31.3) (2023-04-03)

### Bug Fixes

- config database option validator ([82afa32](https://github.com/authup/authup/commit/82afa3286fbd84cce8a9bdedc29fcbb84aa92962))

## [0.31.2](https://github.com/authup/authup/compare/v0.31.1...v0.31.2) (2023-04-03)

### Bug Fixes

- mounting of http interceptor + better struct for verification data ([0ee1e40](https://github.com/authup/authup/commit/0ee1e403752e5576ae2d22a1b840ce05ae452c10))

## [0.31.1](https://github.com/authup/authup/compare/v0.31.0...v0.31.1) (2023-04-03)

### Bug Fixes

- define userinfo endpoint for userinfo api ([106a3f7](https://github.com/authup/authup/commit/106a3f703c6b49523418a89e816f8501e00be3db))

# [0.31.0](https://github.com/authup/authup/compare/v0.30.1...v0.31.0) (2023-04-03)

### Features

- add user-info domain api + renamed useHTTPClientAPI ([22d1cdc](https://github.com/authup/authup/commit/22d1cdce326bb7a0549d28b04b0157840b3f7623))

# [0.30.0](https://github.com/authup/authup/compare/v0.29.0...v0.30.0) (2023-04-03)

### Features

- complete refactor of adapter + new sub-modules craetor, interceptor & verifier ([9940741](https://github.com/authup/authup/commit/99407417372c0b73ab6bbdfe84d9af177c8785e2))
- support interceptor mounting on client and client driver instance ([a26dafe](https://github.com/authup/authup/commit/a26dafe8174cf9c6de0bf85c294baf8e32d6261a))

# [0.29.0](https://github.com/authup/authup/compare/v0.28.0...v0.29.0) (2023-04-01)

### Bug Fixes

- adjusted README.md, package.json files + renamed http client ([fcf8423](https://github.com/authup/authup/commit/fcf8423228fa73aa2a61ba8de96c0af51dfb0c5f))

# [0.28.0](https://github.com/authup/authup/compare/v0.27.0...v0.28.0) (2023-04-01)

**Note:** Version bump only for package @authup/core

# [0.27.0](https://github.com/authup/authup/compare/v0.26.0...v0.27.0) (2023-04-01)

**Note:** Version bump only for package @authup/core

# [0.26.0](https://github.com/authup/authup/compare/v0.25.0...v0.26.0) (2023-03-30)

### Features

- explicit exclude sub folder files for docker build ([79cffe1](https://github.com/authup/authup/commit/79cffe151d27449420c9c6122206b0540c536acb))

# [0.25.0](https://github.com/authup/authup/compare/v0.24.0...v0.25.0) (2023-03-30)

### Features

- add https proxy tunnel support for identity providers ([6a7b859](https://github.com/authup/authup/commit/6a7b859e31bad6f10dd2fde22cdc6dfab3da2285))

# [0.24.0](https://github.com/authup/authup/compare/v0.23.1...v0.24.0) (2023-03-30)

**Note:** Version bump only for package @authup/core

# [0.23.0](https://github.com/authup/authup/compare/v0.22.0...v0.23.0) (2023-03-30)

### Features

- replaced manual proxy parsing with http client detection ([18c3751](https://github.com/authup/authup/commit/18c3751f3dd3defdd9dfa34ec41522ac14d3b476))

# [0.22.0](https://github.com/Tada5hi/authup/compare/v0.21.0...v0.22.0) (2023-03-26)

### Features

- add oauth2 client as http-client property ([ab5c260](https://github.com/Tada5hi/authup/commit/ab5c2609fe7e88b63bc75b4077846f1875ba0571))

# [0.21.0](https://github.com/Tada5hi/authup/compare/v0.20.1...v0.21.0) (2023-03-26)

### Bug Fixes

- allow robot integrity check by name ([d6b2a6e](https://github.com/Tada5hi/authup/commit/d6b2a6e82de12c4c4980f0bd5db498398c86e9e7))

### Features

- explicit endpoint to check/reset robot account ([4fe0e14](https://github.com/Tada5hi/authup/commit/4fe0e14e5b824506fa0231ab6dc7fb308bcbe2ae))

# [0.20.0](https://github.com/Tada5hi/authup/compare/v0.19.0...v0.20.0) (2023-03-24)

### Features

- add integrity check for robot credentials in vault ([5700c80](https://github.com/Tada5hi/authup/commit/5700c8077329ca7a01b0f4dee919c7749b304e60))

# [0.19.0](https://github.com/Tada5hi/authup/compare/v0.18.0...v0.19.0) (2023-03-23)

**Note:** Version bump only for package @authup/core

# [0.18.0](https://github.com/Tada5hi/authup/compare/v0.17.2...v0.18.0) (2023-03-23)

### Bug Fixes

- **deps:** bump @ebec/http from 0.2.2 to 1.0.0 ([#953](https://github.com/Tada5hi/authup/issues/953)) ([4786cd2](https://github.com/Tada5hi/authup/commit/4786cd2e7a8d849b6ec6a164c4bfc1c48e469851))
- **deps:** bump smob from 0.1.0 to 1.0.0 ([#952](https://github.com/Tada5hi/authup/issues/952)) ([363fc69](https://github.com/Tada5hi/authup/commit/363fc6902848a16982626f4fbe3cb7e5c1afd053))

### Features

- add realm- & scope-subscriber + minor cleanup + enum referencing ([dc4f1ba](https://github.com/Tada5hi/authup/commit/dc4f1ba167259f6c7c8f381a8569fe255646e85d))
- add vault client support for robot credentials syncing ([66b2300](https://github.com/Tada5hi/authup/commit/66b23007fdfa4221c48f2d66f5524fdb5b4f3ed3))
- adjusted lerna config ([215b3a5](https://github.com/Tada5hi/authup/commit/215b3a55916d8c923f404434985a68826650c136))
- broadcast redis events for changed domain entities ([4b2fd5e](https://github.com/Tada5hi/authup/commit/4b2fd5e44aa94a2d43d6c8b872bb0f298e0b4da2))
- support direct & socket domain events ([b9225c2](https://github.com/Tada5hi/authup/commit/b9225c21b5437ced4c6d0a02b75de3f35f1f64a3))

## [0.17.2](https://github.com/Tada5hi/authup/compare/v0.17.1...v0.17.2) (2023-03-20)

### Bug Fixes

- **deps:** bump hapci/\*\* to v1.3.0 ([2e7068a](https://github.com/Tada5hi/authup/commit/2e7068ae21e5a4d0dae0b9cde90a308efbc247de))

# [0.17.0](https://github.com/Tada5hi/authup/compare/v0.16.0...v0.17.0) (2023-03-13)

**Note:** Version bump only for package @authup/core

# [0.16.0](https://github.com/Tada5hi/authup/compare/v0.15.4...v0.16.0) (2023-02-28)

**Note:** Version bump only for package @authup/core

## [0.15.4](https://github.com/Tada5hi/authup/compare/v0.15.3...v0.15.4) (2023-02-24)

### Bug Fixes

- allow dot character in user name ([e430b4c](https://github.com/Tada5hi/authup/commit/e430b4c6b54dee72303bceeb33dcc8692abde73a))

## [0.15.3](https://github.com/Tada5hi/authup/compare/v0.15.2...v0.15.3) (2023-02-23)

### Bug Fixes

- **deps:** bump @ucast/mongo2js from 1.3.3 to 1.3.4 ([#863](https://github.com/Tada5hi/authup/issues/863)) ([baee990](https://github.com/Tada5hi/authup/commit/baee990378cc7fe613042ebae66b80f0139fe713))

# [0.15.0](https://github.com/Tada5hi/authup/compare/v0.14.1...v0.15.0) (2023-02-07)

### Features

- **server-http:** restructured & optimized oauth2 sub module ([8d8802d](https://github.com/Tada5hi/authup/commit/8d8802d002616880e289b9eacc3ad60df5d3e2b6))

# [0.14.0](https://github.com/Tada5hi/authup/compare/v0.13.0...v0.14.0) (2023-01-29)

### Features

- minor code cleanup + fixed redis caching strategy ([a5286b7](https://github.com/Tada5hi/authup/commit/a5286b716e6432bd872cda2e06def8f0c3ab9111))

# [0.13.0](https://github.com/Tada5hi/authup/compare/v0.12.1...v0.13.0) (2023-01-28)

**Note:** Version bump only for package @authup/core

## [0.12.1](https://github.com/Tada5hi/authup/compare/v0.12.0...v0.12.1) (2023-01-28)

### Bug Fixes

- peer-dependency version + updated license information ([f693215](https://github.com/Tada5hi/authup/commit/f69321538afbd2923287209593cdebcedaa29637))

# [0.12.0](https://github.com/Tada5hi/authup/compare/v0.11.1...v0.12.0) (2023-01-28)

**Note:** Version bump only for package @authup/core

## [0.11.1](https://github.com/Tada5hi/authup/compare/v0.11.0...v0.11.1) (2023-01-27)

### Bug Fixes

- **deps:** updated dependencies ([b3d221c](https://github.com/Tada5hi/authup/commit/b3d221c862c4f4dbd0ccf018566ef00796fcd591))

# [0.11.0](https://github.com/Tada5hi/authup/compare/v0.10.1...v0.11.0) (2023-01-27)

**Note:** Version bump only for package @authup/core

## [0.10.1](https://github.com/Tada5hi/authup/compare/v0.10.0...v0.10.1) (2023-01-23)

### Bug Fixes

- **deps:** reverted minimatch version to v5 ([7385d0d](https://github.com/Tada5hi/authup/commit/7385d0d25b729087000f81d2d04c2033f7464958))

# [0.10.0](https://github.com/Tada5hi/authup/compare/v0.9.0...v0.10.0) (2023-01-20)

### Features

- bump (peer-) dependency version ([f2faacb](https://github.com/Tada5hi/authup/commit/f2faacb0f19b81251bb063dd49a2d91539e4e39d))

# [0.9.0](https://github.com/Tada5hi/authup/compare/v0.8.0...v0.9.0) (2023-01-20)

### Bug Fixes

- **deps:** bump minimatch from 5.1.2 to 6.1.5 ([#763](https://github.com/Tada5hi/authup/issues/763)) ([179226c](https://github.com/Tada5hi/authup/commit/179226cc1c312cc7c95c2fe1711164df15b1dfe1))

### Features

- lazy password grant + minor entity management ui guards ([127ec1c](https://github.com/Tada5hi/authup/commit/127ec1c13f108f2a032aba67dd3b662d35251dc7))

# [0.8.0](https://github.com/Tada5hi/authup/compare/v0.7.0...v0.8.0) (2023-01-16)

### Bug Fixes

- **deps:** bump @types/jsonwebtoken from 9.0.0 to 9.0.1 ([f2ef31c](https://github.com/Tada5hi/authup/commit/f2ef31c46eae74a9d8b8d219a3bcb418d2d48bb0))
- **deps:** bump smob from 0.0.6 to 0.0.7 ([535685c](https://github.com/Tada5hi/authup/commit/535685cfb55e58dfa88635d1f08c0e3909d417dd))

### Features

- replaced ts-jest & partially rollup with swc ([bf2b1aa](https://github.com/Tada5hi/authup/commit/bf2b1aa7ed4f0ee9e63fabf0d1d38754bbfa3310))

# [0.7.0](https://github.com/Tada5hi/authup/compare/v0.6.3...v0.7.0) (2023-01-11)

### Features

- unified entity columns for sqlite, mysql & postgres ([f379caa](https://github.com/Tada5hi/authup/commit/f379caac7b7f95145629734b692a7d38a472c9b2))

## [0.6.3](https://github.com/Tada5hi/authup/compare/v0.6.2...v0.6.3) (2023-01-10)

### Bug Fixes

- **common:** peer-dependency version ([76902ca](https://github.com/Tada5hi/authup/commit/76902ca1aadbcf9f96de147f428c2e322bfee916))

## [0.6.2](https://github.com/Tada5hi/authup/compare/v0.6.1...v0.6.2) (2023-01-10)

**Note:** Version bump only for package @authup/core

# [0.6.0](https://github.com/Tada5hi/authup/compare/v0.5.0...v0.6.0) (2023-01-08)

### Bug Fixes

- oauth2 authorization code grant flow ([6422a9b](https://github.com/Tada5hi/authup/commit/6422a9b207474596363b3d48ce12e0c8e184ae8d))

# [0.5.0](https://github.com/Tada5hi/authup/compare/v0.4.0...v0.5.0) (2023-01-08)

### Bug Fixes

- **deps:** bump @types/jsonwebtoken from 8.5.9 to 9.0.0 ([17bc27b](https://github.com/Tada5hi/authup/commit/17bc27b85466a34a61b0d4c89e516760d549d42e))

### Features

- add robot/user renaming constraints + non owned permission assign ([ea12e73](https://github.com/Tada5hi/authup/commit/ea12e7309c6d539ec005cc5460ef50a2ebe8c931))
- **server-database:** updated indexes + realmified resources ([cb5e19e](https://github.com/Tada5hi/authup/commit/cb5e19ef1e49cdde6c0e63c6e59167638a9f79d6))
- **server-http:** allow name/slug identifier for fetching resource ([c05a69f](https://github.com/Tada5hi/authup/commit/c05a69f46da14e08966acd636644e65addc83370))

# [0.4.0](https://github.com/Tada5hi/authup/compare/v0.3.1...v0.4.0) (2022-12-21)

### Bug Fixes

- **deps:** bump minimatch from 5.1.1 to 5.1.2 ([c656530](https://github.com/Tada5hi/authup/commit/c656530601d987367e957a917b11e28bf09868c4))

### Features

- add scope management (http-endpoint, db-entity, ...) ([2ab4236](https://github.com/Tada5hi/authup/commit/2ab42364e44f032cb93c9946c40a9fd71f287c44))
- further enhancement for client & scope management ([29d1f3e](https://github.com/Tada5hi/authup/commit/29d1f3ee5ecde14afa0b692dd9589887bc2df54e))
- **ui:** add oauth2 authorization modal ([858e972](https://github.com/Tada5hi/authup/commit/858e9723dc3bd319b5b05f4a29f5c1a6d1e690fd))

# [0.3.0](https://github.com/Tada5hi/authup/compare/v0.2.2...v0.3.0) (2022-12-12)

### Bug Fixes

- **server-http:** enhance {user,role,robot} endpoint validation ([842afcc](https://github.com/Tada5hi/authup/commit/842afccee90a0c3f7510ba61edf1cfe9f7840033))
- **ui:** minor fixes (list-builder,{client,permission}-form,...) ([666b41f](https://github.com/Tada5hi/authup/commit/666b41f2fccc370815046087a621882f0159f1cc))

### Features

- add client/application management ([5327e9b](https://github.com/Tada5hi/authup/commit/5327e9bf411dfeeadef60d8f28ea81e0bc638f38))
- allow non realm assigned clients ([3be4011](https://github.com/Tada5hi/authup/commit/3be401106c5b03f1151c182e63eae0a0d543fa36))
- enhanced & extended permission management ([3c33bd0](https://github.com/Tada5hi/authup/commit/3c33bd0e0dcf1035d546fce375a76bb1c1312a05))
- refactored db schema - uuid as primary key for realm & perms ([9f9d10e](https://github.com/Tada5hi/authup/commit/9f9d10e5e1e2fc739f9f3c26a0eb0b4449097d19))

## [0.2.2](https://github.com/Tada5hi/authup/compare/v0.2.1...v0.2.2) (2022-12-09)

**Note:** Version bump only for package @authup/core

# [0.2.0](https://github.com/Tada5hi/authup/compare/v0.1.6...v0.2.0) (2022-12-09)

**Note:** Version bump only for package @authup/core

# 0.1.0 (2022-12-08)

### Bug Fixes

- bump typeorm-extension, rapiq & routup version ([e37b993](https://github.com/Tada5hi/authup/commit/e37b993bfbf3d11b24c696d59f1382cc4379a72c))
- **deps:** bump @ebec/http from 0.0.4 to 0.1.0 ([016baa2](https://github.com/Tada5hi/authup/commit/016baa22fd25390b0320e90d77a0fb870716c294))

### Features

- better config handling ([b1582b7](https://github.com/Tada5hi/authup/commit/b1582b798174c2c44e06271f3250db637a159bfd))
- enhance check for readable & writable realm resources ([a048358](https://github.com/Tada5hi/authup/commit/a048358f3e6bc1ddfbffe2ec76148b1ebee276ed))
- **server-core:** replaced http framework ([6273ae6](https://github.com/Tada5hi/authup/commit/6273ae680f82a4e27ba527b9eb260bb81ee75d20))