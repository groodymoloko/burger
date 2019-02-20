//import the orm object for SQL syntax translation
const orm = require("../config/orm.js");

// call methods setup in the orm.js file
const burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // the variables cols and vals are arrays
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },

  };

// export burger object for use in
module.exports = burger;