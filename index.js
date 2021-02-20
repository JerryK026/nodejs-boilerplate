const express = require("express"); //express 모듈을 가져온다.
const app = express(); //새로운 express app을 만든다.
const port = 3000; //port 번호

// mongoose는 mongodb를 편하게 쓸 수 있게 해주는 툴
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://Seokyung:b8s6j3@boilerplate.mvc9s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      // 이 내용들을 안 적어놓으면 에러가 발생.
    }
  )
  .then(() => console.log("MongoDB connected...")) // 몽고디비가 연결되었는지 확인할 수 있도록.
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  //express app을 넣은 뒤에 root dir에 오면,, Hello World!를 출력하도록 수행하겠다.
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
