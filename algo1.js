var  sentence="";

var   len=0;

var  words ;

var cmpt=0;

sentence=prompt("veuilez saisir une phrase  qui se termine avec un point");

if((sentence.indexOf(".")>-1)||(sentence!=null)){
sentence = sentence.replace(/  +/g, ' ');
console.log(sentence);

len =sentence.length;
let x=sentence.indexOf(" ");
console.log(x);

console.log("the length of the sentence is"+len);
//count every words apart 

words = sentence.split(' ').length;

console.log ("the number of words in the sentence is : "+words);

let wordsArr=sentence.split(' ');
console.log(wordsArr.length);

for (var i=0 ; i<wordsArr.length ; i++) {

for(var j =0;j<wordsArr[i].length;j++) {
if (wordsArr[i].charAt(j).match(/[aeiou]/gi)){

cmpt++ ;
}
}
}
console.log("the sentence includes"+cmpt+"vowels");

}
