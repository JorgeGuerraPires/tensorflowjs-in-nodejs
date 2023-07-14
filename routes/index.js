var express = require('express');
var router = express.Router();

const tf = require("@tensorflow/tfjs")


/* GET home page. */
router.get('/', function (req, res, next) {

  console.log("TensorFlow.js version: ", tf.version.tfjs);


  res.render('index', { title: 'Express' });
});

module.exports = router;
