const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api');

const { application } = require('express');

const app = express(); //資料進來到express

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json()); //先檢查是不是json格式
app.use(express.static(path.join(__dirname, '..', 'public')));
/*在改了client端的build script之後 build出來的public資料夾現在在server資料夾裡面，所以這邊要把路徑指到那邊
就可以讓我們在最外層也可以serve前端 */

app.use('/v1', api);
// app.use('v2', v2Router); 可以同時支援很多版本

app.get('/*', (req, res) => { //加一個*號 讓express可以去找到所有符合的endpoints 換句話說就是當他沒有符合上面的routes時 他就會pass給在index.html裡面的react去處理這個routing
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;