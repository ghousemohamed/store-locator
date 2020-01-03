const mongoose = require("mongoose");
const geocoder = require('../utils/geocoder');

const StoreSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: [true, "StoreId is required"],
    unique: true,
    trim: true,
    maxlength: [10, "maximum length of the store can be only 10 characters"]
  },
  address: {
      type: String,
      required: [true, 'Please add an address']
  },
  location: {
      type: {
          type: String,
          enum: ['Point']
      },
      coordinates: {
          type: [Number],
          index: '2dsphere'
      },
      formattedAddress: String
  },
  createdAt: {
      type: Date,
      default: Date.now
  }
});

StoreSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].latitude, loc[0].longitude],
        formattedAddress: loc[0].formattedAddress
    }
    this.address = undefined;
    console.log(loc);
    next();
})

module.exports = Store = mongoose.model('store', StoreSchema);
