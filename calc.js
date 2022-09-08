let buttons = document.getElementsByClassName('button');
let check = 0;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function (){
        val = input(buttons[i].innerHTML)
        document.getElementById('screen').value = val
    })
}

function input(char) {
    switch (char) {
      case '=':
        resp = calculate();
        break;
      case '+/-':
        resp = addMinus('-')
        break;
      case 'AC':
        resp = 0;
        break;
      case '←':
        resp = del()
        break;
      default:
        resp = display(char);
    }
    return resp
}

function del() {
    str = document.getElementById('screen').value;
    if(str.length <= 1) {
        return 0
    }else {
        return str.slice(0, -1);
    }
}

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
        return char;
    } else {
        if(lastChar != '-') {
            return document.getElementById('screen').value + char;
        }else{
            return document.getElementById('screen').value
        }
    }
}

function clearScreen() {
    document.getElementById('screen').value = 0;
    check = 0
}

function display(char) {
    if(check == '1') {
        clearScreen();
    }
    str = document.getElementById('screen').value;
    lastChar = str.charAt(str.length-1)
    if(str == '0'){
        if(char == '.'){
            return document.getElementById('screen').value + char;
        } else {
            if(!is_Operator(char)){
                return char;
            } else {
                return 0
            }
        }
    } else {
        if(is_Operator(char) && is_Operator(lastChar)) {
            if(is_Operator(str.charAt(str.length-2))) {
                str = str.slice(0, -2) + char;
                return str;
            } else {
                str = str.slice(0, -1) + char;
                return str;
            }
        } else {
            return document.getElementById('screen').value + char;
        }
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
    check = 1;            
    return eval(updateddata)
}