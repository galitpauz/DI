// /*
// * findIntersection function return an array that
// * contain the numbers exist in both strings from the array.
// * ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
// */
// let arr1 = [1,2,5,6,7];
// let arr2 = [2,5,7,8,15];

// // const findIntersection = (strArr) { 
// //     let arr1 = strArr[0].split(",");
// //     let arr2 = strArr[1].split(",");
    
// //     let intersectStrings = arr1.filter(function(value){
// //       return arr2.includes(value);
// //     });
    
// //     if(intersectStrings.length === 0){
// //       return false;
// //     }else{
// //       return intersectStrings.join(",").replace(/\s/g, "");
// //     }
// //   }



//   const findIntersection = (array) => {
//     let array1 = array[0].split(",");
//     let array2 = array[1].split(",");
//     let shared = array2.filter(num => 
//       array1.includes(num))
//     return shared;
//   }
//   findIntersection(["1,2,5,6,7", "2,5,7,8,15"]);


  //call the form
// document.forms[0]
// document.forms.frm //if we add the form name
// let q = frm.element.q
// let v = q.value
// minifile file - remove the spaces and put it in one line and reduce the size of the file
function validations(){
  let q = document.getElementById("search").value;
  if (q === ''){
    alert("Please enter a valid query");
    return false;
  }
  return true;
}

