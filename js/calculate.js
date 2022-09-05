
function calculate(){
    let exisitngData =  document.getElementById("outputScreen").value

        let sum = eval(exisitngData)           
        document.getElementById("outputScreen").value = sum
}


function display(data){

    let exisitngData =  document.getElementById("outputScreen").value
    let getTheLastCharacter =  exisitngData.charAt(exisitngData.length - 1)
   if (exisitngData.charAt(0) == '0') {
         document.getElementById("outputScreen").value = data
   
   }else{     
   // if(exisitngData.charAt(exisitngData.length - 1) == "+" 
   //     || exisitngData.charAt(exisitngData.length - 1) == "-"
   //     || exisitngData.charAt(exisitngData.length - 1) == "x" 
   //     || exisitngData.charAt(exisitngData.length - 1) == "/") {
   // }
   if(getTheLastCharacter == '+' || getTheLastCharacter  == '-'
        || getTheLastCharacter == 'x' || getTheLastCharacter == '/') {

           if (data == '+' || data  == '-' || data == 'x' || data == '/') {
                let data_replace = exisitngData.replace(getTheLastCharacter, data)
                document.getElementById("outputScreen").value = data_replace

           }else{
                document.getElementById("outputScreen").value = exisitngData + data
           }
     
           
   }else{
       document.getElementById("outputScreen").value += data
   }

}

}



function clearAC(){
    document.getElementById("outputScreen").value = 0
}


function del(){

    let exisitngData =  document.getElementById("outputScreen").value 
    let strLen = exisitngData.length - 1

    document.getElementById("outputScreen").value  =  exisitngData.substring(0, strLen)

  

}
// function outPut1(){
//     document.getElementById("outputScreen").value = 1
// }