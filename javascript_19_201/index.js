const toDoList = [];
// let userInput = '';
// while(userInput == '')
// {
//     userInput = prompt("What would you like to do?");  

//     while(userInput !== ''){
//         if(userInput == 'quit'){
//             console.log('You have quit the program')
//             break;
//         } 
//         if(userInput.trim().toLowerCase() == 'new') {
//             userInput = prompt('What would you like to add?');
//             toDoList.push(userInput);
//             console.log(`${userInput} added to the list`);
//         }
//         if(userInput.trim().toLowerCase() == 'delete'){
//             userInput = prompt('Which item do you want to remove? Use the list number');
//             console.log(`${userInput}: ${toDoList[userInput]} has been remove`);
            
//             if(userInput == 0){
//                 toDoList.shift();
//             } else if(userInput == toDoList.length -1){
//                 toDoList.pop();
//             } else {
//                 toDoList.splice((userInput),1);
//             }
//         }        
//         if(userInput.trim().toLowerCase() == 'list') {
//             console.log('********************')
//             for(var i = 0; i<toDoList.length; i++){
//                 console.log(`${i}: ${toDoList[i]}`);
//             }
//             console.log('********************')
//         }
//         userInput = prompt("What would you like to do?");  
//     }
// }

// 


// 25lines vs 36 line of code...25lines also use pasrseInt and Number.isNan() and simple splice 

// 
let userInput = prompt("What would you like to do?");
while(userInput.toLowerCase().trim() !== 'quit' && userInput.toLowerCase().trim() !== 'q')
{  
    if(userInput.toLowerCase().trim() == 'list') {
        console.log('********************')
        for(var i = 0; i<toDoList.length; i++){
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log('********************')
    } else if(userInput.trim().toLowerCase() == 'new') {
        userInput = prompt('What would you like to add?');
        toDoList.push(userInput);
        console.log(`${userInput} added to the list`);
    } else if(userInput.trim().toLowerCase() == 'delete'){
        const index = parseInt(prompt('Which item do you want to remove? Use the list number'));
        if(!Number.isNaN(index)){
            console.log(`${index}: ${toDoList[index]} has been remove`);
            const deleted = toDoList.splice(index,1);
        } else {
            console.log('Unknown index')
        }
    }

    userInput = prompt("What would you like to do?");  
}
console.log('You have quit the program')



    




