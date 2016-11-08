/* eslint no-console: [0, { allow: ['log','warn', 'error'] }] */
'use strict'

// const _ = require('lodash')
const joi = require('joi')
const Service = require('trails-service')
const Intercom = require('intercom-client')
// const lib = require('../../lib')

/**
 * @module IntercomService
 * @description Intercom Service to connect with the Intercom API
 * @see {@link http://trailsjs.io/doc/api/services}
 * @see {@link https://github.com/intercom/intercom-node}
 * @this TrailsApp
 */

module.exports = class IntercomService extends Service {

  /**
   * Intercom API
   */
  _api() {
    return new Intercom.Client(this.app.config.intercom.token)
  }

  /**
   * Intercom Pre-validation
   */
  _validate(obj, schema) {
    return new Promise((resolve, reject) => {
      joi.validate(obj, schema, (err, value) => {
        if (err) {
          return reject(err)
        }
        resolve(value)
      })
    })
  }

  /**
   * USERS
   * https://github.com/intercom/intercom-node#users
   */
  /**
   * @method createUser creates a user
   * @param {Object} user
   * @returns Promise
   */
  createUser(user) {
    // Constuct the User Schema
    const userSchema = joi.object().keys({
      email: joi.string().email().required(),
      custom_attributes: joi.object()
    }).unknown()

    // Validate the User
    return this._validate(user, userSchema)
    .then(value => {
      return this._api().users.create(user)
    })
  }

  /**
   * @method updateUser updates a user
   * @param {Object} user
   * @returns Promise
   */
  updateUser(user) {
    // Constuct the User Schema
    const userSchema = joi.object().keys({
      email: joi.string().email().required(),
      custom_attributes: joi.object()
    }).unknown()

    // Validate the User
    return this._validate(user, userSchema)
    .then(value => {
      return this._api().users.update(user)
    })
  }

  /**
   * @method listUsers lists users
   * @returns Promise
   */
  listUsers(user) {

    return this._api().users.list()
  }

  /**
   * @method listByUsers lists users by params
   * @param {Object} params
   * @returns Promise
   */
  listByUsers(params) {

    return this._api().users.listBy(params)
  }

  /**
   * @method findUser finds a user by identifier
   * @param {Object} user
   * @returns Promise
   */
  findUser(user) {
    // Constuct the User Schema
    const userSchema = joi.object().keys({
      email: joi.string().email(),
      id: joi.string(),
      user_id: joi.string()
    })

    // Validate the User
    return this._validate(user, userSchema)
    .then(value => {
      return this._api().users.find(user)
    })
  }

  /**
   * @method deleteUser deletes a user by identifier
   * @param {Object} user
   * @returns Promise
   */
  deleteUser(user) {
    // Constuct the User Schema
    const userSchema = joi.object().keys({
      email: joi.string().email(),
      id: joi.string(),
      user_id: joi.string()
    })

    // Validate the User
    return this._validate(user, userSchema)
    .then(value => {
      return this._api().users.delete(user)
    })
  }

  /**
   * LEADS
   * https://github.com/intercom/intercom-node#leads
   */
  /**
   * @method createLead creates a lead
   * @param {Object} lead
   * @returns Promise
   */
  createLead(lead) {
    // Constuct the Lead Schema
    const leadSchema = joi.object().keys({
      email: joi.string().email().required(),
      custom_attributes: joi.object()
    }).unknown()

    // Validate the Lead
    return this._validate(lead, leadSchema)
      .then(value => {
        return this._api().leads.create(lead)
      })
  }

  /**
   * @method updateLead updates a lead
   * @param {Object} lead
   * @returns Promise
   */
  updateLead(lead) {
    // Constuct the Lead Schema
    const leadSchema = joi.object().keys({
      email: joi.string().email().required(),
      custom_attributes: joi.object()
    }).unknown()

    // Validate the Lead
    return this._validate(lead, leadSchema)
      .then(value => {
        return this._api().leads.update(lead)
      })
  }

  /**
   * @method listLeads lists leads
   * @returns Promise
   */
  listLeads(lead) {

    return this._api().leads.list()
  }

  /**
   * @method listByLeads lists leads by params
   * @param {Object} params
   * @returns Promise
   */
  listByLeads(params) {

    return this._api().leads.listBy(params)
  }

  /**
   * @method findLead finds a lead by identifier
   * @param {Object} lead
   * @returns Promise
   */
  findLead(lead) {
    // Constuct the Lead Schema
    const leadSchema = joi.object().keys({
      email: joi.string().email(),
      id: joi.string(),
      user_id: joi.string()
    })

    // Validate the Lead
    return this._validate(lead, leadSchema)
      .then(value => {
        return this._api().leads.find(lead)
      })
  }

  /**
   * @method deleteLead deletes a lead by identifier
   * @param {Object} lead
   * @returns Promise
   */
  deleteLead(lead) {
    // Constuct the Lead Schema
    const leadSchema = joi.object().keys({
      email: joi.string().email(),
      id: joi.string(),
      user_id: joi.string()
    })

    // Validate the Lead
    return this._validate(lead, leadSchema)
      .then(value => {
        return this._api().leads.delete(lead)
      })
  }

  /**
   * @method convertLead converts a lead to a user by identifier
   * @param {Object} conversion
   * @returns Promise
   */
  convertLead(conversion) {
    // Construct the Lead Schema
    const conversionSchema = joi.object().keys({
      contact: joi.object().required(),
      user: joi.object().required()
    })

    // Validate the Lead
    return this._validate(conversion, conversionSchema)
      .then(value => {
        return this._api().leads.convert(conversion)
      })
  }

  /**
   * VISITORS
   * https://github.com/intercom/intercom-node#visitors
   */
  /**
   * @method updateVisitor updates a visitor
   * @param {Object} visitor
   * @returns Promise
   */
  updateVisitor(visitor) {
    // Constuct the Visitor Schema
    const visitorSchema = joi.object().keys({
      email: joi.string().email().required(),
      custom_attributes: joi.object()
    }).unknown()

    // Validate the Visitor
    return this._validate(visitor, visitorSchema)
      .then(value => {
        return this._api().visitors.update(visitor)
      })
  }

  /**
   * @method listVisitors lists visitors
   * @returns Promise
   */
  listVisitors(visitor) {

    return this._api().visitors.list()
  }

  /**
   * @method listByVisitors lists visitors by params
   * @param {Object} params
   * @returns Promise
   */
  listByVisitors(params) {

    return this._api().visitors.listBy(params)
  }

  /**
   * @method findVisitor finds a visitor by identifier
   * @param {Object} visitor
   * @returns Promise
   */
  findVisitor(visitor) {
    // Constuct the Visitor Schema
    const visitorSchema = joi.object().keys({
      id: joi.string(),
      user_id: joi.string()
    })

    // Validate the Visitor
    return this._validate(visitor, visitorSchema)
      .then(value => {
        return this._api().visitors.find(visitor)
      })
  }

  /**
   * @method deleteVisitor deletes a visitor by identifier
   * @param {Object} visitor
   * @returns Promise
   */
  deleteVisitor(visitor) {
    // Constuct the Visitor Schema
    const visitorSchema = joi.object().keys({
      id: joi.string(),
      user_id: joi.string()
    })

    // Validate the Visitor
    return this._validate(visitor, visitorSchema)
      .then(value => {
        return this._api().visitors.delete(visitor)
      })
  }

  /**
   * @method convertVisitor converts a visitor to a user by identifier
   * @param {Object} conversion
   * @returns Promise
   */
  convertVisitor(conversion) {
    // Construct the Visitor Schema
    const conversionSchema = joi.object().keys({
      visitor: joi.object().required(),
      user: joi.object().required(),
      type: joi.string().required()
    })

    // Validate the Visitor
    return this._validate(conversion, conversionSchema)
      .then(value => {
        return this._api().visitors.convert(conversion)
      })
  }
  /**
   * COMPANIES
   * https://github.com/intercom/intercom-node#companies
   */
  //TODO

  /**
   * NOTES
   * https://github.com/intercom/intercom-node#notes
   */
  //TODO

  /**
   * EVENTS
   * https://github.com/intercom/intercom-node#events
   */
  //TODO

  /**
   * COUNTS
   * https://github.com/intercom/intercom-node#counts
   */
  //TODO

  /**
   * ADMINS
   * https://github.com/intercom/intercom-node#admins
   */
  //TODO

  /**
   * TAGS
   * https://github.com/intercom/intercom-node#tags
   */
  //TODO

  /**
   * SEGMENTS
   * https://github.com/intercom/intercom-node#segments
   */
  //TODO

  /**
   * MESSAGES
   * https://github.com/intercom/intercom-node#messages
   */
  //TODO

  /**
   * CONVERSATIONS
   * https://github.com/intercom/intercom-node#conversations
   */
  //TODO

  /**
   * PAGINATION
   */
  /**
   * @method nextPage uses the pages attribute returned by a list
   * @param {Object} pages
   * @returns Promise
   */
  nextPage(pages) {
    return this._api().nextPage(pages)
  }


}
