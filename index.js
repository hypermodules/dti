var edi = require('electron-devtools-installer')

var tools = {
  ember: {
    installer: 'edi',
    id: edi.EMBER_INSPECTOR
  },
  react: {
    installer: 'edi',
    id: edi.REACT_DEVELOPER_TOOLS
  },
  backbone: {
    installer: 'edi'
    id: edi.BACKBONE_DEBUGGER
  },
  jquery: {
    installer: 'edi'
    id: edi.JQUERY_DEBUGGER
  },
  angular: {
    installer: 'edi'
    id: edi.ANGULARJS_BATARANG
  },
  vuejs: {
    installer: 'edi'
    id: edi.VUEJS_DEVTOOLS
  },
  redux: {
    installer: 'edi'
    id: edi.REDUX_DEVTOOLS
  },
  reactPerf: {
    installer: 'edi'
    id: edi.REACT_PERF
  },
  devtron: {
    installer: 'devtron'
  }
}

module.exports.tools = tools
