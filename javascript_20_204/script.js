function printHeart(){
    console.log("<3");
}

printHeart();
//----------------------------
function rant(message){
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}


rant("I hate beets");
rant("I hate beets");
rant("I hate beets");
//----------------------------
function isSnakeEyes(num1,num2) {
    if (num1==1 && num2==1){
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}
//----------------------------
function multiply(num1,num2){
    if(Number.isNaN(num1) || Number.isNaN(num2)){
        return "invalid input";
    }
        return num1 * num2;
}
//----------------------------
function isShortsWeather(tmp){
    if(tmp>=75){
        return true; 
    }
    else {return false;}
    
}

isShortsWeather(80);
isShortsWeather(48);
isShortsWeather(75);
//----------------------------
function lastElement(array){
    if(array.length == 0){
        return null;
    }
    return array[array.length-1];
}
//----------------------------
function capitalize(str){
    let firstLetter = str[0].toUpperCase();
    return firstLetter + str.slice(1);
}
//----------------------------
function sumArray(array){
    let total = 0;
    for(let i in array){
        total += array[i];
    }
    return total;
}
//----------------------------
function returnDay(num){
    let dayOfTheWeek = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    
    if(num < 1 || num > 7){
        return null;
    } else if (num-1 === 0){
        return dayOfTheWeek[0];
    }
      else if (num-1 == 1){
        return dayOfTheWeek[1];
    }
      else if (num-1 == 2){
        return dayOfTheWeek[2];
    }
      else if (num-1 == 3){
        return dayOfTheWeek[3];
    }
      else if (num-1 == 4){
        return dayOfTheWeek[4];
    }
      else if (num-1 == 5){
        return dayOfTheWeek[5];
    }
      else {
        return dayOfTheWeek[6];
    }
}
//----------------------------
