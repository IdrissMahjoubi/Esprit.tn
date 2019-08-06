var express = require('express');
var router = express.Router();
const passport = require('passport');
const { upload } = require('../utils/Uploader');
const cleaner = require('../utils/fileCleaner');
var { ClubModel } = require('../models/index');

/* GET All Clubs . 
@Route : club/
*/
router.get('/', function(req, res, next) {
  ClubModel.find()
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/*POST add Club . 
@Route : club/add
*/
router.post(
  '/add',
  upload.single('image'),
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    newClub = new ClubModel({
      title: req.body.title,
      date: new Date(),
      type: req.body.type,
      sport: req.body.sport,
      desciption: req.body.desciption,
      url: req.body.url,
      image: req.file.path,
      user: req.user._id
    });
    newClub.save(function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    });
  }
);

/* UPDATE Club by Id . 
@Route : club/update/:id
*/
router.put(
  '/update/:id',
  upload.single('image'),
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    if (req.file) {
      //Delete old image
      ClubModel.findById(req.params.id).then(old => {
        cleaner(old.image);
      });
      ClubModel.findOneAndUpdate(
        req.params.id,
        {
          $set: {
            title: req.body.title,
            date: new Date(),
            type: req.body.type,
            sport: req.body.sport,
            desciption: req.body.desciption,
            url: req.body.url,
            image: req.file.path,
            user: req.user._id
          }
        },

        function(err, newValue) {
          if (err) return res.send(err);
          res.json(newValue);
        }
      );
    } else {
      ClubModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            title: req.body.title,
            date: new Date(),
            type: req.body.type,
            sport: req.body.sport,
            desciption: req.body.desciption,
            url: req.body.url,
            user: req.user._id
          }
        },

        function(err, newValue) {
          if (err) return res.send(err);
          res.json(newValue);
        }
      );
    }
  }
);

/* DELETE Club by Id . 
@Route : club/delete/:id
*/
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), function(
  req,
  res,
  next
) {
  let query = {
    _id: req.params.id
  };
  //Delete old image
  ClubModel.findById(req.params.id).then(old => {
    cleaner(old.image);
  });
  ClubModel.remove(query, err => {
    if (err) {
      res.status(500).json(err);
      return;
    } else {
      res.status(204).send('Club deleted');
    }
  });
});

/* GET Club by Id . 
@Route : club/id/:id
*/
router.get('/id/:id', function(req, res) {
  let query = {
    _id: req.params.id
  };
  ClubModel.findById(query, function(err, Club) {
    if (err) return res.send(err);
    res.send(Club);
  }).populate('user');
});

/* GET All Clubs by type . 
@Route : club/type
*/
router.get('/type', function(req, res, next) {
  let query = {
    type: req.query.type
  };
  ClubModel.find(query)
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* GET All SPORTS Clubs by type . 
@Route : club/sportType
*/
router.get('/sportType', function(req, res, next) {
  let query = {
    sport: req.query.sport,
    type: 'sports'
  };
  ClubModel.find(query)
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* Search clubs by title . 
@Route : club/search
*/
router.get('/search', function(req, res) {
  var title = req.query.title;
  ClubModel.find({ title: new RegExp(title, 'i') })
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

module.exports = router;
