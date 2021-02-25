const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true, // 이메일 안에서 띄어쓰기를 없애줌
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    // 토큰을 이용해 유효성 검사 등
    type: String,
  },
  tokenExp: {
    // 토큰의 유효 기간
    type: Number,
  },
});

const User = mongoose.model("User", userSchema); // 스키마를 모델로 감싸준다.

module.exports = { User }; // 모델을 다른 곳에서도 쓰기 위해
