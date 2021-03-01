var fs = require('fs')
var path = require('path')

const timer =  1*3600*1000
const tmpPath = path.resolve(__dirname, '..', 'app', 'anjo-animal-api', 'tmp')


rmDir = function(dirPath) {
  try { var files = fs.readdirSync(dirPath); }
  catch(e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        rmDir(filePath);
    }
};


setInterval(rmDir(tmpPath), timer);