var mongoose = require('mongoose');
const { feesType, nationalityTypes } = require('../enums/fees.types');
var feeSchema = mongoose.Schema({
  reference: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: false
  },
  type: {
    type: String,
    enum: feesType,
    required: false
  },
  date: Date,
  year: {
    type: String,
    required: false
  },
  tva: {
    type: Number,
    required: false
  },
  nationality: {
    type: String,
    enum: nationalityTypes,
    required: false
  },
  fee: {
    type: Number,
    required: false
  },
  firstTranche: {
    type: Number,
    required: false
  },
  secondTranche: {
    type: Number,
    required: false
  }
});
var fee = mongoose.model('fee', feeSchema);
module.exports = fee;
