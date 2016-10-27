#!/usr/bin/env electron

const dti = require('./')
const {app} = require('electron')
const argv = require('minimist')(process.argv.slice(2))
const inspect = require('util').inspect
const usage = require('./usage')

const command = argv._.shift()

function cli (cb) {
  switch (command) {
    case 'list':
      Object.keys(dti.tools).sort().forEach(tool => console.log(tool))
      return cb()
    case 'installed':
      const installed = dti.installed()
      for (const key in installed) {
        const name = dti.longNames[key] ? dti.longNames[key] : key
        console.log(`${name}: ${inspect(installed[key])}`)
      }
      return cb()
    case 'install':
      dti.install(argv._, err => {
        if (err) {
          console.error(err)
        }
        return cb()
      })
      break
    case 'uninstall':
      dti.uninstall(argv._)
      return cb()
    default:
      console.log(usage)
      return cb()
  }
}

app.on('ready', cli.bind(null, app.quit))
