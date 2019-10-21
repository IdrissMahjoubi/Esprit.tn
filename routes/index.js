const router = require('express').Router();

const userRoutes = require('./user.route');
const clubRouter = require('./club.route');
const eventRouter = require('./event.route');
const newsRouter = require('./news.route');
const pressRouter = require('./press.route');
const departementRouter = require('./departement.route');
const rdiRouter = require('./rdi.route');
const partnershipRouter = require('./partnership.route');
const sliderRouter = require('./slider.route');

router.get('/', (req, res) => {
  res.send({
    success: true
  });
});

router.use('/user', userRoutes);
router.use('/club', clubRouter);
router.use('/events', eventRouter);
router.use('/news', newsRouter);
router.use('/press', pressRouter);
router.use('/departement', departementRouter);
router.use('/rdi', rdiRouter);
router.use('/partnership', partnershipRouter);
router.use('/slider', sliderRouter);

module.exports = router;
