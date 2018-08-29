const edi = require('electron-devtools-installer')
const { default: installExtension } = edi
const devtron = require('devtron')
const { BrowserWindow } = require('electron')
const series = require('run-series')

const tools = {
  ember: {
    installer: 'edi',
    id: edi.EMBER_INSPECTOR,
    longName: 'Ember Inspector'
  },
  react: {
    installer: 'edi',
    id: edi.REACT_DEVELOPER_TOOLS,
    longName: 'React Developer Tools'
  },
  backbone: {
    installer: 'edi',
    id: edi.BACKBONE_DEBUGGER,
    longName: 'Backbone Debugger'
  },
  jquery: {
    installer: 'edi',
    id: edi.JQUERY_DEBUGGER,
    longName: 'jQuery Debugger'
  },
  angular: {
    installer: 'edi',
    id: edi.ANGULARJS_BATARANG,
    longName: 'AngularJS Batarang'
  },
  vuejs: {
    installer: 'edi',
    id: edi.VUEJS_DEVTOOLS,
    longName: 'Vue.js devtools'
  },
  redux: {
    installer: 'edi',
    id: edi.REDUX_DEVTOOLS,
    longName: 'Redux DevTools'
  },
  reactPerf: {
    installer: 'edi',
    id: edi.REACT_PERF,
    longName: 'React Perf'
  },
  devtron: {
    installer: 'devtron',
    longName: 'devtron'
  }
}

exports.tools = tools

const longNames = {}

for (const key in tools) {
  longNames[tools[key].longName] = key
}

exports.longNames = longNames

const installers = {
  devtron: installDevtron,
  edi: installEDI
}

function installDevtron (toolObj, cb) {
  devtron.install()
  process.nextTick(cb)
}

function installEDI (toolObj, cb) {
  installExtension(toolObj.id, true).then(name => {
    console.log(`installed ${name}`)
    return cb(null)
  }).catch(err => {
    return cb(err)
  })
}

function makeInstallers (t, cb) {
  if (!t) return []
  return t.map(tool => {
    const toolObj = tools[tool]
    if (!toolObj) {
      console.log(`${tool} is not an available devtool`)
      return null
    }
    const installer = installers[toolObj.installer]
    return installer.bind(null, toolObj)
  }).filter(installer => typeof installer === 'function')
}

function installed () {
  return BrowserWindow.getDevToolsExtensions()
}

exports.installed = installed

function install (t, cb) {
  const seriesWorkers = makeInstallers(t, cb)
  series(seriesWorkers, cb)
}

exports.install = install

function uninstall (shortNames) {
  if (!shortNames) shortNames = []
  shortNames.map(name => tools[name] ? tools[name].longName : name).forEach(longName => {
    try {
      BrowserWindow.removeDevToolsExtension(longName)
      console.log(`Uninstalled ${longName}`)
    } catch (e) {
      console.error(e)
    }
  })
}

exports.uninstall = uninstall
