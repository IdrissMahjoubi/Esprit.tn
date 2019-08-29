var express = require('express');
var router = express.Router();
const passport = require('passport');
const { upload } = require('../utils/Uploader');
var { RdiModel } = require('../models/index');
const cleaner = require('../utils/fileCleaner');

/* GET All Rdi . 
@Route : rdi/
*/
router.get('/', function(req, res, next) {
  RdiModel.find()
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* GET add Rdi . 
@Route : rdi/add
*/
router.post(
  '/add',
  upload.single('image'),
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    var img ='';
    if(req.file)
    {
      img = req.file.path;
    }
    newRdi = new RdiModel({
      title: req.body.title,
      date: new Date(),
      members: req.body.members,
      description: req.body.description,
      url: req.body.url,
      image: img,
      user: req.user._id
    });
    newRdi.save(function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    });
  }
);

/* UPDATE Rdi by Id . 
@Route : rdi/update/:id
*/
router.put(
  '/update/:id',
  upload.single('image'),
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    if (req.file) {
      //Delete old image
      RdiModel.findById(req.params.id).then(old => {
        cleaner(old.image);
        RdiModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              title: req.body.title,
              date: new Date(),
              members: req.body.members,
              description: req.body.description,
              url: req.body.url,
              image: req.file.path,
              user: req.user._id
            }
          },
          { new: true }
        ).then(rdi => res.json(rdi))
        .catch(err => res.status(400).json(err));
      });
    } else {
      RdiModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            title: req.body.title,
            date: new Date(),
            members: req.body.members,
            description: req.body.description,
            url: req.body.url,
            user: req.user._id
          }
        },
        { new: true }
      ).then(rdi => res.json(rdi))
      .catch(err => res.status(400).json(err));
    }
  }
);

/* DELETE Rdi by Id . 
@Route : rdi/delete/:id
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
  RdiModel.findById(req.params.id).then(old => {
    cleaner(old.image);
    RdiModel.deleteOne(query, err => {
      if (err) {
        res.status(500).json(err);
        return;
      } else {
        res.status(204).send('Rdi deleted');
      }
    });
  });
});

/* GET Rdi by Id . 
@Route : rdi/id/:id
*/
router.get('/id/:id', function(req, res) {
  let query = {
    _id: req.params.id
  };
  RdiModel.findById(query, function(err, Rdi) {
    if (err) return res.send(err);
    res.send(Rdi);
  }).populate('user');
});

/* Search Rdi by title . 
@Route : rdi/search
*/
router.get('/search', function(req, res) {
  var title = req.query.title;
  RdiModel.find({ title: new RegExp(title, 'i') })
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

module.exports = router;
