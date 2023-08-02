let divRef = document.querySelector("div")
let buttonRef = document.getElementById("aqua")
let buttonRef2 = document.getElementById("teal")
let buttonRef3 = document.getElementById("pink")
let buttonRef4 = document.getElementById("purple")
let buttonRef5 = document.getElementById("colorless")
let randombut= document.getElementById("rand")

let hider= document.getElementById("hide")
hider.addEventListener("click",()=>{
    if(divRef.style.display != "none")
    {
    divRef.style.display = "none"
    hider.innerHTML = "show" 
    }
    else{
        divRef.style.display="block"
        hider.innerHTML="hide"
    } 
})


function onClick(){
    divRef.style["backgroundColor"]="aqua"
    divRef.innerHTML="aqua"
}
function onClick2(){
    divRef.style["backgroundColor"]="teal"
    divRef.innerHTML="teal"
}
function onClick3(){
    divRef.style["backgroundColor"]="pink"
    divRef.innerHTML="pink"
}
function onClick4(){
    divRef.style["backgroundColor"]="purple"
    divRef.innerHTML="purple"
}
function onClick5(){
    divRef.style["backgroundColor"]="white"
   divRef.innerHTML="colorless"
}
function randclick(){
    let colorRan = Math.floor(Math.random() * 5)+1;
    if(colorRan==1){
        return onClick()
    }
    else if(colorRan==2){
        return onClick2()
    }
    else if(colorRan==3){
        return onClick3()
    }
    else if(colorRan==4){
        return onClick4()
    }
   else (colorRan==5);{
        return onClick5()
    }
}



buttonRef.onclick=onClick;
buttonRef2.onclick=onClick2;
buttonRef3.onclick=onClick3;
buttonRef4.onclick=onClick4;
buttonRef5.onclick=onClick5;
randombut.onclick=randclick;
