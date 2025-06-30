const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true, minlength: 3, maxlength: 32 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true, match: /.+\@.+\..+/ },
  passwordHash: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  avatarUrl: { type: String },
}, {
  timestamps: true,
  versionKey: false
});

module.exports = mongoose.model('User', UserSchema);
