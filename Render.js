const fs = require('node:fs');

function ReadFile(path, res) {
  fs.readFile(path, (error, data) => {
    if (error) {
      res.statusCode = 200;
      res.setHeader('Content_Type', 'text/json');
      res.write(JSON.stringify({
        success: false,
        message: "file not found",
      }));
    } else {
      res.statusCode = 200;
      res.setHeader('Content_Type', 'text/html');
      res.write(data);
    }
    res.end();
  });
}

module.exports = {
  ReadFile: ReadFile
};
