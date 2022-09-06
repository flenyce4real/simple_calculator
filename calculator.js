function is_Operator(char) {
    switch (char) {
      case '÷':
      case 'x':
      case '+':
      case '-':
      case '%':
      case '.':
        resp = true;
        break;
      default:
        resp = false;
    }
    return resp;
}

function addMinus(char) {
    str = document.getElementById('screen').value;
    lastChar = str.charAt(str.length-1)
    if(str == '0'){
        document.getElementById('screen').value = char;
    } else {
        if(lastChar != '-') {
            document.getElementById('screen').value += char;
        }
    }
}

function display(char) {
    if(document.getElementById('check').value == '1') {
        document.getElementById('check').value = 0
        document.getElementById('screen').value = 0;
    }
    str = document.getElementById('screen').value;
    lastChar = str.charAt(str.length-1)
    if(str == '0'){
        if(char == '.'){
            document.getElementById('screen').value += char;
        } else {
            if(!is_Operator(char)){
                document.getElementById('screen').value = char;
            }
        }
    } else {
        if(is_Operator(char) && is_Operator(lastChar)) {
            if(is_Operator(str.charAt(str.length-2))) {
                str = str.slice(0, -2) + char;
                document.getElementById('screen').value = str;
            } else {
                str = str.slice(0, -1) + char;
                document.getElementById('screen').value = str;
            }
        } else {
            document.getElementById('screen').value += char;
        }
    }
}

function clearScreen() {
    document.getElementById('screen').value = 0;
}

function del() {
    str = document.getElementById('screen').value;
    if(str.length <= 1) {
        document.getElementById('screen').value = 0;
    }else {
        document.getElementById('screen').value = str.slice(0, -1);
    }
}

function calculate() {
    let displayData =  document.getElementById("screen").value;
    let updateddata = '';
    for(let x = 0; x < displayData.length; x++){
        if(displayData.charAt(x) == 'x') {
            updateddata += '*';
        } else if (displayData.charAt(x) == '÷') {
            updateddata += '/';
        } else {
            updateddata += displayData.charAt(x)
        }
    }            
    document.getElementById("screen").value = eval(updateddata)
    document.getElementById('check').value = 1
}