/*
negotiator
mime-types
*/
let accepts = require('accepts')

let type = accepts({headers: {accept: '*/xml, */*, text/plain'}})
           .type(['json', 'xml', 'text'])
