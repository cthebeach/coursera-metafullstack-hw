/** Programmming with Javascript: Exercise Module 1 Working with conditionals and loops */

/** Task 1 */

for(var i = 1; i < 9; i++){
    if (i == 1) {
            console.log("Gold medal");
    } else if (i == 2) {
            console.log("Silver medal");
    } else if (i == 3) {
            console.log("Bronze medal");
    } else {
        console.log(i);
    }
}


/** Task 2 */
for(var i = 1; i < 9; i++){
    switch(i) {
        case 1:
            console.log("Gold medal");
            break;
        case 2:   
            console.log("Silver medal");
            break;
        case 3:
            console.log("Bronze medal");
        default:
            console.log(i);
            break;
    }
}
