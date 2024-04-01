var size = 0;
var peoples = [];
var formArray = [];
var sumAll = 0;
var avg = 0;

let input = document.getElementById("input");
  input.addEventListener("submit", (event) => {
    event.preventDefault();
  })

function rand(){
    size=Math.floor(Math.random()*9)+1;
    let i =size;
    var parentdiv = document.getElementById("input");
    var lastdiv = document.getElementById("randdiv");
    while(i>0){
        var header1 = document.createElement("h3");
        header1.innerHTML = "ใส่ชื่อและอายุเพื่อนคนที่ " + ((size-i)+1);
        var name = document.createElement("input");
        name.setAttribute('type','text');
        name.setAttribute('class','name');
        name.setAttribute('name','name');
        name.setAttribute('placeholder','ชื่อ')
        name.required=true;
        var age = document.createElement('input');
        age.setAttribute('type','number');
        age.setAttribute('class','age');
        age.setAttribute('name','age');
        age.setAttribute('placeholder','อายุ');
        age.required=true;
        parentdiv.appendChild(header1);
        parentdiv.appendChild(name);
        parentdiv.appendChild(age);
        i--;
    }
    var submit = document.createElement("button");
    submit.setAttribute("type","submit");
    submit.setAttribute("class","submit1");
    submit.setAttribute("id","submit1");
    submit.setAttribute("onclick","formSend()")
    submit.innerHTML = "Submit"
    parentdiv.appendChild(document.createElement("br"));
    parentdiv.appendChild(submit);
    parentdiv.style.display = 'block';
    lastdiv.style.display = 'none';
}
function formSend(){
    const form = document.getElementById("input");
    const formData = new FormData(form);
    if(!form.matches(':valid')){
        console.log("false")
    }else{
    var i = 0;
    var tmp= "";
    var arr =[];
    for(const [key, value] of formData) {
        console.log([key,value]);
        if(key == "name"){
            arr[value]=0;
        }else if(key=="age"){
            arr[tmp]=value;
            formArray.push(arr);
            arr=[];
        }
        tmp = value;
    }
    console.log(formArray);
    form.style.display = 'none';
    var calcData = document.getElementById("calculated-Data");
    calcData.style.display = 'grid';
    var sum =0;
    for(var p of formArray){
        for(let value of Object.values(p)){
            sum += Number(value);
            console.log(sum);
        }
    }
    sumAll = sum;
    avg = sumAll/size;
}
}

function showSum(x){
    document.getElementById("answer").innerHTML = sumAll +" ปี";
}
function showAvg(x){    
    document.getElementById("average").innerHTML = avg + " ปี";
}
function showDesc(){
    var lowest=100;
    var lowestArr =[];
    for(var p of formArray){
        for(let value of Object.values(p)){
            if(value<lowest){
                lowest = value;
            }
        }
    }
    for(var p of formArray){
        for(let value of Object.values(p)){
            if(value == lowest){
                lowestArr.push(p);
            }
        }
    }
    console.log(lowestArr);
    var NameString="คนที่อายุน้อยที่สุดคือ";
    var i=1;
    var listName="\n";
    for(let p of lowestArr){
        for(let key in p){
            console.log(key);
                if(lowestArr.length==1){
                    alert("คนที่อายุน้อยที่สุดคือ " + key + " " + p[key]);
                    break;
                }else{
                    listName = listName + i + "." + key + " " + p[key] + "\n";
        }
    }
    i++;
}
    if(lowestArr.length>1){
        alert(NameString+listName);
    }
}
function showAscd(){
    var highest=0;
    var highestArr =[];
    for(var p of formArray){
        for(let value of Object.values(p)){
            if(value>highest){
                highest = value;
            }
        }
    }
    for(var p of formArray){
        for(let value of Object.values(p)){
            if(value == highest){
                highestArr.push(p);
            }
        }
    }
    console.log(highestArr);
    var NameString="คนที่อายุมากที่สุดคือ";
    var i=1;
    var listName="\n";
    for(let p of highestArr){
        for(let key in p){
            console.log(key);
                if(highestArr.length==1){
                    alert("คนที่อายุมากที่สุดคือ " + key + " " + p[key]);
                    break;
                }else{
                    listName = listName + i + "." + key + " " + p[key] + "\n";
        }
    }
    i++;
}
    if(highestArr.length>1){
        alert(NameString+listName);
    }
}
function reset(){
    size = 0;
    peoples = [];
    formArray = [];
    sumAll = 0;
    avg = 0;
    document.getElementById("input").innerHTML = '';
    document.getElementById("randdiv").style.display = "block";
    document.getElementById("calculated-Data").style.display = "none";
}