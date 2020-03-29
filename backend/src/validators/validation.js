const { Joi, Segments } = require('celebrate')

module.exports = {
  createOng: {
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2) 
    })
  },
  authorizationHeader: {
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  },
  delIncident: {
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  },
  pageId: {
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }
}