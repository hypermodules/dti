const edi = require('electron-devtools-installer')
const devtron = require('devtron')
const {BrowserWindow} = require('electron')

const tools = {
  ember: {
    installer: 'edi',
    id: edi.EMBER_INSPECTOR
  },
  react: {
    installer: 'edi',
    id: edi.REACT_DEVELOPER_TOOLS
  },
  backbone: {
    installer: 'edi',
    id: edi.BACKBONE_DEBUGGER
  },
  jquery: {
    installer: 'edi',
    id: edi.JQUERY_DEBUGGER
  },
  angular: {
    installer: 'edi',
    id: edi.ANGULARJS_BATARANG
  },
  vuejs: {
    installer: 'edi',
    id: edi.VUEJS_DEVTOOLS
  },
  redux: {
    installer: 'edi',
    id: edi.REDUX_DEVTOOLS
  },
  reactPerf: {
    installer: 'edi',
    id: edi.REACT_PERF
  },
  devtron: {
    installer: 'devtron'
  }
}

exports.tools = tools

const installers = {
  devtron: installDevtron,
  edi: installEDI
}

function installDevtron (opts, cb) {
  devtron.install()
  process.nextTick(cb)
}

function installEDI (opts, cb) {}

function uninstall (opts, cb) {}

function installed () {
  return BrowserWindow.getDevToolsExtensions()
}

exports.installed = installed
