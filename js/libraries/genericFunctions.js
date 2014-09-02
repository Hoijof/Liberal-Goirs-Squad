// PROTOTYPES

/*
 * Returns the size of an array
*/
Array.prototype.size = function(){ 
	return this.filter(function(a){return a !== undefined;}).length
};

/*
 * Returns the size of an object
*/
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

/*
 * Returns a random property of an object
*/
var getRandomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

/*
 * Returns a random key from an object
*/
var getRandomKey = function (obj) {
    var keys = Object.keys(obj);
    return keys[ keys.length * Math.random() << 0];
};

/*
 * Returns a key form an object given the key position
*/
function getKeyFromNumber (obj, key){
    var keys = Object.keys(obj);
    return keys[key];
}

/*
 * Returns a number of a range maped into another range
*/
Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
  return ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
};


// FUNCTIONS

/*
 * Formats a number and returns it with a given length
*/
function formatNumberLength(num, length) {
	var r = "" + num;
	while (r.length < length) {
		r = "0" + r;
	}
	return r;
}

/*
 * Returns true or false based in a % probability
*/
function isAppening(prob) {
	return getRandomInt(0, 100) <= prob;

}

/*
 * Gets the actual document root
*/
function getDocumentRoot (keyWord) {
	var  baseUrl = document.location.href.split("/");
	do {
		baseUrl.splice(-1,1);
	} while (baseUrl[baseUrl.length-1] != keyWord);
	return baseUrl.join('/');
}

/*
 * Loads a javascript file
*/
function loadjsfile( filename)
{
	var rnd = Math.floor(Math.random()*80000);
	var fileref = document.createElement( 'script' );
	fileref.setAttribute( "type", "text/javascript" );
	fileref.setAttribute( "src", filename + "?r=" + rnd ); // note this line
}

/*
 * Returns a random integer between a range
*/
function getRandomInt (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
 * Returns a random real between a range
*/
function getRandom (min, max) {
	return Math.random() * (max - min + 1) + min;
}

/*
 * Creates and returns a CORS requests 
*/
function createCORSRequest(method, url){
	var xhr = new XMLHttpRequest();
	if ("withCredentials" in xhr){
		xhr.open(method, url, true);
	} else if (typeof XDomainRequest != "undefined"){
		xhr = new XDomainRequest();
		xhr.open(method, url);
	} else {
		xhr = null;
	}
	return xhr;
}

/*
 * Reads a file from the system
*/
function readFile (fileName) {
	if (FileReader)
	{
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			var url = 'http://ivy-corp.com/src/data/'+fileName;

			var request = createCORSRequest('GET', url);
			if (request){
				request.onload = function(){
					surnames = request.response;
					//console.log(surnames);
					return ('pedrinn');
				};
				request.send();
			}

		} else {
			alert('The File APIs are not fully supported by your browser.');
		}
	} else {
		console.log ('Your browser doesn\'t support the FileReader functionality of HTML5, you\'re not suited to be' +
			'part of the testing team, sorry');
	}
}