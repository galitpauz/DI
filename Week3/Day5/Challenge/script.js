// Write a JS program to print the letter A using stars.

// For the first 20min of the Daily Challenge, try to think about the steps and code by yourself. After this period of time, if you have some issues, look for help on the internet


function letter_A() {
    for (let i = 0; i < 7; i++) {
      if (i == 0) {
        console.log('  ***');
      } else if (i == 1) {
        console.log(' *   *');
      } else if (i == 2) {
        console.log(' *   *');
      } else if (i == 3) {
        console.log(' *****');
      } else if (i == 4) {
        console.log(' *   *');
      } else if (i == 5) {
        console.log(' *   *');
      } else if (i == 6) {
        console.log(' *   *');
      }
    }
  }
  
  letter_A();