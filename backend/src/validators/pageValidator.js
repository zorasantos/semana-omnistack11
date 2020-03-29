const { Joi, Segments } = require('celebrate')

module.exports = {
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}