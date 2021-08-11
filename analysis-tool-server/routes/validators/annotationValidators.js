
const Annotation = require('../../models/Annotation');

const components = require('../../models/AnnotationComponents');

const { check } = require('express-validator');


const validateAnnotationId = [
    check('annotation_id')
        .isMongoId().withMessage('The annotation id does not exist.').bail()
        .custom(value => {
            Match.exists({ _id: value }).then(res => {
                if (!res) {
                    return Promise.reject();
                }
            })
        })
];


const error = (err) => {
    throw err;
}


// TODO: Seperate validations for reusability
// TODO: Create custom sanitizers for reusability
// TODO: implement custom errors/exceptions 
const validateAnnotation = [
    check('components.*')
        .exists(checkFalsy = true).withMessage('Field required.')
        .isString().withMessage('Invalid type entered.'),
    check('components.shot')
        .isIn(components.shot).withMessage('Invalid input.'),
    check('components.hand')
        .isIn(components.hand).withMessage('Invalid input.'),
    check('components.approach')
        .isIn(components.approach).withMessage('Invalid input.'),
    check('timestamp')
        .exists(checkFalsy = true).withMessage('Field required.')
        .isString().withMessage('Invalid type.')
        .custom(value => {
            isNaN(Date.parse(value)) || error('Invalid tiestamp.');
        }),
    check('playerNumber')
        .exists(checkFalsy = true).withMessage('Field required.')
        .isInt(min = 1, max = 2).withMessage('Input is outside the value range.')
];


module.exports = {
    validateAnnotationId,
    validateAnnotation
};