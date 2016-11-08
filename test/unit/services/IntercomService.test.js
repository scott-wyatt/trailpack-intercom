'use strict'
/* global describe, it */
const assert = require('assert')

describe('MandrillService', () => {
  it('should exist', () => {
    assert(global.app.api.services['IntercomService'])
    assert(global.app.services['IntercomService'])
    //assert(global.app.services['IntercomService'].sendTemplateMessage)
  })
})
