var fs = require('fs');

function countExtension(dir_name, ext_name, callback){
  fs.readdir(dir_name, function read(err, data) {
      if (err){
        return callback(err);
      }
      var content = data;
      var content_string = content.toString('utf-8');
      var file_list = content_string.split(',');
      var matches = [];
      var extension;
      for (var i = 0; i < file_list.length; i++){
        if (file_list[i].indexOf('.') > -1){
          extension = file_list[i].substr(file_list[i].indexOf('.')+1);
          if (extension === ext_name){
            matches.push(file_list[i]);
          }
        }
      }
      callback(null, matches);
    })
  }

module.exports = countExtension;
