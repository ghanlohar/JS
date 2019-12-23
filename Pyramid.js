var createPyramid = function(rows) 
{
    for(var i = 0; i< rows; i++){
        var o = '';
        var charCode = '97';
        for(var j = 0; j< rows - i; j++){
            o += ' ';
        }
        for(var k = 0; k <= i; k++){
            o += String.fromCharCode(charCode) + ' ';
            charCode++;
        }
        console.log(o)
    }
}
createPyramid(5);
