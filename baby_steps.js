var i = 2;
var sum = 0;
while (process.argv[i] != null){
	sum += Number(process.argv[i]);
	i += 1;
}
console.log(sum);
