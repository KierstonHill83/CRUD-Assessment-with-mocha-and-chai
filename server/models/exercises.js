var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Exercise = new Schema ({
  name: String,
  description: String,
  tags: [String]
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/node-testing');

mongoose.model("exercises", Exercise);
