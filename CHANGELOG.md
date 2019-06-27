# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="1.16.0"></a>
# [1.16.0](https://github.com/npm-wharf/hikaru/compare/v1.15.0...v1.16.0) (2019-06-27)


### Features

* update apiVersions for later k8s versions ([#13](https://github.com/npm-wharf/hikaru/issues/13)) ([6b8797b](https://github.com/npm-wharf/hikaru/commit/6b8797b))



<a name="1.15.0"></a>
# [1.15.0](https://github.com/npm-wharf/hikaru/compare/v1.14.0...v1.15.0) (2019-04-26)


### Features

* allow passing extra config as parameters, rather than through fount ([#9](https://github.com/npm-wharf/hikaru/issues/9)) ([58b90f5](https://github.com/npm-wharf/hikaru/commit/58b90f5))



<a name="1.14.0"></a>
# [1.14.0](https://github.com/npm-wharf/hikaru/compare/v1.13.0...v1.14.0) (2019-01-07)


### Features

* update mcgonagall to 1.11.0 to support shared services, properly detect when workloads cannot be patched or replaced due to selector changes. ([8373d40](https://github.com/npm-wharf/hikaru/commit/8373d40))



<a name="1.13.0"></a>
# [1.13.0](https://github.com/npm-wharf/hikaru/compare/v1.12.3...v1.13.0) (2019-01-05)


### Features

* introduce Kubernetes API version detection when authenticating with username and password ([d8e9760](https://github.com/npm-wharf/hikaru/commit/d8e9760))



<a name="1.12.3"></a>
## [1.12.3](https://github.com/npm-wharf/hikaru/compare/v1.12.2...v1.12.3) (2018-11-05)


### Bug Fixes

* update mcgonagall version to get latest tokens fix ([1c83ee7](https://github.com/npm-wharf/hikaru/commit/1c83ee7))



<a name="1.12.2"></a>
## [1.12.2](https://github.com/npm-wharf/hikaru/compare/v1.12.1...v1.12.2) (2018-11-05)


### Bug Fixes

* update mcgonagall to pull in additional bug fix for multi-level tokens ([5a498b7](https://github.com/npm-wharf/hikaru/commit/5a498b7))



<a name="1.12.1"></a>
## [1.12.1](https://github.com/npm-wharf/hikaru/compare/v1.12.0...v1.12.1) (2018-11-05)


### Bug Fixes

* update mcgonagall to 1.10.3 support multi-level tokens ([1c09dab](https://github.com/npm-wharf/hikaru/commit/1c09dab))



<a name="1.12.0"></a>
# [1.12.0](https://github.com/npm-wharf/hikaru/compare/v1.10.0...v1.12.0) (2018-10-20)


### Bug Fixes

* typo, missing await ([d1d48d7](https://github.com/npm-wharf/hikaru/commit/d1d48d7))


### Features

* switch to async/await ([#6](https://github.com/npm-wharf/hikaru/issues/6)) ([98bd229](https://github.com/npm-wharf/hikaru/commit/98bd229))



<a name="1.11.0"></a>
# [1.11.0](https://github.com/npm-wharf/hikaru/compare/v1.10.0...v1.11.0) (2018-09-27)


### Bug Fixes

* typo, missing await ([d1d48d7](https://github.com/npm-wharf/hikaru/commit/d1d48d7))


### Features

* switch to async/await ([#6](https://github.com/npm-wharf/hikaru/issues/6)) ([98bd229](https://github.com/npm-wharf/hikaru/commit/98bd229))



<a name="1.10.0"></a>
# [1.10.0](https://github.com/npm-wharf/hikaru/compare/v1.9.5...v1.10.0) (2018-04-29)


### Bug Fixes

* removing last diagnostic console.log in keys module ([2e76e71](https://github.com/npm-wharf/hikaru/commit/2e76e71))


### Features

* add run command to support forced run of specific jobs ([2a09a55](https://github.com/npm-wharf/hikaru/commit/2a09a55))



<a name="1.9.5"></a>
## [1.9.5](https://github.com/npm-wharf/hikaru/compare/v1.9.4...v1.9.5) (2018-04-25)


### Bug Fixes

* correct bad path in kicker.toml ([bce69fb](https://github.com/npm-wharf/hikaru/commit/bce69fb))
* correct edge case causing duplicate log entries, add debug output on auth failures due to bad key exchange ([592cc7a](https://github.com/npm-wharf/hikaru/commit/592cc7a))
* correct paths in Dockerfile ([33c27ff](https://github.com/npm-wharf/hikaru/commit/33c27ff))
* correct the way the bearer token header was constructed ([913ffbc](https://github.com/npm-wharf/hikaru/commit/913ffbc))
* remove console log statements (in place for troubleshooting) ([bdce57e](https://github.com/npm-wharf/hikaru/commit/bdce57e))



<a name="1.9.4"></a>
## [1.9.4](https://github.com/npm-wharf/hikaru/compare/v1.9.3...v1.9.4) (2018-04-23)


### Bug Fixes

* base Docker image on kickerd and update README ([927cdb1](https://github.com/npm-wharf/hikaru/commit/927cdb1))



<a name="1.9.3"></a>
## [1.9.3](https://github.com/npm-wharf/hikaru/compare/v1.9.2...v1.9.3) (2018-04-18)


### Bug Fixes

* correct errors with metadata parsing during upgrade command ([6dafed8](https://github.com/npm-wharf/hikaru/commit/6dafed8))



<a name="1.9.2"></a>
## [1.9.2](https://github.com/npm-wharf/hikaru/compare/v1.9.1...v1.9.2) (2018-04-18)


### Bug Fixes

* change resource to workload to better align with kubernetes terminology, remove lingering console.logs in tests ([d0b683d](https://github.com/npm-wharf/hikaru/commit/d0b683d))



<a name="1.9.1"></a>
## [1.9.1](https://github.com/npm-wharf/hikaru/compare/v1.9.0...v1.9.1) (2018-04-03)


### Bug Fixes

* add name labels to prexisting namespaces to allow for reliable network policy targeting ([dc3301a](https://github.com/npm-wharf/hikaru/commit/dc3301a))



<a name="1.9.0"></a>
# [1.9.0](https://github.com/npm-wharf/hikaru/compare/v1.8.1...v1.9.0) (2018-03-30)


### Bug Fixes

* connection should permit cert based auth without a CA to support local dev ([827dd5e](https://github.com/npm-wharf/hikaru/commit/827dd5e))


### Features

* add token and key based auth to secure api ([d838e46](https://github.com/npm-wharf/hikaru/commit/d838e46))



<a name="1.8.1"></a>
## [1.8.1](https://github.com/npm-wharf/hikaru/compare/v1.8.0...v1.8.1) (2018-03-07)


### Bug Fixes

* correct mcgonangall dependency ([88854ec](https://github.com/npm-wharf/hikaru/commit/88854ec))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/npm-wharf/hikaru/compare/v1.7.0...v1.8.0) (2018-03-06)


### Features

* add support for network policies ([c680063](https://github.com/npm-wharf/hikaru/commit/c680063))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/npm-wharf/hikaru/compare/v1.6.6...v1.7.0) (2018-02-16)


### Features

* add support for RBAC ([d84ea11](https://github.com/npm-wharf/hikaru/commit/d84ea11))



<a name="1.6.6"></a>
## [1.6.6](https://github.com/npm-wharf/hikaru/compare/v1.6.5...v1.6.6) (2018-02-06)



<a name="1.6.5"></a>
## [1.6.5](https://github.com/npm-wharf/hikaru/compare/v1.6.4...v1.6.5) (2018-02-06)


### Bug Fixes

* replace on diffs that have containers with port name changes instead of attempting patches (which will fail) ([a49ec11](https://github.com/npm-wharf/hikaru/commit/a49ec11))



<a name="1.6.4"></a>
## [1.6.4](https://github.com/npm-wharf/hikaru/compare/v1.6.3...v1.6.4) (2018-02-01)


### Bug Fixes

* update mcgonagall version to 1.7.x ([774a7bb](https://github.com/npm-wharf/hikaru/commit/774a7bb))



<a name="1.6.3"></a>
## [1.6.3](https://github.com/npm-wharf/hikaru/compare/v1.6.2...v1.6.3) (2018-01-31)


### Bug Fixes

* allow cronjobs that do not run to still get recognized as created during cluster deploy ([6ca4d4e](https://github.com/npm-wharf/hikaru/commit/6ca4d4e))



<a name="1.6.2"></a>
## [1.6.2](https://github.com/npm-wharf/hikaru/compare/v1.6.1...v1.6.2) (2018-01-31)


### Bug Fixes

* correct namespace command for cronjobs and update mcgonagall version ([e1c9425](https://github.com/npm-wharf/hikaru/commit/e1c9425))



<a name="1.6.1"></a>
# [1.6.1](https://github.com/npm-wharf/hikaru/compare/v1.6.0...v1.6.1) (2018-01-09)


### Bug Fixes

* allow raw manifests to correctly target ClusterRoles and ClusterRoleBindings ([8c49c85](https://github.com/npm-wharf/hikaru/commit/8c49c85))


<a name="1.6.0"></a>
# [1.6.0](https://github.com/npm-wharf/hikaru/compare/v1.5.6...v1.6.0) (2017-12-08)


### Features

* default alias cache to /tmp if no $HOME ([#4](https://github.com/npm-wharf/hikaru/issues/4)) ([67dfbe4](https://github.com/npm-wharf/hikaru/commit/67dfbe4))

<a name="1.5.7"></a>
## [1.5.7](https://github.com/npm-wharf/hikaru/compare/v1.5.6...v1.5.7) (2018-01-09)


### Bug Fixes

* allow raw manifests to correctly target ClusterRoles and ClusterRoleBindings ([4d8f4aa](https://github.com/npm-wharf/hikaru/commit/4d8f4aa))


<a name="1.5.6"></a>
## [1.5.6](https://github.com/npm-wharf/hikaru/compare/v1.5.1...v1.5.6) (2017-11-30)


### Bug Fixes

* added deletes param to createStatefulSet ([4d26589](https://github.com/npm-wharf/hikaru/commit/4d26589))
* change to how daemonset status checks are implemented ([227bd8a](https://github.com/npm-wharf/hikaru/commit/227bd8a))
* correct import of mcgonagall in HTTP server to use new org name ([fb12510](https://github.com/npm-wharf/hikaru/commit/fb12510))



<a name="1.5.5"></a>
## [1.5.5](https://github.com/npm-wharf/hikaru/compare/v1.5.1...v1.5.5) (2017-11-29)


### Bug Fixes

* added deletes param to createStatefulSet ([4d26589](https://github.com/npm-wharf/hikaru/commit/4d26589))
* correct import of mcgonagall in HTTP server to use new org name ([fb12510](https://github.com/npm-wharf/hikaru/commit/fb12510))



<a name="1.5.4"></a>
## [1.5.4](https://github.com/npm-wharf/hikaru/compare/v1.5.1...v1.5.4) (2017-11-29)


### Bug Fixes

* added deletes param to createStatefulSet ([4d26589](https://github.com/npm-wharf/hikaru/commit/4d26589))
* correct import of mcgonagall in HTTP server to use new org name ([fb12510](https://github.com/npm-wharf/hikaru/commit/fb12510))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/npm-wharf/hikaru/compare/v1.5.2...v1.5.3) (2017-11-27)


### Bug Fixes

* correct import of mcgonagall in HTTP server to use new org name ([eb476f1](https://github.com/npm-wharf/hikaru/commit/eb476f1))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/npm-wharf/hikaru/compare/v1.5.1...v1.5.2) (2017-11-27)



<a name="1.5.1"></a>
## [1.5.1](https://github.com/npm-wharf/hikaru/compare/v1.5.0...v1.5.1) (2017-11-27)


### Bug Fixes

* enable service updates by including clusterIP when available in the original ([d927d93](https://github.com/npm-wharf/hikaru/commit/d927d93))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/npm-wharf/hikaru/compare/v1.4.3...v1.5.0) (2017-11-27)


### Bug Fixes

* adding deployment api group versioning to deployment commands ([cb3393a](https://github.com/npm-wharf/hikaru/commit/cb3393a))
* correct anonymous manifest status check approach ([ebe7e5e](https://github.com/npm-wharf/hikaru/commit/ebe7e5e))
* correct namespaces for daemonset, delete when replace is unavailable on all resources, update mcgonagall version ([f33020a](https://github.com/npm-wharf/hikaru/commit/f33020a))


### Features

* add alias command ([e149484](https://github.com/npm-wharf/hikaru/commit/e149484))
* add scale flag to support scale factoring ([56bd61f](https://github.com/npm-wharf/hikaru/commit/56bd61f))



<a name="1.4.3"></a>
## [1.4.3](https://github.com/npm-wharf/hikaru/compare/v1.4.2...v1.4.3) (2017-11-21)


### Bug Fixes

* prevent timer backoff on status checks from growing unbound ([27e1f6d](https://github.com/npm-wharf/hikaru/commit/27e1f6d))



<a name="1.4.2"></a>
## [1.4.2](https://github.com/npm-wharf/hikaru/compare/v1.4.1...v1.4.2) (2017-11-12)


### Bug Fixes

* solve issue preventing ability to use data files for some tokens and collect missing tokens from CLI via prompts ([8350769](https://github.com/npm-wharf/hikaru/commit/8350769))



<a name="1.4.1"></a>
## [1.4.1](https://github.com/arobson/hikaru/compare/v1.4.0...v1.4.1) (2017-11-06)


### Bug Fixes

* correct problems with health checks for custom manifest types ([caa8af9](https://github.com/arobson/hikaru/commit/caa8af9))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/arobson/hikaru/compare/v1.3.4...v1.4.0) (2017-11-06)


### Bug Fixes

* add missing token file argument to remove command ([61ecb3c](https://github.com/arobson/hikaru/commit/61ecb3c))
* create resource services for job and cron jobs before creating container ([ac58c35](https://github.com/arobson/hikaru/commit/ac58c35))


### Features

* support one-off manifest types ([33ab25e](https://github.com/arobson/hikaru/commit/33ab25e))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/arobson/hikaru/compare/v1.3.3...v1.3.4) (2017-11-01)


### Bug Fixes

* allow token to be read from secret file in kubernetes ([e73f0ee](https://github.com/arobson/hikaru/commit/e73f0ee))
* correct job and cron job's update and replace logic to use delete and create as a fallback ([5e43a04](https://github.com/arobson/hikaru/commit/5e43a04))
* improve diff to allow more update vs. replacements, force remove and create when ClusterIP changes on services ([b7fa3c9](https://github.com/arobson/hikaru/commit/b7fa3c9))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/arobson/hikaru/compare/v1.3.2...v1.3.3) (2017-10-27)



<a name="1.3.2"></a>
## [1.3.2](https://github.com/arobson/hikaru/compare/v1.3.1...v1.3.2) (2017-10-26)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/arobson/hikaru/compare/v1.3.0...v1.3.1) (2017-10-26)


### Bug Fixes

* remove console log statements from k8s module ([3a2bb6c](https://github.com/arobson/hikaru/commit/3a2bb6c))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/arobson/hikaru/compare/v1.2.2...v1.3.0) (2017-10-25)


### Bug Fixes

* improvements to diff and detection of patch vs. replacements ([63aed69](https://github.com/arobson/hikaru/commit/63aed69))


### Features

* add function to list load balancers and connect method to top level to simplify custom module use cases ([d82d0b3](https://github.com/arobson/hikaru/commit/d82d0b3))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/arobson/hikaru/compare/v1.2.2...v1.2.3) (2017-10-25)


### Bug Fixes

* improvements to diff and detection of patch vs. replacements ([63aed69](https://github.com/arobson/hikaru/commit/63aed69))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/arobson/hikaru/compare/v1.2.1...v1.2.2) (2017-10-24)


### Bug Fixes

* resolve issues with diffs during create process ([2bd9150](https://github.com/arobson/hikaru/commit/2bd9150))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/arobson/hikaru/compare/v1.2.0...v1.2.1) (2017-10-23)


### Bug Fixes

* adding scope for module name ([d7ec573](https://github.com/arobson/hikaru/commit/d7ec573))



<a name="1.2.0"></a>
# 1.2.0 (2017-10-23)


### Bug Fixes

* add dockyard install command to travis ([ca88d5f](https://github.com/arobson/hikaru/commit/ca88d5f))
* add missing standard-version dependency ([db468c5](https://github.com/arobson/hikaru/commit/db468c5))
* change mcgonagall dependency from file path ([c6564ee](https://github.com/arobson/hikaru/commit/c6564ee))
* correct baseline Docker image name ([cfabb00](https://github.com/arobson/hikaru/commit/cfabb00))
* standard lint errors ([9d0ee7f](https://github.com/arobson/hikaru/commit/9d0ee7f))
* use node 8 in build and Docker image (required by dependency's package file) ([e3fe2d8](https://github.com/arobson/hikaru/commit/e3fe2d8))


### Features

* add CLI and lib support, redesign implementation for broader cluster control ([11c99fc](https://github.com/arobson/hikaru/commit/11c99fc))
* add docker to build and update README with build and coverage badges ([83458c0](https://github.com/arobson/hikaru/commit/83458c0))
* add filtering based on manifest metadata for upgrade control ([f304e31](https://github.com/arobson/hikaru/commit/f304e31))
* add HTTP API ([f21a210](https://github.com/arobson/hikaru/commit/f21a210))
* add image parsing and comparison with test coverage ([f5e26cb](https://github.com/arobson/hikaru/commit/f5e26cb))
