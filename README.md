oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g royxue-cli
$ space-cli COMMAND
running command...
$ space-cli (--version)
royxue-cli/1.0.0 linux-x64 node-v16.16.0
$ space-cli --help [COMMAND]
USAGE
  $ space-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`space-cli help [COMMAND]`](#space-cli-help-command)
* [`space-cli humans`](#space-cli-humans)
* [`space-cli plugins`](#space-cli-plugins)
* [`space-cli plugins:install PLUGIN...`](#space-cli-pluginsinstall-plugin)
* [`space-cli plugins:inspect PLUGIN...`](#space-cli-pluginsinspect-plugin)
* [`space-cli plugins:install PLUGIN...`](#space-cli-pluginsinstall-plugin-1)
* [`space-cli plugins:link PLUGIN`](#space-cli-pluginslink-plugin)
* [`space-cli plugins:uninstall PLUGIN...`](#space-cli-pluginsuninstall-plugin)
* [`space-cli plugins:uninstall PLUGIN...`](#space-cli-pluginsuninstall-plugin-1)
* [`space-cli plugins:uninstall PLUGIN...`](#space-cli-pluginsuninstall-plugin-2)
* [`space-cli plugins update`](#space-cli-plugins-update)

## `space-cli help [COMMAND]`

Display help for space-cli.

```
USAGE
  $ space-cli help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for space-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `space-cli humans`

Get the number of people who are currently in space

```
USAGE
  $ space-cli humans -f <value> [-t]

FLAGS
  -f, --from=<value>  (required) enter your name
  -t, --table         display who is in space and where with a table

DESCRIPTION
  Get the number of people who are currently in space

EXAMPLES
  $ space-cli humans
  Number of humans currently in space: 7
```

_See code: [dist/commands/humans.ts](https://github.com/royjianxue/royjianxue/blob/v1.0.0/dist/commands/humans.ts)_

## `space-cli plugins`

List installed plugins.

```
USAGE
  $ space-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ space-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `space-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ space-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ space-cli plugins add

EXAMPLES
  $ space-cli plugins:install myplugin 

  $ space-cli plugins:install https://github.com/someuser/someplugin

  $ space-cli plugins:install someuser/someplugin
```

## `space-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ space-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ space-cli plugins:inspect myplugin
```

## `space-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ space-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ space-cli plugins add

EXAMPLES
  $ space-cli plugins:install myplugin 

  $ space-cli plugins:install https://github.com/someuser/someplugin

  $ space-cli plugins:install someuser/someplugin
```

## `space-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ space-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ space-cli plugins:link myplugin
```

## `space-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ space-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ space-cli plugins unlink
  $ space-cli plugins remove
```

## `space-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ space-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ space-cli plugins unlink
  $ space-cli plugins remove
```

## `space-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ space-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ space-cli plugins unlink
  $ space-cli plugins remove
```

## `space-cli plugins update`

Update installed plugins.

```
USAGE
  $ space-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
