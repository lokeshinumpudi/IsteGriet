
// var bold = data.event.bolds[0];
// var description = data.event.description;

// var regExp = new RegExp();
// regExp.compile(bold,"gi");
// console.log(description);
//first find no of instances of bold[words] in description[text]
function findEndIndexes(text, word) {
    text = text.toLowerCase();
    word = word.toLowerCase();
    var acceptableChars = [",", ".", "!", "&", "@", "/", '"', "'", "#", "*", " "];
    var nextSearchFrom = 0;
    var endIndexes = [];
    while (nextSearchFrom < text.length) {
        var start = text.indexOf(word, nextSearchFrom);
        // when not found break loop
        if (start == -1) {
            break;
        }
        // check the word matched has white space before and after
        // so we select only the word we wanted to find occurence
        //presence of special chars is acceptable

        if (acceptableChars.indexOf(description[start - 1]) != -1
            && acceptableChars.indexOf(description[start + word.length]) != -1) {
            // now we have a perfect word 
            //so push its end index
            endIndexes.push(start + bold.length);
        }

        //  console.log(description[start - 1] + ":" +description[start + word.length ] );
        // defines where to start next search from
        //  endIndexes.push(start + bold.length);
        nextSearchFrom = start + 1;
    }//while ends

    return endIndexes;
}//findEndIndexes function

// var endindexes = findEndIndexes(description, bold);
// console.log(endindexes);
var splitarrays = [];
// for (var i = 0; i < endindexes.length; i++) {
//     var start, end;
//     var text = "";
//     // A littel logic to extract text from a sentence given an array of indexes
//     if (i == 0) {
//         // start of index so include from begining of text
//         start = 0;
//         end = endindexes[i];
//     } else if (i == endindexes.length - 1) {
//         // end of indexes so fetch the remaining last text
//         start = endindexes[i];
//         end = description.length;
//     }
//     else {
//         // start from a index+1 so we dont include the endIndexes letter[cause it belongs to other para]
//         start = endindexes[i - 1] + 1;
//         end = endindexes[i];
//     }

//     // simply loop over start/end and fetch text
//     for (var j = start; j < end; j++) {
//         text += description[j];
//     }

//     splitarrays.push(text);
// }//for endindexes

// console.log(splitarrays);

// now each array in split array has our required word,which we can easily replace with our custom elements
var replacedArray = [];
splitarrays.forEach(function (eachtext, index) {
    replacedArray.push(splitarrays[index].replace(bold, "<strong>" + bold + "</strong>"));
});





            // console.log(replacedArray);

            // var reg = new RegExp();
            // // \\s:match whitespace , \\W: matches all that is not a word char [^A-Za-z0-9_]
            // var name = "\\s" + bold + "\\s?\\W";
            // reg.compile(name, "gi");
            // var newDescp = description.replace(reg, " <strong>" + bold + "</strong> ");

            // console.log(newDescp);
