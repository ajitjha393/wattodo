wattodo
=======

A simple todo cli app in TS

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/wattodo.svg)](https://npmjs.org/package/wattodo)
[![CircleCI](https://circleci.com/gh/ajitjha393/wattodo/tree/master.svg?style=shield)](https://circleci.com/gh/ajitjha393/wattodo/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/wattodo.svg)](https://npmjs.org/package/wattodo)
[![License](https://img.shields.io/npm/l/wattodo.svg)](https://github.com/ajitjha393/wattodo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g wattodo
$ wattodo COMMAND
running command...
$ wattodo (-v|--version|version)
wattodo/1.0.0 linux-x64 node-v13.12.0
$ wattodo --help [COMMAND]
USAGE
  $ wattodo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`wattodo add [TODO]`](#wattodo-add-todo)
* [`wattodo help [COMMAND]`](#wattodo-help-command)
* [`wattodo interact`](#wattodo-interact)
* [`wattodo list`](#wattodo-list)
* [`wattodo remove [INDEX]`](#wattodo-remove-index)

## `wattodo add [TODO]`

Add new todo task to the list

```
USAGE
  $ wattodo add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/ajitjha393/wattodo/blob/v1.0.0/src/commands/add.ts)_

## `wattodo help [COMMAND]`

display help for wattodo

```
USAGE
  $ wattodo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.0/src/commands/help.ts)_

## `wattodo interact`

Enter the interactive mode

```
USAGE
  $ wattodo interact
```

_See code: [src/commands/interact.ts](https://github.com/ajitjha393/wattodo/blob/v1.0.0/src/commands/interact.ts)_

## `wattodo list`

Lists all the todo tasks registered

```
USAGE
  $ wattodo list
```

_See code: [src/commands/list.ts](https://github.com/ajitjha393/wattodo/blob/v1.0.0/src/commands/list.ts)_

## `wattodo remove [INDEX]`

Remove a todo task from the list

```
USAGE
  $ wattodo remove [INDEX]
```

_See code: [src/commands/remove.ts](https://github.com/ajitjha393/wattodo/blob/v1.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
