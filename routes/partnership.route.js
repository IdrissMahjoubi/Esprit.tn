var express = require('express');
var router = express.Router();
const passport = require('passport');
const { upload } = require('../utils/Uploader');
var { PartnershipModel } = require('../models/index');
const cleaner = require('../utils/fileCleaner');

/* GET All Partnership . 
@Route : Partnership/
*/
router.get('/', function(req, res, next) {
  PartnershipModel.find()
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* GET add Partnership . 
@Route : Partnership/add
*/
router.post(
  '/add',
  upload.single('image'),
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    newPartnership = new PartnershipModel({
      title: req.body.title,
      date: new Date(),
      type: req.body.type,
      description: req.body.description,
      url: req.body.url,
      image: req.file.path,
      user: req.user._id
    });
    newPartnership.save(function(err, result) {
      if (err) res.send(err);
      else res.send(result);
    });
  }
);

/* UPDATE Partnership by Id . 
@Route : Partnership/update/:id
*/
router.put(
  '/update/:id',
  upload.single('image'),
  passport.authenticate('jwt', { session: false }),
  function(req, res) {
    if (req.file) {
      //Delete old image
      PartnershipModel.findById(req.params.id).then(old => {
        cleaner(old.image);
        PartnershipModel.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              title: req.body.title,
              date: new Date(),
              type: req.body.type,
              description: req.body.description,
              url: req.body.url,
              image: req.file.path,
              user: req.user._id
            }
          },
          { new: true }
        ).then(partnership => res.json(partnership))
        .catch(err => res.status(400).json(err));
      });
    } else {
      PartnershipModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            title: req.body.title,
            date: new Date(),
            type: req.body.type,
            description: req.body.description,
            url: req.body.url,
            user: req.user._id
          }
        },
        { new: true }
      ).then(partnership => res.json(partnership))
      .catch(err => res.status(400).json(err));
    }
  }
);

/* DELETE Partnership by Id . 
@Route : Partnership/delete/:id
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
  PartnershipModel.findById(req.params.id).then(old => {
    cleaner(old.image);
    PartnershipModel.deleteOne(query, err => {
      if (err) {
        res.status(500).json(err);
        return;
      } else {
        res.status(204).send('Partnership deleted');
      }
    });
  });
});

/* GET Partnership by Id . 
@Route : Partnership/id/:id
*/
router.get('/id/:id', function(req, res) {
  let query = {
    _id: req.params.id
  };
  PartnershipModel.findById(query, function(err, Partnership) {
    if (err) return res.send(err);
    res.send(Partnership);
  }).populate('user');
});

/* Get Partnership by type . 
@Route : Partnership/type
*/
router.get('/type', function(req, res) {
  var type = req.query.type;
  PartnershipModel.find({ type: type })
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* Search Partnership by title . 
@Route : Partnership/search
*/
router.get('/search', function(req, res) {
  var title = req.query.title;
  PartnershipModel.find({ title: new RegExp(title, 'i') })
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

module.exports = router;
