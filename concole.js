
// var a1=+prompt("Enter your first value");
// var b1=+prompt("Enter your first value");
// var sum= a1 + b1; 
// console.log(`<table class="tab"  border="liquid" width="200px" height="200px">
//     <tr height="50px">
//         <th rowspan="2" colspan="4" >${sum}</th>
//     </tr>
//    <tr>

//    </tr>
//     <tr>
//         <td><button>C</button></td>
//         <td><button>()</button></td>
//         <td><button>%</button></td>
//         <td><button>/</button></td>
//     </tr>
//     <tr>
//         <td>7</td>
//         <td>8</td>
//         <td>9</td>
//         <td>X</td>
//     </tr>
//     <tr>
//         <td>4</td>
//         <td>5</td>
//         <td>6</td>
//         <td>-</td>
//     </tr>
//     <tr>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//         <td>+</td>
//     </tr>
//     <tr>
//         <td>+/-</td>
//         <td>0</td>
//         <td>.</td>
//         <td>=</td>
//     </tr>
// </table>`)
// document.write(`<table class="tab" border="solid"  width="200px" height="200px">
//     <tr height="50px">
//         <th rowspan="2" colspan="4" >${sum}</th>
//     </tr>
//    <tr>

//    </tr>
//     <tr>
//         <td>C</td>
//         <td>()</td>
//         <td>%</td>
//         <td>/</td>
//     </tr>
//     <tr>
//         <td>7</td>
//         <td>8</td>
//         <td>9</td>
//         <td>X</td>
//     </tr>
//     <tr>
//         <td>4</td>
//         <td>5</td>
//         <td>6</td>
//         <td>-</td>
//     </tr>
//     <tr>
//         <td>1</td>
//         <td>2</td>
//         <td>3</td>
//         <td>+</td>
//     </tr>
//     <tr>
//         <td>+/-</td>
//         <td>0</td>
//         <td>.</td>
//         <td>=</td>
//     </tr>
// </table>`)
// // var a1 =+prompt("enter your first value")
// // var b1 =+prompt("enter your second value")
// function sum0(n1,n2){
//     var v1 = n1 + n2;
// return v1
// }
// var sum1 = sum0 (a1,b1)
// console.log(sum1)
// document.write(sum1)




// function sum2(n1,n2){
//     var a1 = n1 * n2;
// return a1
// }
// var sum1 = sum2(a1,b1)
// console.log(`<h5>Anwser by multiply is ${sum1}</h5>`)
// document.write(`<h5>Anwser by multiply is ${sum1}</h5>`)





// function sum3(n1,n2){
//     var a1 = n1 - n2;
// return a1
// }
// var sum1 = sum3(a1,b1)
// console.log(`<h5>Anwser by subraction is ${sum1}</h5>`)
// document.write(`<h5>Anwser by subraction is ${sum1}</h5>`)




// function sum4(n1,n2){
//     var a1 = n1 / n2;
// return a1
// }
// var sum1 = sum4(a1,b1)
// console.log(`<h5>Anwser by divide is ${sum1}</h5>`)
// document.write(`<h5>Anwser by divide is ${sum1}</h5>`)


var sum = document.getElementById("result") 
function num(value) {
    document.getElementById('result').value += value;
    
}


function num1(value){
    document.getElementById('result').value = ("")
}



function del() {
    var input = document.getElementById("result");
    input.value = input.value.substring(0, input.value.length - 1);
  }




function calculate() {
    var resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } 
    catch (error) {
        resultField.value = 'Error';
    }
}