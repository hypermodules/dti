# dti

[![Build Status](https://travis-ci.org/hypermodules/dti.svg?branch=master)](https://travis-ci.org/hypermodules/dti)

Command-line [Electron](https://github.com/electron/electron) Developer Tools Installer.

- List out developer tools that are available for electron.
- List what devtools you have installed, and what version is installed.
- Easily install and uninstall developer tools into your electron development environment, directly from the chrome webstore.

### Installation

```
npm install -g dti
```

You should now have the `dti` command available to you in the command line.

### Usage

```
dti <command> [<args>]

  Quickly install and uninstall electron developer tools.

  list                  list available electron devtools
  installed             list currently installed devtools and their versions
  install <args>        install devtools using a list of short names
  uninstall <args>      uninstall devtools using a list of short names

  Example: dti install devtron react redux
```

Currently supported devtools:

- angular
- backbone
- devtron
- ember
- jquery
- react
- reactPerf
- redux
- vuejs

### FAQ

#### Why is this a global CLI tool, and why does it bundle electron?

`electron`/`electron-prebuilt` installs developer tools in a shared preference folder.  As a result, devtools are shared between different development projects on your system.  Project local dependencies are generally preferable but electron happens to just work this way.

#### Why didn't it work?

Make sure you quit out of any running processes of electron/electron-prebuilt.  Sometimes the install silently fails if these are running.  

### See also

- [electron-devtools-installer](https://www.npmjs.com/package/electron-devtools-installer)

### License

[MIT](LICENSE)
