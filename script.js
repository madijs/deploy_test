
// number, string, bool, undefined, NaN, symbol, null 

// you don't know js


let a = 19;

console.log(a);

// УСЛОВИЯ


// first example
if(a > 20){
    console.log("YES")
}else{
    console.log()
}

// second example

let b = 27;

console.log(5 == '5') // сравнивает по значениям
console.log(5 === '5') // сравнивает по значению и по типу

if(b > 0){
    console.log("больше 0") 
}else if(b<0) {
    console.log("меньше 0")
}else{
    console.log("Равно нулю")
}

let str = "hello"

console.log(str.length)


console.log(Math.round(Math.pow(b,2)))

console.log(Math.sqrt(b) === Math.pow(b, 0.5))

let month = 2;

switch(month){
    case 1:
        console.log("Январь");
        break;
    case 2:
        console.log("Февраль");
        break;
    case 3:
        console.log("Март");
        break;
    case 4:
        console.log("Апрель");
        break;         
    case 5:
        console.log("Май");
        break; 
    case 6:
        console.log("Июнь");  
        break; 
    case 7:
        console.log("Июль"); 
        break;
    case 8:
        console.log("Август");
        break;      
    default:    
        console.log("Нету такого месяца");
        break;
}


// ЦИКЛ

//for (С ЧЕГО НАДО НАЧИНАТЬ; ДО КАКОГО ЧИСЛА; ШАГ)

for(let i=0;i<10;i+=2){
    console.log(i);
}

//while будет работать до того момента пока условие верное

let bool = false;
let num = 0;

while(!bool){
    num = num+10;
    console.log(num)
    if(num === 100){
        bool = true;
    }
}

// Обьекты

// Массив
//     

console.log("///////////////////")
//           0    1     2   3     4
let arr = ['he','3120',10,'eq',20,1000];

let sum = 0;

for(let i=0;i<arr.length;i++){
    if(typeof arr[i] === 'string' && arr[i].length<3){
        sum++
    }
}

console.log(sum)

// Обьект

let obj = {
    'name': 'Madi',
    'age': 50
} //2gb

// console.log(obj['name']);
// console.log(obj.name)

for(let key in obj){
    console.log(key+":"+obj[key])
}

let anotherObj = {...obj};
anotherObj.name = 'Aida'
console.log(obj)


let z = '1231232193i8129-0380-129301293-0192-039120-3' // 1gb
let w = z;


//ЗАДАЧИ

//input: [1,1,0,0,1];
// output: 1

let array = [1,1,0,0,1];

let sum2 = 0; // 0
let sum3 = 0; // 1
let ans;

for(let i=0;i<array.length;i++){
    if(array[i] === 0){
        sum2++;
    }else{
        sum3++;
    }
    if(i === array.length-1){
        if(sum2>sum3){
            ans = sum3;
        }else{
            ans = sum2
        }
        console.log(ans)
    }
}

// input: [0,1,2,3,4,5,6,7,8,9]
// output: [9,8,7,6,5,4,3,2,1,0]

let array2 = [0,1,2,3,4,5,6,7,8,9];
console.log(array2);

let array3 = [];

for(let i=array2.length-1;i>=0;i--){
    array3.push(array2[i])
}

console.log(array3);

