#!/usr/bin/env node
const { getEnv, getDist, getOS, getRelease, getCodename } = require('./index.js')
const program = require('commander')
const VERSION = require('./package.json').version

async function printall () {
  console.log(await getOS())
  console.log(await getDist())
  console.log(await getCodename())
  console.log(await getRelease())
  console.log(getEnv())
}

if (process.argv.length === 2) {
  printall()
} else {
  program
    .version(VERSION)
    .command('env')
    .description('Get the execution environment (always node from CLI)')
    .action(function (cmd) {
      return console.log(getEnv())
    })
  program
    .command('os')
    .description('Get the operating system.')
    .action(async function (cmd) {
      return console.log(await getOS())
    })
  program
    .command('dist')
    .description('Get the distro, if linux OS.')
    .action(async function (cmd) {
      return console.log(await getDist())
    })
  program
    .command('release')
    .description('Get the distro release, if linux OS.')
    .action(async function (cmd) {
      return console.log(await getRelease())
    })
  program
    .command('codename')
    .description('Get the distro codename, if linux OS.')
    .action(async function (cmd) {
      return console.log(await getCodename())
    })
  program
    .command('all')
    .description('Get the os, distro, codename, release, and environment. In that order.')
    .action(async function (cmd) {
      printall()
    })
  program.parse(process.argv)
}

