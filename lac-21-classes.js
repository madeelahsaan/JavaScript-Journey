
// class rectangle {
//     constructor(name,height,width){
//         this.name=name
//         this.height=height
//         this.width=width
//     }
// }

// const rect = new rectangle("ract",20,30);
// console.log("width of rect is :",rect.width);
// const square = new rectangle("square",50,50);
// console.log(square)



// class person {
//     constructor(name){
//         this.name=name
//     }

//     intro(){
//         console.log(`Hi I am ${this.name}`)
//     }
// }
// const unknown = new person("unknown");
// console.log(unknown.intro());



class ValidationError extends Error {
    printCustomerMessage() {
        return `Validation failed :-( (details: ${this.message})`;
    }
}

try {
    throw new ValidationError("Not a valid phone number");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(error.name); // This is Error instead of ValidationError!
        console.log(error.printCustomerMessage());
    } else {
        console.log("Unknown error", error);
        throw error;
    }
}