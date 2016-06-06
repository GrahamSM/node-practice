var fs = require('fs');
var content;
var content_string;
var num_newlines;
fs.readFile(process.argv[2], process.argv[3] function read(err, data) {
    if (err) {
        throw err;
    }
    var content = data;
    var content_string = content.toString('utf-8');
    var newline_array = content_string.split('\n');
});

function countNewLines(string){
  var newline_array = string.split('\n');
  console.log(newline_array.length-1);
}
