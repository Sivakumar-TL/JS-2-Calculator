var value1 = document.getElementById("input1");
var value2 = document.getElementById("input2");

function add(){

    var result = parseFloat(value1.value)+ parseFloat(value2.value);
    document.getElementById("result").innerHTML = result;

    clear();
}

function sub(){

    var result = parseFloat(value1.value)- parseFloat(value2.value);
    document.getElementById("result").innerHTML = result;

    clear();
}

function mul(){

    var result = parseFloat(value1.value) * parseFloat(value2.value);
    document.getElementById("result").innerHTML = result;

    clear();
}

function div(){

    var result = parseFloat(value1.value) / parseFloat(value2.value);
    document.getElementById("result").innerHTML = result;

    clear();
}

function clear(){
    value1.value = "";
    value2.value = "";
}