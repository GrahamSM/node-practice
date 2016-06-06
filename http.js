var http = require("http");

function httpGet(arg){
  http.get(arg, (res) => {
    res.setEncoding('utf8')
    res.on('data', console.log)
    res.on('error', console.error)
  }).on('error', console.error)
}
httpGet(process.argv[2]);
