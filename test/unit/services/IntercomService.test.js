'use strict'
/* global describe, it */
const assert = require('assert')

describe('IntercomService', () => {
  it('should exist', () => {
    assert(global.app.api.services['IntercomService'])
    assert(global.app.services['IntercomService'])
    // Users
    assert(global.app.services['IntercomService'].createUser)
    assert(global.app.services['IntercomService'].updateUser)
    assert(global.app.services['IntercomService'].listUsers)
    assert(global.app.services['IntercomService'].listByUsers)
    assert(global.app.services['IntercomService'].findUser)
    assert(global.app.services['IntercomService'].deleteUser)
    // Leads
    assert(global.app.services['IntercomService'].createLead)
    assert(global.app.services['IntercomService'].updateLead)
    assert(global.app.services['IntercomService'].listLeads)
    assert(global.app.services['IntercomService'].listByLeads)
    assert(global.app.services['IntercomService'].findLead)
    assert(global.app.services['IntercomService'].deleteLead)
    assert(global.app.services['IntercomService'].convertLead)
    // Visitors
    assert(global.app.services['IntercomService'].updateVisitor)
    assert(global.app.services['IntercomService'].listVisitors)
    assert(global.app.services['IntercomService'].listByVisitors)
    assert(global.app.services['IntercomService'].findVisitor)
    assert(global.app.services['IntercomService'].deleteVisitor)
    assert(global.app.services['IntercomService'].convertVisitor)
    // Companies

    // Notes

    // Events

    // Counts

    // Admins

    // Tags

    // Segments

    // Messages

    // Conversations

    //Pagination
    assert(global.app.services['IntercomService'].nextPage)
  })
})
