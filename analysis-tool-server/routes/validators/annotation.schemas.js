
const Joi = require('joi');
const joi = require('joi-oid');
const { shots } = require('../../models/Annotation')


const annotationSchema = Joi.object({
    shot: Joi.valid(...shots).error(new Error('Invalid shot component.')),
    timestamp: Joi.date().timestamp('javascript'),
    playerNumber: Joi.number().integer().min(1).max(2)
}).options({ stripUnknown: true, abortEarly: false }).min(1);


const annotationIdSchema = Joi.object({ annotation_id: joi.objectId().required() });


const createAnnotationSchema = annotationSchema.options({ presence: 'required' });


const updateAnnotationSchema = annotationSchema.options({ presence: 'optional' }).empty('', null).default(undefined);


module.exports = {
    annotationSchema,
    createAnnotationSchema,
    updateAnnotationSchema,
    annotationIdSchema
};