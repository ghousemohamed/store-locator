const mongoose = require("mongoose");

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

module.exports = Store = mongoose.model('store', StoreSchema);
