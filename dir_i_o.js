var fs = require('fs');
var content;
var content_string;
fs.readdir(process.argv[2], function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
    content_string = content.toString('utf-8');
    countFiles(content_string, process.argv[3]);
    // num_newlines = countNewLines(content_string);
});


function countFiles(string, ext){
  var matches = [];
  var file_list = string.split(',');
  var extension;
  for (var i = 0; i < file_list.length; i++){
    if (file_list[i].indexOf('.') > -1){
      extension = file_list[i].substr(file_list[i].indexOf('.')+1);
      if (extension === ext){
        matches.push(file_list[i]);
        console.log(file_list[i])
      }
    }
  }
}
