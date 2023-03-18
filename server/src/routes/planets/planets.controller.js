// 只有router跟controller會綁定 model 可能可以搭配其他controller 所以放在不同層

const { getAllPlanets } = require('../../models/planets.model');

async function httpGetAllPlanets(req, res) {
    return res.status(200).json(await getAllPlanets()); //statuscode 200 可以不寫 default就是200 但這邊寫起來提醒對所有回應都是200
}  //加一個return 為了確保這個response只會設定一次 避免bug 雖然express預設會那樣做

module.exports = {
    httpGetAllPlanets,
};