const express = require('express');

const {
    httpGetAllPlanets, //直接定義我們要用的函數 可以清楚知道我們現在要用甚麼功能 而且還可以再加
} = require('./planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/', httpGetAllPlanets); //getAllPlanets處理使用者的動作以便對model進行操作,controller就放在同一層資料夾裡面

module.exports = planetsRouter;