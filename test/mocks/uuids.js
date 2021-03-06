'use strict';

const env = require('./../helpers/env');

module.exports = {
  validUser: env.USER_UUID,
  validLicence: env.LICENCE_UUID,
  validUserEmail: env.USER_EMAIL,
  invalidUserEmail: env.INVALID_EMAIL,
  invalidUser: 'd10fe486-e38f-4f01-adf7-ec80606fd915',
  invalidLicence: '69e5b8b3-9d05-4e6c-b48a-fd6d3de20ad3',
  invalidKey: '08032ca5-9197-4b3b-8810-0a81d31c1eb8',
  validTopic: env.VALID_TOPIC,
  invalidTopic: 'YzEwYmY1N2YtYzJkNS00MzAxLWFkYmMtZmRjYzRjZDA4Y2Y0-TESTING',
  validFTSession: env.VALID_FT_SESSION || 'valid-test123test',
  invalidFTSession: 'invalid-test123test',
  validFTSessionSecure: env.VALID_SECURE_FT_SESSION || 'valid-secure-test123test',
  invalidFTSessionSecure: 'invalid-secure-test123test',
  validApiAuthToken: env.VALID_API_AUTH_TOKEN || 'valid-api-token-test123test',
  invalidApiAuthToken: env.VALID_API_AUTH_TOKEN || 'invalid-api-token-test123test'
};
