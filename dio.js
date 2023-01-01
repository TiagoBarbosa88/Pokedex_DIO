/* let line = gets()
console.log(line);

function gets(entrada){
  if (entrada % 3 === 0 && entrada % 5 ===0 ) {
    return 'FizzBuzz' 
  } else if ( entrada % 3 === 0){
    return 'Fizz'
  } else if ( entrada % 5 === 0 ){
    return 'Buzz'
  } else {
    return entrada
  }
} */


var i;
for( i=1; i<=100; i++ ) {
var num3 = 3;
var num5 = 5;

fizz = i%num3
buzz = i%num5;

if(fizz == 0) {
	document.write("Fizz");
}

if(buzz == 0) {
	document.write("Buzz");
}

if( fizz != 0 && buzz != 0 ) {
	document.write(i);
} 

document.write("<br />");

}