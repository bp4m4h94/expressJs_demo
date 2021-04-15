var express = require('express');
var router = express.Router();
var symbolListController = require('../controller/user/symbolList/symbolListController');

// 取得全部symbol清單
router.get('/getAllSymbolList', symbolListController.getAllSymbolList);

// 取得單筆symbol
router.get('/getAllSymbolList/:symbolName', symbolListController.getSymbolListBySymbolName);

module.exports = router;
