//if i dont put this on top i cant use let
"uses strict";

let preformUpload = function(imgStatus: string) : Promise <{imgStatus : string}> {
	 return new Promise((reslove) => {
	 	console.log(`Status ${imgStatus}`);
	 	setTimeout(() => {
	 		reslove({imgStatus: imgStatus});
	 	}, 1000);
	 });
}

var upload;
var compress;
var transfer;

preformUpload('uploading...')
.then((res) => {
	upload = res;
	return preformUpload('compressing...');
})
.then((res) => {
	compress = res;
	return preformUpload('transferring...');
})
.then((res) => {
	transfer = res;
	return preformUpload('image upload completed');
});