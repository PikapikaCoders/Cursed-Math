let question = "1+1"
let answer = ""
let correctAnswer = "11"
let stageValue = 0

let stage = 1

function submitAnswer() {
    answer = document.getElementById("input").value
    if (answer == correctAnswer) {
        stageValue++
    } else {
        alert("The correct answer was '"+correctAnswer+"'!")
        stageValue = 0
    }
    questionGenerator()
}

function questionGenerator() {
    let tmp1 = 0
    let tmp2 = 0
    let tmp3 = 0
    let index1 = 0
    let index2 = 0
    let index3 = 0

    if (stageValue >= 3) {
        stageValue = 0
        stage++
    }

    switch (stage) {
        case 1:
            index1 = randomNumber(0, 9)

            index2 = randomNumber(0, 9)

            question = index1+"+"+index2
            correctAnswer = index1.toString()+index2.toString()
            break;
        
        case 2:
            tmp1 = [randomNumber(1, 9), randomNumber(0, 9), randomNumber(0, 9)]
            index1 = tmp1[0]*100+tmp1[1]*10+tmp1[2]

            tmp2 = randomNumber(0, 2)
            tmp3 = tmp1[tmp2]
            tmp1.splice(tmp2, 1)
            index2 = tmp1[0]*10+tmp1[1]

            question = index1+"-"+index2
            correctAnswer = tmp3.toString()
            break;

        case 3:
            tmp1 = randomNumber(0, 9)
            tmp2 = randomNumber(0, 9)
            index1 = tmp1.toString()+tmp2.toString()

            index2 = randomNumber(0, 3)

            question = index1+"x"+index2
            correctAnswer = ""
            for (let i = 0; i < index2; i++) {
                correctAnswer = correctAnswer+index1
            }
            break;
        
        default:
            alert("ERROR!!!");
    }

    document.getElementById("question").innerHTML = "What is "+question+"?"
    document.getElementById("input").value = "";
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}