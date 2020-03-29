const { Joi, Segments } = require('celebrate')

module.exports = {
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}