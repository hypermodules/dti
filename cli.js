#!/usr/bin/env node

var electron = require('electron')
var path = require('path')
var proc = require('child_process')

var binPath = path.join(__dirname, 'bin.js')

var args = process.argv.slice(2)

var child = proc.spawn(electron, [binPath].concat(args), {stdio: 'inherit'})
child.on('close', function (code) {
  process.exit(code)
})
