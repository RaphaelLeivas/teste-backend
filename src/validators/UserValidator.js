const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            username: Joi.string().min(2).max(20).required(), // required é sempre ultimo
            email: Joi.string().max(30).required(),
            password: Joi.string().min(6).max(20).required() // min(6) é limite do firebase
        })
    }),

    getByUser: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            userId: Joi.string().required()
        })
    }),

    update: celebrate({ // copia BODY do create e PARAMS do getByUser
        [Segments.BODY]: Joi.object().keys({
                username: Joi.string().min(2).max(20).optional(), // no uptade se torna opcional
                password: Joi.string().min(2).max(20).optional()
            }).min(1), // minimo uma key prenchida

        [Segments.PARAMS]: Joi.object().keys({
                userId: Joi.string().required()
            })
    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            userId: Joi.string().required()
        })
    }),
}