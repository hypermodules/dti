#!/usr/bin/env electron

const dti = require('./')
const {app} = require('electron')
const argv = require('minimist')(process.argv.slice(2))

const command = argv._.shift()

function cli (cb) {
  switch (command) {
    case 'list':
      Object.keys(dti.tools).forEach(tool => console.log(tool))
      break
    case 'installed':
      console.log(dti.installed())
      break
    case 'install':
      // install the following plugins
      break
    case 'uninstall':
      // uninstall the listed plugins
      break
    default:
      console.log(
`dti - electron devtools installer
  list - list available devtools
  installed - list installed devtools
  install devtool1 devtool2... - install devtools
  uninstall devtool1 devtool2... - uninstall devtools`)
      break
  }
  cb()
}


app.on('ready', cli.bind(null, app.quit))
