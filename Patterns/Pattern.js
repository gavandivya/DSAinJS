let string = "";
function pattern1(n) {
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
pattern1(5);
console.log("-------------------------");


/* Output
 *****
 *****
 *****
 *****
 *****
 */

function pattern2(n) {
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
pattern2(5);
console.log("-------------------------");


/* Output
 *
 **
 ***
 ****
 *****
 */

function pattern3(n) {
  for (let row = 1; row <= n; row++) {
    // for (let col = 1; col <= n - row; col++) {
    for (let col = n; col >= row; col--) {
      string += col;
    }
    string += "\n";
  }
  console.log(string);
}
pattern3(5);
console.log("-------------------------");



/* Output
    *****
    ****
    ***
    **
    *
    * 
    * if we use (let col = 1; col <= n - row; col++)
    1234
    123
    12
    1
    *
    * if we use (let col = n; col >= row; col--)
    *54321
    5432
    543
    54
    5

 */

function pattern4(n) {
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      string += col + " ";
    }
    string += "\n";
  }
  console.log(string);
}
pattern4(4)

/* Output
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/
console.log("-------------------------");
function pattern5(n) {
  for (let row = 1; row < 2 * n; row++) {
    if (row <= n) {
      for (let col = 1; col <= row; col++) {
        string += col + " ";
      }
    } else if (row > n) {
      for (let col = 1; col <= 2 * n - row; col++) {
        string += col + " ";
      }
    }

    string += "\n";
  }
  console.log(string);
}
pattern5(5);
console.log("-------------------------");

function pattern6(n) {
  for (let row = 1; row <= n; row++) {
    //for adding space in start
    for (let col = 1; col <= n - row; col++) {
      string += " ";
    }

    for (let col = 1; col <= row; col++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

pattern6(5)

/**
 *
 * Output
 *  *
 **
 ***
 ****
 *****
 */
 console.log("-------------------------");
 
function pattern7(n) {
  for (let row = 1; row <= n; row++) {
    for (let col = 0; col < row; col++) {
      string += " ";
    }
    // for (let col = n; col >= row; col--) {
    //     string += "*"
    // }

    for (let col = 1; col <= n - row; col++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
pattern7(5);

/** Output
 ****
 ***
 **
 *
 */
 console.log("-------------------------");

function pattern8(n) {
  for (let row = 1; row <= n; row++) {
    for (col = 1; col <= n - row; col++) {
      string += " ";
    }

    for (col = 1; col <= 2 * row - 1; col++) {
      string += "*";
    }

    for (col = 1; col <= n - row; col++) {
      string += " ";
    }
    string += "\n";
  }
  console.log(string);
}
pattern8(5);
console.log("-------------------------");

/**
 * Output
 *  *
 ***
 *****
 *******
 *********
 *
 */
function pattern9(n) {
  for (let row = 1; row <= n; row++) {
    for (col = 1; col <= row - 1; col++) {
      string += " ";
    }

    for (col = 1; col <= 2 * (n - row) + 1; col++) {
      string += "*";
    }

    for (col = 1; col <= row - 1; col++) {
      string += " ";
    }
    string += "\n";
  }
  console.log(string);
}

pattern9(5);
console.log("-------------------------");
/**
 * Output
 **********
 *******
 *****
 ***
 *
 */

function pattern10(n) {
  for (let row = 1; row <= n; row++) {
    //for adding space in start
    for (let col = 1; col <= n - row; col++) {
      string += " ";
    }

    for (let col = 1; col <= row; col++) {
      string += "* ";
    }
    string += "\n";
  }
  console.log(string);
}
pattern10(4);
console.log("-------------------------");


/**
 * Output
 *
 *  *
 * *
 * * *
 * * * *
 * * * * *
 */

function pattern11(n) {
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      string += " ";
    }
    // for (let col = n; col >= row; col--) {
    //     string += "*"
    // }

    for (let col = 1; col <= n - row + 1; col++) {
      string += "* ";
    }
    string += "\n";
  }
  console.log(string);
}
pattern11(4)
console.log("----------------------------");


/**
 * Output
 *
 * * * *
 * * *
 * *
 *
 */

function pattern40(n) {
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      string += row;
    }
    string += "\n";
  }
  console.log(string);
}
pattern40(4);
console.log("----------------------------");


/* Output 
11111
22222
33333
44444
55555
 * 
 */

function pattern41(n) {
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      string += col;
    }
    string += "\n";
  }
  console.log(string);
}

/** Output 
12345
12345
12345
12345
12345
 */

pattern9(5);
console.log("----------------------------");


// empty diamond
function pattern01(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < n - i; j++) {
      string = string + "* ";
    }
    for (let j = 0; j <= 2 * i; j++) {
      string = string + "  ";
    }
    for (let j = 0; j < n - i; j++) {
      string = string + "* ";
    }
    console.log(string);
  }
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < i + 1; j++) {
      string = string + "* ";
    }
    for (let j = 0; j < 2 * n - 2 * i - 1; j++) {
      string = string + "  ";
    }
    for (let j = 0; j < i + 1; j++) {
      string = string + "* ";
    }
    console.log(string);
  }
}

pattern01(5);
console.log("----------------------------");

/** Output 

 * * * * *   * * * * * 
 * * * *       * * * * 
 * * *           * * * 
 * *               * * 
 *                   * 
 *                   * 
 * *               * * 
 * * *           * * * 
 * * * *       * * * * 
 * * * * *   * * * * * 
**/

//diamond
function pattern02(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < n - i; j++) {
      string = string + "* ";
    }
    for (let j = 0; j < 2 * i; j++) {
      string = string + "  ";
    }
    for (let j = 0; j < n - i; j++) {
      string = string + "* ";
    }
    console.log(string);
  }
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < i + 1; j++) {
      string = string + "* ";
    }
    for (let j = 0; j < 2 * n - 2 * i - 2; j++) {
      string = string + "  ";
    }
    for (let j = 0; j < i + 1; j++) {
      string = string + "* ";
    }
    console.log(string);
  }
}
pattern02(5);
console.log("----------------------------");

/** Output 
 * * * * * * * * * * 
 * * * *     * * * * 
 * * *         * * * 
 * *             * * 
 *                 * 
 *                 * 
 * *             * * 
 * * *         * * * 
 * * * *     * * * * 
 * * * * * * * * * * 
 
**/

//solid half diamond
function pattern03(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < i + 1; j++) {
      string = string + "* ";
    }
    console.log(string);
  }
  for (let i = 0; i < n - 1; i++) {
    string = " ";
    for (let j = 0; j < n - i - 1; j++) {
      string = string + "* ";
    }
    console.log(string);
  }
}

pattern03(5);
console.log("----------------------------");

/** Output
 *
 * *
 * * *
 * * * *
 * * * * *
 * * * *
 * * *
 * *
 *
 **/

//Floyd's triangle
function patternFloydTriangle(n) {
  let string = "";
  let count = 0;
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < i + 1; j++) {
      count = count + 1;
      string = string + count + " ";
    }
    console.log(string);
  }
}
patternFloydTriangle(8);
console.log("----------------------------");

/** Output 
    
     1 
     2 3 
     4 5 6 
     7 8 9 10 
     11 12 13 14 15 
     16 17 18 19 20 21 
     22 23 24 25 26 27 28 
     29 30 31 32 33 34 35 36 
     
     **/

//Palindrome Equilateral
function pattern04(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < n - i; j++) {
      string = string + " ";
    }
    for (let j = 0; j <= i; j++) {
      string = string + (j + 1);
    }
    for (let j = i; j > 0; j--) {
      string = string + j;
    }
    console.log(string);
  }
}

pattern04(5);
/** Output 
              1
             121
            12321
           1234321
          123454321
**/
console.log("----------------------------");
function pattern05(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < n - i; j++) {
      if (j == 0) {
        string = string + (i + 1);
      } else if (j == n - i - 1) {
        string = string + 5;
      } else if (i == 0) {
        string = string + (j + 1);
      } else {
        string = string + " ";
      }
    }

    console.log(string);
  }
}

pattern05(5);

/** Output 
     12345
     2  5
     3 5
     45
     5
     **/

console.log("----------------------------");
//ButterFly
function patternButterfly(n) {
  let string = "";
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j <= i; j++) {
      string = string + "* ";
    }
    for (let j = 0; j < 2 * n - 2 * i - 2; j++) {
      string = string + "  ";
    }
    for (let j = 0; j <= i; j++) {
      string = string + "* ";
    }

    console.log(string);
  }
  for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < n - i; j++) {
      string = string + "* ";
    }
    for (let j = 0; j < 2 * i; j++) {
      string = string + "  ";
    }
    for (let j = 0; j < n - i; j++) {
      string = string + "* ";
    }

    console.log(string);
  }
}
patternButterfly(4);

/** Output 
        
*             * 
* *         * * 
* * *     * * * 
* * * * * * * * 
* * * * * * * * 
* * *     * * * 
* *         * * 
*             * 
**/
console.log("----------------------------");
function pattern06() {
  let string = "";
  let row = 5;
  let col = 17;
  for (let i = 0; i < row; i++) {
    string = " ";
    for (let j = 0; j <= col / 2 - 1 - i; j++) {
      string = string + "*";
    }
    for (let j = 0; j <= 2 * i; j++) {
      if (j % 2 == 0) {
        string = string + (i + 1);
      } else {
        string = string + "*";
      }
    }
    for (let j = 0; j <= col / 2 - 1 - i; j++) {
      string = string + "*";
    }

    console.log(string);
  }
}
pattern06();

/** Output 
     
********1********
*******2*2*******
******3*3*3******
*****4*4*4*4*****
****5*5*5*5*5****

 **/

console.log("----------------------------");
function pattern07(n) {
let string = "";
for (let i = 0; i < n; i++) {
    string = " ";
    for (let j = 0; j < n-i; j++) {
       string = string+"  "
    }
    for (let j = 0; j <= 2*i; j++) {
        if(j == 0 || j == 2*i){
            string = string+"* "
        }
        else{
            string = string+"  "
        }
     }
     for (let j = 0; j < n-i; j++) {
        string = string+"  "
     }
    console.log(string);
    }
    n = n-1;
    for (let i = 0; i < n; i++) {
        string = " ";
        for (let j = 0; j <= i+1; j++) {
           string = string+"  "
        }
        for (let j = 0; j <= (2*n) - (2*i)-2; j++) {
            if(j == 0 || j == (2*n) - (2*i)-2){
                string = string+"* "
            }
            else{
                string = string+"  "
            }
         }
         for (let j = 0; j <= i; j++) {
            string = string+"  "
         }
        console.log(string);
    }
}

pattern07(5);
/**
           *           
         *   *         
       *       *       
     *           *     
   *               *   
     *           *   
       *       *     
         *   *       
           *       
 */
console.log("----------------------------");
function HourGlass(n) {
    let string = "";
    for (let i = 0; i < n; i++) {
      string = " ";
      for (let j = 0; j <= i; j++) {
        string = string + "  ";
      }
      for (let j = 0; j <= 2 * n - 2 * i - 2; j++) {
        string = string + "* ";
      }
      for (let j = 0; j <= i; j++) {
        string = string + "  ";
      }
  
      console.log(string);
    }
    for (let i = 0; i < n; i++) {
      string = " ";
      for (let j = 0; j < n - i; j++) {
        string = string + "  ";
      }
      for (let j = 0; j <= 2 * i; j++) {
        string = string + "* ";
      }
      for (let j = 0; j < n - i; j++) {
        string = string + "  ";
      }
  
      console.log(string);
    }
  }
  HourGlass(4);
/**
   * * * * * * *        
     * * * * *     
       * * *       
         *         
         *         
       * * *       
     * * * * *     
   * * * * * * *   
*/