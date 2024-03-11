const http = require('node:http');
const url = require('node:url');
const config = require('./configs/config');
const stringConfig = require('./configs/stringConfig');
const util = require('node:util');
const Render = require('./Render');

const server = http.createServer((req, res) => {
  var path = url.parse(req.url, true).pathname;

  var filePath;

  switch (path) {
    case "/users":
      filePath = config.viewUser;
      break;
    case "/home":
    case "/":
      filePath = config.viewHome;
      break;
    case "/about":
      filePath = config.viewAbout; // Đặt đường dẫn tới about.html
      break;
    case "/contact":
      filePath = config.viewContact; // Đặt đường dẫn tới contact.html
      break;
    default:
      filePath = config.viewNotFound;
  }

  Render.ReadFile(filePath, res);

});

server.listen(config.portC, config.hostnameC, () => {
  console.log(util.format(
    stringConfig.NOTI_SERVER_RUNNING,
    config.hostnameC, config.portC
  ));
});
