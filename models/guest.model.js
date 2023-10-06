const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const guestSchema = new Schema({
    group: { type: [String], required: true },
    allergies: { type: String, required: true },
    attending: { type: Boolean, required: true }
});

const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
