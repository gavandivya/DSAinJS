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

/* Output
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/


function pattern5(n) {
    for (let row = 1; row < 2 * n; row++) {
        if (row <= n) {
            for (let col = 1; col <= row; col++) {
                string += col + " ";
            }
        }
        else if (row > n) {
            for (let col = 1; col <= 2 * n - row; col++) {
                string += col + " ";
            }
        }

        string += "\n";
    }
    console.log(string);
}


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

/**
 * 
 * Output
 *  *
   **
  ***
 ****
*****
 */

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

/** Output
 ****
  ***
   **
    *
 */

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