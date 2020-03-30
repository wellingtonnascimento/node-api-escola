"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenControlle = require('../controllers/TokenControlle'); var _TokenControlle2 = _interopRequireDefault(_TokenControlle);

const router = new (0, _express.Router)();


router.post('/', _TokenControlle2.default.store);

exports. default = router;
