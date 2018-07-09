/* global describe:false it:false before:false */
const assert = require('chai').assert
const { getEnv, getDist, getOS } = require('./index.js')

describe('node', function () {
  it('getEnv', function () {
    assert.equal(getEnv(), 'node')
  })
})
