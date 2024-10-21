const Joi = require("joi");

const taskValidaton = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    deadline: Joi.string().required()
});

module.exports = { taskValidaton };
