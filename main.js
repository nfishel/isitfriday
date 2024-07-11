console.log("Hello Royals!");


const today = new Date();
if(today.getDay() === 5){
    document.querySelector("#answer").textContent = "YES!"
}else{
    document.querySelector("#answer").textContent = "NO :("
}
console.log(today);
