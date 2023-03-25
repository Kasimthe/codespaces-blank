const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');


router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err));
});

// @route GET api/users/:id
// @desc Get A User
// @access Public
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

// @route POST api/users
// @desc Create A User
// @access Public
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  });

  newUser.save()
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

// @route PUT api/users/:id
// @desc Update A User
// @access Public
router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ success: true }))
    .catch(err => console.log(err));
});

// @route DELETE api/users/:id
// @desc Delete A User
// @access Public
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(err => console.log(err));
});

module.exports = router;
