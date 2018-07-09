#!/usr/bin/env node
const pify = require('pify')
const isNode = require('detect-node')
const bowser = require('bowser')
const os = require('node.os')
const getos = pify(require('getos'))
const global = require('window-or-global')
var gotos

async function getGotOs () {
  if (gotos === undefined) gotos = await getos()
  return gotos
}

function setGlobal (key, v) {
  global[key] = v
  return v
}

function getEnv () {
  if (global.ENV) return global.ENV
  if (isNode) return setGlobal('ENV', 'node')
  else return setGlobal('ENV', bowser.name)
}

async function getOS () {
  if (global.OS) return global.OS
  if (os && os.os && os.os !== '') return setGlobal('OS', os.os)
  else {
    gotos = await getGotOs()
    if (gotos.os) return setGlobal('OS', gotos.os)
  }
  return ''
}

async function getDist () {
  if (global.DIST) return global.DIST
  gotos = await getGotOs()
  if (gotos.dist) return setGlobal('DIST', gotos.dist)
  return ''
}

async function getRelease () {
  if (global.OSRELEASE) return global.OSRELEASE
  gotos = await getGotOs()
  if (gotos.release) return setGlobal('OSRELEASE', gotos.release)
  return ''
}

async function getCodename () {
  if (global.OSCODENAME) return global.OSCODENAME
  gotos = await getGotOs()
  if (gotos.codename) return setGlobal('OSCODENAME', gotos.codename)
  return ''
}

module.exports = {
  getEnv: getEnv,
  getOS: getOS,
  getDist: getDist,
  getRelease: getRelease,
  getCodename: getCodename
}
