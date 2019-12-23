function createPyramid(rows)
{

for(var i=0;i<rows;i++) {
var output="";
var charCode = 97;
    for(var j=0;j<rows-i;j++) {
        output+=" ";
    }
    for(var k=0;k<=i;k++) {    
       //output += "* ";
       
       output += String.fromCharCode(charCode ) +  ' ';
         charCode++;
    }
    console.log(output);  
}  
}
createPyramid('5') 
