'use strict'

const assert = require('assert')

describe('api.services.IntercomService', () => {
  let IntercomService
  before(() => {
    IntercomService = global.app.services.IntercomService
  })
  describe('#sendTemplateMessage', () => {
    it('should return a response from mandrill', () => {
      // return IntercomService.sendTemplateMessage(
      //     // Template
      //     // {
      //     //   to: [{
      //     //     email: 'no_reply@cali-style.com',
      //     //     name: 'Dear friend',
      //     //     type: 'to'
      //     //   }]
      //     // },
      //     // // Options
      //     // {
      //     //   template_name: 'index'
      //     // }
      //   ).then(res => {
      //     // console.log(res)
      //     // assert.equal(res[0].email, 'no_reply@cali-style.com')
      //     // assert.equal(res[0].status, 'sent')
      // })
    })
  })
})
