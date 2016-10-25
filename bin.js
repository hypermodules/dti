#!/usr/bin/env node

var dti = require('./')

var argv = require('minimist')(process.argv.slice(2))

var command = argv._.shift()

switch (command) {
  case 'list':
    // list available
    break
  case 'installed':
    // list installed
    break
  case 'install':
    // install the following plugins
    break
  case 'uninstall':
    // uninstall the listed plugins
    break
  default
    // list usage
    break
}
