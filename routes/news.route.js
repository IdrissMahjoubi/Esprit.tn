const router = require('express').Router();
const newsModel = require('../models/news.model');
const passport = require('passport');
const {upload,uploadTwo} = require('../utils/Uploader');


/* GET All Newss . 
@Route : news/
*/
router.get('/', (req, res) => {
  newsModel
    .find()
    .populate('user')
    .sort('-date')
    .then(data => {
      res.json(data);
    })
    .catch(err =>
      res.send(err));
    });

/* GET Single News . 
@Route : news/:id
*/
router.get('/:id', (req, res) => {
  const query = {
    _id: req.params.id
  };

  newsModel
    .findOne(query)
    .populate('user')
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

/* Add News . 
@Route : news/add + body {}
*/

router.post(
  '/add',
  upload.single('image'),
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    var img ='';
    if(req.file)
    {
      img = req.file.path;
    }
    newNews = new newsModel({
      title: req.body.title,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      description: req.body.description,
      type: req.body.type,
      archived: false,
      url: req.body.url,
      image: img,
      user: req.body.user
    });

    newNews
      .save()
      .then(news => res.json(news))
      .catch(err => res.status(400).json(err));
  }
);

/* UPDATE Single News. 
@Route : news/update/:id
*/
router.put(
  '/update/:id',
  upload.single('imageData'),
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const query = {
      _id: req.params.id
    };

    let newsUpdated;
    if (req.file) {
      newsUpdated = {
        title: req.body.title,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        description: req.body.description,
        type: req.body.type,
        url: req.body.url,
        image: req.file.path,
        user: req.body.user
      };
    } else {
      newsUpdated = {
        title: req.body.title,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        description: req.body.description,
        type: req.body.type,
        url: req.body.url,
        user: req.body.user
      };
    }

    newsModel
      .findOneAndUpdate(
        query,
        {
          $set: newsUpdated
        },
        { new: true }
      )
      .then(news => res.json(news))
      .catch(err => res.status(400).json(err));
  }
);

/* DELETE Single News. 
@Route : news/delete/:id
*/
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  let query = {
    _id: req.params.id
  };
  newsModel
    .deleteOne(query)
    .then(news => res.json(news))
    .catch(err => res.status(400).json(err));
});

router.put('/archive/:id', (req, res) => {
  let query = {
    _id: req.params.id
  };
  newsModel.findOneAndUpdate(
    query,
    {
      $set: { archived: true }
    },
    { new: true }
  ).then(news => res.json(news))
  .catch(err => res.status(400).json(err));
});

router.put('/unarchive/:id', (req, res) => {
  let query = {
    _id: req.params.id
  };
  newsModel.findOneAndUpdate(
    query,
    {
      $set: { archived: false }
    },
    { new: true }
  )      .then(news => res.json(news))
  .catch(err => res.status(400).json(err));
});



module.exports = router;
