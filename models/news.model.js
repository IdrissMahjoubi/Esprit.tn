const mongoose = require('mongoose');
const newsTypes = require('../enums/news.types');
const Schema = mongoose.Schema;
const eventSchema = mongoose.Schema(
  {
    title: String,
    dateStart: Date,
    dateEnd: Date,
    description: String,
    archived: {
      type: Boolean,
      required: false
    },
    type: {
      type: String,
      enum: newsTypes
    },
    url: String,
    image: {
      type: String,
      required: false
    },
    user: { type: Schema.Types.ObjectId, ref: 'users' }
  },
  {
    timestamps: true
  }
);
const event = mongoose.model('news', eventSchema);

module.exports = event;
