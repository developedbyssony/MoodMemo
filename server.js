const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const http = require('http').createServer(app);

//cors 이슈 해결
app.use(express.json());
app.use(express.static(path.join(__dirname, '/build')));
app.use(cors());

// 메인 접속 시 빌드 파일로 보내줌
app.get('/', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html')); 
  })

// 리액트가 라우팅을 담당하도록 설정함
app.get('*', (res, req) => {
    req.sendFile(path.join(__dirname, '/build/index.html')); 
})

http.listen(8080, () => {
    console.log("Listening on 8080");
});
