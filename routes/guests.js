const router = require('express').Router();
let Guest = require('../models/guest.model');

router.route('/').get((req, res) => {
    Guest.find()
        .then(guests => res.json(guests))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const group = req.body.group;
    const allergies = req.body.allergies;
    const attending = req.body.attending;

    const newGuest = new Guest({
        group,
        allergies,
        attending
    });

    newGuest.save()
        .then(() => res.json('Guest added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) => {
    const query = req.query.q;
    Guest.find({ "group": { $elemMatch: { $regex: new RegExp(query, "i") }}})
        .then(guests => res.json(guests))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
