'use strict';

/**
 * @file This is the default configuration file. This file should contain all
 * default configuration values that are not specific to a certain
 * environment. The various environment configurations should
 * then override values where needed.
 */
module.exports = {

  // When debug is set to true all requests will be logged to the console.
  debug: false,

  // Server configuration.
  app: {
    name: 'Odd Mean',
    port: 9000
  },

  // Cookie configuration.
  cookie: {
    secret: '=oASDkjdn1%53&L%#!asKAInz'
  },

  // Session configuration.
  session: {
    secret: 'J82&kL1/zbtjd%&=0fGhJ#Kl',
    collection: 'sessions'
  },

  // Mongo DB.
  mongodb: {
    database: 'odd-mean',
    host: '127.0.0.1',
    port: 17017
  },

  // Mandrill.
  mandrill: {
    host: 'smtp.mandrillapp.com',
    port: 587,
    username: '',
    key: ''
  },

  // Redis cache.
  redis: {
    host: '127.0.0.1',
    port: 6379
  },

  // Websockets.
  sockets: {}
};
