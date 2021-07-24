const router = require('express').Router();

const Match = require('../models/Match');

// route for the creation of a new match
router.post('/new', (req, res, next) => {
  const title = req.body.title;
  const players = req.body.players;
  const description = req.body.description;
  const duration = req.body.duration;

  // TODO: validate all body properties

  // add specific queries to be de-structured before the remaining queries
  // eg: { shot, ...remainingQueries}
  // const { ...remainingQueries } = req.params.query;

  const newMatch = new Match({
    title: title,
    players: players,
    description: description,
    duration: duration
  });

  // save the new match in the db
  newMatch.save()
  .then(match => res.status(200).json({
    id: match.id
  }))
  .catch(err => res.status(400).json('Error: ' + err));
});

// route for retrieving all matches
router.get('/all', (req, res, next) => {
  // add specific queries to be de-structured before the remaining queries
  // eg: { shot, ...remainingQueries}
  // const { ...remainingQueries } = req.params.query;

  // retrieve all annotations
  Match.find()
  .then(matches => matches.map(match => {
    return {
      id: match.id,
      title: match.title,
      players: {
        player1:
          [match.players.player1.firstName, match.players.player1.lastName].join(' '),
        player2:
          [match.players.player2.firstName, match.players.player2.lastName].join(' '),
      },
      description: match.description,
      duration: match.duration
    }
  }))
  .then(matches => res.status(200).json(matches))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
