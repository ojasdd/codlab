import React from "react";

const Algorithm =() =>{
    return(
        <p>
          To visualize the way in which shell sort works, perform the following steps:
 ∑ Step 1: Arrange the elements of the array in the form of a table and sort the columns (using 
insertion sort).
 ∑ Step 2: Repeat Step 1, each time with smaller number of longer columns in such a way that 
at the end, there is only one column of data to be sorted.
 Note that we are only visualizing the elements being arranged in a table, the algorithm does its 
sorting in-place.
          </p>
    );
}

export default Algorithm;