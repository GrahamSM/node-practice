var countExtensions = require('./cnl_module');
countExtensions(process.argv[2], process.argv[3], function(err, data){
  if (err){
    throw err;
  }
  else{
    for (var i = 0; i < data.length; i++){
      console.log(data[i]);
    }
  }
});
