var fs = require('fs')
var path = require('path')

const timer =  1*3600*1000
// const tmpPath = path.resolve(__dirname, '..', 'anjo-animal-api', 'tmp')
const tmpPath = path.resolve(__dirname, 'tmp')


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


setInterval(function(){rmDir(tmpPath); console.log('tmp was cleaned')}, timer);