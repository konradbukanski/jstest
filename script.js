const eng = [
    {
        question:"11111111111111111ENG",
        AnswerA: "aaaaaaaaaaa",
        AnswerB: "bbbbbbbbbbb",
        AnswerC: "ccccccccccccccc",
        corect: "A"
    },
    {
        question:"2222222222222222222ENG",
        AnswerA: "aaaaaaaaaaa",
        AnswerB: "bbbbbbbbbbb",
        AnswerC: "ccccccccccccccc",
        corect: "B"
    },
    {
        question:"33333333333333333333ENG",
        AnswerA: "aaaaaaaaaaa",
        AnswerB: "bbbbbbbbbbb",
        AnswerC: "ccccccccccccccc",
        corect: "C"
    },
    {
        question:"44444444444444444444ENG",
        AnswerA: "aaaaaaaaaaa",
        AnswerB: "bbbbbbbbbbb",
        AnswerC: "ccccccccccccccc",
        corect: "A"
    }
]
const pl = [
    {
        question:"11111111111111111pl",
        AnswerA: "aaaaaaaaaaa",
        AnswerB: "bbbbbbbbbbb",
        AnswerC: "ccccccccccccccc",
        corect: "A"
    },
    {
        question:"222222222222222222pl",
        AnswerA: "aaaaaaaaaaa",
        AnswerB: "bbbbbbbbbbb",
        AnswerC: "ccccccccccccccc",
        corect: "B"
    },
    {
        question:"3333333333333333333pl",
        AnswerA: "aaaaaaaaaaa",
        AnswerB: "bbbbbbbbbbb",
        AnswerC: "ccccccccccccccc",
        corect: "C"
    },
    {
        question:"4444444444444444444pl",
        AnswerA: "aaaaaaaaaaa",
        AnswerB: "bbbbbbbbbbb",
        AnswerC: "ccccccccccccccc",
        corect: "A"
    }
]
let itemList



const inputs = document.querySelectorAll(".input")
let result = 0;
let j=0;
let polish = true;
let english = false;

document.querySelector(".pl").addEventListener("click", () => {
    polish = true;
    english = false;
    changeLanguages()
})
document.querySelector(".en").addEventListener("click", () => {
    polish = false;
    english = true;
    changeLanguages()
})
function changeLanguages(){
if(polish){
    itemList = pl;
} else if(english){
    itemList = eng; 
}}

function checkAnswer(i){
    inputs.forEach(input => { 
        if(input.checked){
            console.log(i + " w funkcji ")
            console.log(input.value + "zaznaczone")
            console.log(itemList[i].corect + "prawidlowe")
            if(input.value==itemList[i].corect){
                result++;
                console.log(result + "result")
            }
            input.checked = false;
        }  else {
            alert("zaznacz odpowiedź")
        }
        
    })}




function changeQestion(i){
    document.querySelector(".exercise h1").innerHTML = `Zadanie ${j}`;
    document.querySelector(".question").innerHTML = itemList[i].question;
    document.querySelector(".answerA").innerHTML = itemList[i].AnswerA;
    document.querySelector(".answerB").innerHTML = itemList[i].AnswerB;
    document.querySelector(".answerC").innerHTML = itemList[i].AnswerC;
} 



document.querySelector(".formBtn").addEventListener("click", () => {
    console.log(i + "pierwsze przed funkcja")
    checkAnswer(i);
    
    
    
    // console.log(j)
    if(j < 3){
        itemList.splice(i, 1);
        i = Math.floor(Math.random()*itemList.length);
        changeQestion(i)
        j++;

    } else {
        alert(`Uzyskałeś ${result}/4 punktów`)
    }
    
})

changeLanguages()
let i = Math.floor(Math.random()*itemList.length);
changeQestion(i)


document.querySelector(".startTestBtn").addEventListener("click", () => {
    document.querySelector(".startTest").style.display = "none";
    document.querySelector(".exercise").style.display = "flex";  
})