const e = require('express');
var express = require('express');
var router = express.Router();

//localhost:3000/books -GET
//localhost:3000/books/id - GET
//localhost:3000/books - POST
//localhost:3000/books/id - PUT
//localhost:3000/books/id - DELETE
var books = [{
  id: 1,
  name: "Tieng viet 1"
}, {
  id: 2,
  name: "Tieng viet 2"
}, {
  id: 3,
  name: "Tieng viet 3"
}]

router.get('/', function(req, res, next) {
    res.send(students);
  });
  
  router.get('/:id', function(req, res, next) {
    var foundStudent = students.find(s => s.MSSV === req.params.id);
    if (foundStudent) {
      res.send(foundStudent);
    } else {
      res.status(404).send("MSSV không tồn tại");
    }
  });
  
  router.post('/', function(req, res, next) {
    var newStudent = {
      MSSV: generateID(12),
      HoTen: req.body.HoTen,
      Lop: req.body.Lop
    };
    students.push(newStudent);
    res.status(200).send(newStudent);
  });
  
  router.put('/:id', function(req, res, next) {
    var foundStudent = students.find(s => s.MSSV === req.params.id);
    if (foundStudent) {
      foundStudent.HoTen = req.body.HoTen;
      foundStudent.Lop = req.body.Lop;
      res.status(200).send(foundStudent);
    } else {
      res.status(404).send("MSSV không tồn tại");
    }
  });
  
  router.delete('/:id', function(req, res, next) {
    var foundIndex = students.findIndex(s => s.MSSV === req.params.id);
    if (foundIndex !== -1) {
      students.splice(foundIndex, 1);
      res.status(200).send("Xóa sinh viên thành công");
    } else {
      res.status(404).send("MSSV không tồn tại");
    }
  });
  
  function generateID(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  module.exports = router;
