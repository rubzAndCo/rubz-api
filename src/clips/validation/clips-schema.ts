  import Joi from '@hapi/joi'

export const ClipsSchema = Joi.object({
  id: Joi.string().required().equal(11)
})