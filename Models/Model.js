/** @format */

const mongoose = require('mongoose');


dotenv.config();

const MONGO_URI = 'mongodb+srv://janesunpark:Jan3M0ng0DB@cluster0.gdo7x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'RainbowSquaresDB',
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: Number,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  
});

const User = mongoose.model('user', userSchema);

module.exports = {
  User,
};
