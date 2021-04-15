const symbolListDao = require("../../../dao/symbolList/symbolListDao");

const symbolListController = {

    getAllSymbolList: (req, res) => {
        const symbolList = symbolListDao.getAllSymbolList();
        res.send(symbolList);
    },

    getSymbolListBySymbolName: (req, res) => {
        const symbolList = symbolListDao.getSymbolListBySymbolName(req.params.symbolName);
        res.send(symbolList);
    }
}

module.exports = symbolListController