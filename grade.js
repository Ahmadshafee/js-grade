var a;
function grade(a){

    switch(true){

        case a<35:
            console.log(" failed !");
            break;
    
        case a>=35 && a<60:
            console.log("second class");
            break;

        case a>=60 && a<85:
            console.log("first class");
            break;

        case a>=85:
            console.log("distinction");
            break;

        default:
            console.log("Invalid");

     }
}
grade(85);