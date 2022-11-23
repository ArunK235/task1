console.log("hello world");

//array.map
const array=['apple','oranges','','mango','','lemon'];
console.log(array.map(arr=>{
    array[2]='empty string';
    array[4]='empty string';
    return arr;
}));

//fatarrow
const add= (a,b)=>a+b;
console.log(add(3,5));


const Name='arun';
const  age=21;
const hobbies=true;
const user=(username,userage,userhobbies)=>{
    return(username + userage + userhobbies);
};
console.log(user(Name,age,hobbies));

//destructing
/*const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
const { key1, key3}  = { ...obj1}
console.log(key1, key3)*/

/*const arr1 = ['value1', 'value2']
const [ val1, val2 ] = arr1
console.log(val1)
console.log(val2)*/

const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
let { key1, key3}  = obj1
key1 = 20;
key3 = 123
console.log(obj1.key1, obj1.key3)

//asyncjs
console.log('a');

console.log('b');


const arun=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('c');
            
        }, 3000);
    });
}
const kumar=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('d');
        }, 0);
    });
    
}

async function f1(){   
    
    const a= await arun();
    console.log(a);
    const b= await kumar();
    console.log(b); 
    console.log('e');     
}
f1();
    
//object
const student={
    name:'arun',
    age:21,
    rollno:29,
    greet(){
        console.log('hi this is ,'+this.name)
    }
}
student.greet();

//promises
/*console.log('a');

console.log('b');


setTimeout(() => {
    console.log('c');
    arun().then((t)=>{
        console.log(t);
    });
    
    kumar().then((t)=>{
        console.log(t);
    });    
}, 3000);
const kumar=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('d');
        }, 0);
    });
    
}
const arun=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('e');
            
        }, 3000);
    });
}

        
    */

//spreadoperator
//const hobbies=['playing','cooking'];
//const copied=[...hobbies];
//console.log(copied);

/*const obj1 = {'key1': 1}

const obj2 = { ...obj1}
console.log(obj2);

if(obj2 === obj1){

console.log('same objects')

}

else{

console.log('different  objects')

}*/
/*const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)*/
