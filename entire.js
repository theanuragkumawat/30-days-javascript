export const name = "harry"
export const isLoggedIn = true

export function generateRandomNumber(){
    return Math.floor(Math.random() * 10 + 1)
}

export function sayMyName(name){
    console.log(`Your name is ${name}`);
    
}