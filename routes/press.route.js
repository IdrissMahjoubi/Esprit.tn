const router = require('express').Router();
const passport = require('passport');
var { PressModel } = require('../models/index');
const { uploadTwo } = require('../utils/Uploader');
const path = require('path');
const cleaner = require('../utils/fileCleaner');
const { allowedImages, allowedFiles } = require('../enums/fileExtentions');

/* GET All Press . 
@Route : press/
*/
router.get('/', (req, res) => {
  PressModel.find({ archived: false })
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* GET All Achived Press . 
@Route : press/archived
*/
router.get('/archived', passport.authenticate('jwt', { session: false }), (req, res) => {
  var users = null;
  PressModel.find({ archived: true })
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

router.get('/getPressBy/:type', (req, res) => {
  PressModel.find({ type: req.params.type })
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* GET All Press . 
@Route : press/archived
*/
router.get('/getAll', passport.authenticate('jwt', { session: false }), (req, res) => {
  var users = null;
  PressModel.find()
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* ADD Press . 
@Route : press/add
*/
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  uploadTwo(req, res, function(err) {
    let img = '';
    let pdf = '';
    if (req.files.length > 0) {
      req.files.forEach(file => {
        if (allowedFiles.indexOf(path.extname(file.filename).toLocaleLowerCase()) > -1) {
          pdf = file.path;
        }
        if (allowedImages.indexOf(path.extname(file.filename).toLocaleLowerCase()) > -1) {
          img = file.path;
        }
      });
    }
    newPress = new PressModel({
      title: req.body.title,
      description: req.body.description,
      url: req.body.url,
      archived: req.body.archived === 'true',
      type: req.body.type,
      image: img,
      file: pdf,
      user: req.user._id
    });
    newPress
      .save()
      .then(press => res.json(press))
      .catch(err => res.status(400).json(err));
  });
});
/* UPDATE Single Press. 
@Route : press/update/:id
*/
router.put('/update/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  uploadTwo(req, res, function(err) {
    const query = {
      _id: req.params.id
    };
    let img = '';
    let pdf = '';
    if (req.files.length > 0) {
      req.files.forEach(file => {
        if (allowedFiles.indexOf(path.extname(file.filename).toLocaleLowerCase()) > -1) {
          pdf = file.path;
        }
        if (allowedImages.indexOf(path.extname(file.filename).toLocaleLowerCase()) > -1) {
          img = file.path;
        }
      });
      
    }
    //Delete old files
    PressModel.findById(req.params.id).then(old => {
      if(img!=='')
      cleaner(old.image);
      if(pdf!='')
      cleaner(old.file);

      let eventUpdated = {
        title: req.body.title,
        description: req.body.description,
        archived: req.body.archived,
        type: req.body.type,
        url: req.body.url,
        user: req.user._id
      };
      if (pdf.length > 0) {
        eventUpdated.file = pdf;
      }
      if (img.length > 0) {
        eventUpdated.image = img;
      }
      PressModel.findByIdAndUpdate(
        query,
        {
          $set: eventUpdated
        },
        { new: true }
      )
        .then(event => res.json(event))
        .catch(err => res.status(400).json(err));
    });
    });
    
});

/* ARCHIVE Single Press. 
@Route : press/archive/:id
*/
router.put('/archive/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  let query = {
    _id: req.params.id
  };
  PressModel.findByIdAndUpdate(
    query,
    {
      $set: { archived: true }
    },
    { new: true }
  )
    .then(event => res.json(event))
    .catch(err => res.status(400).json(err));
});

/* UNARCHIVE Single Press. 
@Route : press/unarchive/:id
*/
router.put('/unarchive/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  let query = {
    _id: req.params.id
  };
  PressModel.findByIdAndUpdate(
    query,
    {
      $set: { archived: false }
    },
    { new: true }
  )
    .then(event => res.json(event))
    .catch(err => res.status(400).json(err));
});

/* DELETE Single Press. 
@Route : press/delete/:id
*/
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), function(
  req,
  res,
  next
) {
  let query = {
    _id: req.params.id
  };
  //Delete old files
  PressModel.findById(req.params.id).then(old => {
    cleaner(old.image);
    cleaner(old.file);
    PressModel.deleteOne(query, err => {
      if (err) {
        res.status(500).json(err);
        return;
      } else {
        res.status(204).send('Press deleted');
      }
    });
  });
});

/* GET Single Press unarchived. 
@Route : press/get/:id
*/
router.get('/get/:id', function(req, res) {
  let query = {
    _id: req.params.id,
    archived: false
  };
  PressModel.findOne(query)
    .populate('user')
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

/* GET Single Press any. 
@Route : press/archived/:id
*/
router.get('/archived/:id', passport.authenticate('jwt', { session: false }), function(req, res) {
  let query = {
    _id: req.params.id
  };
  PressModel.findOne(query)
    .populate('user')
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

/* GET All Press By Type any. 
@Route : press/allbytype
*/
router.get('/allbytype', passport.authenticate('jwt', { session: false }), function(
  req,
  res,
  next
) {
  let query = {
    type: req.query.type
  };
  PressModel.find(query)
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

/* GET All Press By Type unarchived. 
@Route : press/bytype
*/
router.get('/bytype', function(req, res, next) {
  let query = {
    type: req.query.type,
    archived: false
  };
  PressModel.find(query)
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    });
});

router.get('/search', function(req, res) {
  var title = req.query.title;
  let query = {
    title: new RegExp(title, 'i'),
    archived: false
  };
  PressModel.find(query)
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json(err));
});

router.get('/searchAll', passport.authenticate('jwt', { session: false }), function(req, res) {
  var title = req.query.title;
  let query = {
    title: new RegExp(title, 'i')
  };
  PressModel.find(query)
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(400).json(err));
});

module.exports = router;
