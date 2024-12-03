let mat = [[1, 2, 3, 4],
          [5, 6, 7, 8],
	       [9, 10, 11, 12],
		   [13, 14, 15, 16]];
		   
		   //traverse matrix
		  // for(let i = 0;i<mat.length;i++){
		  //     for(j =0;j<mat[0].length;j++){
		  //         console.log(mat[i][j]);
		  //     }
		  // }
		   
		   let row = mat.length;
		   let col = mat[0].length;
		   let top = 0, left = 0, bottom = row-1, right = col-1;
		   let ans = [];
		   
		   
		   while(top<=bottom && left<=right){
		       for(let i = left; i<=right;i++){
		           ans.push(mat[top][i]);
		       }
		       top++;
		       for(let i = top;i<=bottom;i++){
		           ans.push(mat[i][right]);
		       }
		       right--;
		       
		       if(top<=bottom){
                for(let i = right;i>=left;i--){
                    ans.push(mat[bottom][[i]]);
                }
                    bottom--;
                }
                
                if(left<=right){
                    for(let i = bottom;i>=top;i--){
                    ans.push(mat[i][left]);
                }
                left++
                }
		   }
		   
	console.log(ans);	   



