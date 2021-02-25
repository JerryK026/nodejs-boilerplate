const express = require("express"); //express 모듈을 가져온다.
const app = express(); //새로운 express app을 만든다.
const port = 3000; //port 번호
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//application/json
app.use(bodyParser.json());

// body-parser는 client가 server에 주는 데이터(ex. email, 전화번호) 등에 대한 dependency를 처리.
// postman을 이용하여 server에서 만든 걸 client에 제공할 수 있다.

// mongoose는 mongodb를 편하게 쓸 수 있게 해주는 툴
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // 이 내용들을 안 적어놓으면 에러가 발생.
  })
  .then(() => console.log("MongoDB connected...")) // 몽고디비가 연결되었는지 확인할 수 있도록.
  .catch((err) => console.log(err));

//  nodemon을 이용하면 서버를 재시작 안 해도 소스의 변화를 감지해 변화된 부분을 감지해 변화시켜줌.
app.get("/", (req, res) => {
  //express app을 넣은 뒤에 root dir에 오면,, Hello World!를 출력하도록 수행하겠다.
  res.send("쭈니 바보!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
