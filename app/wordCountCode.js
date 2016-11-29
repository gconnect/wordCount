module.exports = function(sen){

// function words (sen){

  var result = {};
  var wordArr = sen.replace(/[\n\t]/gi, ' ')
  				   .replace(/ {2,}/g, " ").split(' ');
  wordArr.forEach (function (word){
  if (Object.hasOwnProperty.call(result, word)){
    result[word]+=1;
   } else {
  result[word]=1;
  }   

  });

return result;
}
// }

//match.(/\w+/g);