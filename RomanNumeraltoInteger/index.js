
var romanToInt = function myfunction(s) {
    var output = 0;
    iterations = s.length;
    for(i=0; i <= (iterations -1); i+=1 ){
    switch(true){
        case (s.charAt(i)=="I"):
            output += 1;
            break;
        case (s.charAt(i)=="V"):
            output += 5;
            break;
        case (s.charAt(i)=="X"):
            output += 10;
            break;
        case (s.charAt(i)=="L"):
            output += 50;
            break;
        case (s.charAt(i)=="C"):
            output += 100;
            break;
        case (s.charAt(i)=="D"):
            output += 500;
            break;
        case (s.charAt(i)=="M"):
            output += 1000;
            break;
        default:
            break;
    }
    }
        if((s.includes("CD") || s.includes("CM")) == true)   {
            output -= 200;
        } 
        if((s.includes("XL") || s.includes("XC")) == true)   {
            output -= 20;
        }
        if((s.includes("IV") || s.includes("IX")) == true)   {
            output -= 2;
        } 

return output;
};
var outputarrin =[];
var outputarrout = [];
const romanhistory = document.getElementById("romanhistory");
document.getElementById("romansubmit").onclick = function() {
romanhistory.innerHTML ='';
s = document.getElementById("romaninput").value;
output = romanToInt(s);
outputarrin.push(s);
outputarrout.push(output);
for(j=0; j < outputarrin.length; j++){
    console.log(`test`);
    temp = document.createElement("p");
    temp.id = `p${j}`;
    temp.innerHTML= `${outputarrin[j]} ---------> ${outputarrout[j]}`;
    document.getElementById("romanhistory").appendChild(temp);
}

  }




        // THIS DOESENT WORK FOR SOME REASON!!?     switch(true){
       // case (s.includes("CD") || s.includes("CM")):
         //   output -= 200;
        //case (s.includes("XL") || s.includes("XC")):
          //  output -= 20;
        //case (s.includes("IV") || s.includes("IX")):
           // output -= 2;
        //default:
          //  break;
//        }