const { Joi, Segments } = require('celebrate')

module.exports = {
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}