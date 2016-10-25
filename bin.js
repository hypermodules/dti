#!/usr/bin/env electron

const dti = require('./')
const {app} = require('electron')
const argv = require('minimist')(process.argv.slice(2))

const command = argv._.shift()

switch (command) {
  case 'list':
    Object.keys(dti.tools).forEach(tool => console.log(tool))
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
  default:
    console.log(`
      list - list available devtools
      installed - list installed devtools
      install devtool1 devtool2... - install devtools
      uninstall devtool1 devtool2... - uninstall devtools
    `)
    break
}

app.quit()
