const Match = require('../../models/Match');

const { check } = require('express-validator');

const validateMatchId = [
    check('match_id')
        .isMongoId().withMessage('The match id does not exist.').bail()
        .custom(value => {
            Match.exists({ match_id: value }).then(res => {
                if (!res) {
                    return Promise.reject();
                }
            })
        })
];

// TODO: Seperate validations for reusability
// TODO: Create custom sanitizers for reusability
// TODO: implement custom errors/exceptions 
const validateMatch = [
    check('title')
        .exists(checkFalsy = true).withMessage('Field must not be empty.')
        .isAlphanumeric(matches = '/([A-Za-z -\'])\w+/').withMessage(),
    check('players.*')
        .exists(checkFalsy = true).withMessage(),
    check('players.*.firstName').isAlpha().withMessage(),        
    check('players.*.lastName').isAlpha().withMessage(),        
    check('duration')
        .exists(checkFalsy = true).withMessage()
        .isNumeric(no_symbols = true).withMessage()
        .isInt(min = 1).withMessage(),
];


module.exports = {
    validateMatchId,
    validateMatch
}