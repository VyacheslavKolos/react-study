import Joi from "joi";

export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇ]{1,20}$')).required().messages({
        'string.empty':'"model" can\'t be empty',
        'string.pattern.base':'only alpha Min length: 3 symbols, Max: 20'
    }),
    price:Joi.number().min(0).max(1000000).messages({
        'number.base':'price must be between 0 and 1000000',
        'number.min':'price must be >=0',
        'number.max':'price must be <1000000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base':'year must be from 1990 to the present',
    })
})