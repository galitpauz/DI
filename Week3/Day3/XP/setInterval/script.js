// Move the box from left to right
// Tip: use setInterval

let elem = document.getElementById("animate");



function move() {setInterval(function() {
    let pos = 0;
	if (pos <= 350) {
        elem.style.left = pos + "px";
    pos++;
	} else {
		clearInterval(move);
	}
}, 10)
};
// function move(){
//     let elem = document.getElementById("animate");
//     let id = setInterval(border, 10);
//     function border(){
//         if(pos == 350){
//             clearInterval(id)
//         } else {
//             pos++
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";

//         }
//     }
// }

  
//   let id;
//   function setInter(){
//     let num = 0
//     id = setInterval(function(){
//       console.log(num);
//       num ++
//     },1000);
//   }
  
//   function clearInter(){
//     clearInterval(id);
//   }
  
