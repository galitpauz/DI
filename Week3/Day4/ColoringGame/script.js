let main = document.querySelector("#main");
for (let i=0;i<5000;i++){
    let box=document.createElement("div");
    box.setAttribute("class","box");
    main.appendChild(box);
}

let sidebar = document.querySelector("#sidebar");
let clearButton = document.createElement("button");
clearButton.setAttribute("id","clear");
clearButton.textContent="CLEAR";
sidebar.appendChild(clearButton);

let boxs = document.querySelectorAll(".box");
clearButton.addEventListener("click", function(){
    for (box of boxs){
        box.style.backgroundColor = "white";
    }
});
for (let j=0;j<30;j++){
    let colorBox=document.createElement("div");
    colorBox.setAttribute("class","color");
    colorBox.style.backgroundColor=getRandomColor();
    sidebar.appendChild(colorBox);
}

let color;
let colorBoxes=document.querySelectorAll(".color");
for (colorBox of colorBoxes){
    colorBox.addEventListener("click", function(e){
        color = e.target.style.backgroundColor;
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

for (box of boxs){
    box.addEventListener("mousemove",function(e){
        if (e.buttons==1){
        e.target.style.backgroundColor = color;
        }
    })
};