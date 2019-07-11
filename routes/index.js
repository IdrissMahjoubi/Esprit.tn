const router = require('express').Router();

const indexRouter = require('./index');
const userRoutes = require('./user.route'); 
const clubRouter = require('./club');
const eventRouter = require('./event.route');
const challengesRouter = require('./challenges');
const unityRouter = require('./unity');
const partRouter = require('./parteneriat');
const pressRouter = require('./press');
const specRouter = require('./speciality');
const calRouter = require('./calendrier');
const tarRouter = require('./tarifs');
const infraRouter = require('./infrastructure');
const actRouter = require('./actualite');

router.get('/', (req, res) => {
  res.send({
    success: true
  });
});

router.use("/user", userRoutes);

// router.use('/', indexRouter);
//router.use('/users', usersRouter);
router.use('/club', clubRouter);
router.use('/events', eventRouter);
router.use('/challenges', challengesRouter);
router.use('/unity', unityRouter);
router.use('/part', partRouter);
router.use('/press', pressRouter);
router.use('/speciality', specRouter);
router.use('/calendrier', calRouter);
router.use('/tarif', tarRouter);
router.use('/infrastructure', infraRouter);
router.use('/act', actRouter);

module.exports = router;
