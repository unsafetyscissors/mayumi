var serverUtil = require('./client/services/serverUtilities');
var fs = require('fs');

serverUtil.send('GET', 'test', function(error, response, body){
	console.log(error, body);
})

var inputSentence = 'the dog eats candy';
serverUtil.sendSentence(inputSentence, function(error, outputSentence){
	console.log('error:' + error);
	console.log(JSON.stringify(outputSentence));

fs.readFile('./testFile', 'utf8', function (error, data) {
  if(error){
    return error
  }
  console.log(data);
});


function printOutput(partArray) {

	var out = JSON.stringify(partArray);
	return out;
}

function multSpeech(objIn, checkPart) {
	var boolOut = false;
	var len = objIn.part_speech.length;
	var count = 0;

	while (count < len && !boolOut) {
		if (objIn.part_speech[count] == checkPart) {
			boolOut = true;
		}
		count++;
	}

	return boolOut;
}

function chunk(wordArr) {

	var chunkArr = [];
	var len = wordArr.length;

	for ( i = 0; i < len; i++) {
		var pos = wordArr[i].part_speech;
		if (pos == "preposition") {
			var pos2 = wordArr[i+1]
		}
	}

	while (i < len) {
		var startV = i;
		if (multSpeech(wordArr[i],"article")) {
			val chunkText = wordArr[i].text;
			while (i < len && !multSpeech(wordArr[i].part_speech, "noun") {
				i++;
				chunkText = chunkText + " " + wordArr[i].text;
			}
			var chunkObj = {
				text:chunkText,
				part_speech: "",
				start: startV
				end: end
			}
			chunkArr.push()
		}
		i++;
	}

}







var testNew = {
	test:"The Dog",
	part_speech: "subject"
};

var testNew2 = {
	test:"ate",
	part_speech: "verb"
};

var outStuff = printOutput([testNew, testNew2]);
console.log(outStuff);
