let question = "1+1"
let answer = ""
let correctAnswer = "11"

let stage = 1
let stageValue = 0
let winState = false

function submitAnswer() {
    if (!winState) {
        answer = document.getElementById("input").value
        if (answer == correctAnswer) {
            document.getElementById("output").innerHTML = "[You were correct]"
            stageValue++
        } else {
            document.getElementById("output").innerHTML = "[The correct answer was "+correctAnswer+"]"
            stageValue = 0
        }
        questionGenerator()
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function numberToArithmetic(sign, num1, num2) {
    switch (sign) {
        case 0:
            return num1+num2
        case 1:
            return num1-num2
        case 2:
            return num1*num2
        case 3:
            return num1/num2
        default:
            return null
    }
}

function numberToSign(sign) {
    switch (sign) {
        case 0:
            return "+"
        case 1:
            return "-"
        case 2:
            return "x"
        case 3:
            return "÷"
        default:
            return null
    }
}

function questionGenerator() {
    let tmp1 = 0
    let tmp2 = 0
    let tmp3 = 0
    let index1 = 0
    let index2 = 0
    let index3 = 0
    let index4 = 0

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
        
        case 4:
            index2 = randomNumber(1, 3)

            tmp1 = randomNumber(0, 9).toString()+randomNumber(0, 9).toString()
            tmp2 = tmp1
            for (let i = 1; i < index2; i++) {
                tmp1 = tmp1+tmp2
            }
            index1 = tmp1

            question = index1+"÷"+index2
            correctAnswer = tmp2
            break;
        
        case 5:
            index2 = randomNumber(1, 3)

            tmp1 = randomNumber(0, 9).toString()+randomNumber(0, 9).toString()
            tmp2 = tmp1
            tmp3 = randomNumber(0, 9).toString()
            for (let i = 1; i < index2; i++) {
                tmp1 = tmp1+tmp2
            }
            index1 = tmp1+tmp3

            question = index1+"÷"+index2
            correctAnswer = tmp2+tmp3
            break;
        
        case 6:
            index1 = randomNumber(0, 9)

            index2 = randomNumber(0, 8)
            if (index2 >= index1) {
                index2++
            }

            question = index1+"-"+index2
            correctAnswer = index1+"-"+index2
            break;
        
        case 7:
            index1 = randomNumber(0, 9)

            index2 = randomNumber(0, 8)
            if (index2 >= index1) {
                index2++
            }

            tmp1 = randomNumber(0, 9)
            tmp2 = randomNumber(0, 9)
            index3 = tmp1.toString()+tmp2.toString()

            question = index1+"-"+index2+"+"+index3
            correctAnswer = index1+index3+"-"+index2
            break;
        
        case 8:
            index1 = randomNumber(0, 9)

            index2 = randomNumber(0, 9)

            question = index1+"+<span style='color: red'>"+index2+"</span>"
            correctAnswer = (index1+index2).toString()
            break;
        
        case 9:
            index1 = randomNumber(10, 50)

            index2 = randomNumber(0, 9)

            question = index1+"-<span style='color: red'>"+index2+"</span>"
            correctAnswer = (index1-index2).toString()
            break;
        
        case 10:
            index1 = randomNumber(10, 19)

            index2 = randomNumber(0, 8)
            if (index2 >= index1) {
                index2++
            }

            tmp1 = randomNumber(0, 2)
            index3 = randomNumber(1, 9)

            question = index1+"-"+index2+numberToSign(tmp1)+"<span style='color: red'>"+index3+"</span>"
            correctAnswer = numberToArithmetic(tmp1, index1, index3)+"-"+index2
            break;

        case 11:
            index1 = randomNumber(1, 10)

            index2 = randomNumber(index1+1, 20)

            
            index3 = randomNumber(100, 99999)

            question = index1+"-<span style='color: red'>"+index2+"</span>+"+index3
            correctAnswer = index3+(index1-index2).toString()
            break;
        
        case 12:
            index1 = randomNumber(1, 10)

            index2 = randomNumber(index1+1, 20)

            
            index3 = randomNumber(1, 9)

            question = index1+"-<span style='color: red'>"+index2+"</span>+"+index3
            correctAnswer = index3+(index1-index2).toString()
            break;
        
        case 13:
            index1 = randomNumber(0, 9)

            index2 = randomNumber(0, 8)
            if (index2 >= index1) {
                index2++
            }

            index3 = randomNumber(1, 9)

            question = index1+"-"+index2+"+<span style='color: skyblue'>"+index3+"</span>"
            correctAnswer = index1+"-"+index2+index3
            break;
        
        case 14:
            index1 = randomNumber(0, 3)

            index2 = randomNumber(4, 6)

            index3 = randomNumber(7, 9)

            question = index1+"-"+index2+"-"+index3
            correctAnswer = index1+"-"+index3+"-"+index2
            break;
        
        case 15:
            index1 = randomNumber(0, 2)

            index2 = randomNumber(3, 4)

            index3 = randomNumber(5, 7)

            index4 = randomNumber(8, 9)

            question = index1+"-"+index2+"-<span style='color: skyblue'>"+index3+"</span>-"+index4
            correctAnswer = index1+"-"+index4+"-"+index2+"-"+index3
            break;
        
        case 16:
            index1 = randomNumber(0, 2)

            index2 = randomNumber(3, 4)

            index3 = randomNumber(5, 7)

            index4 = randomNumber(8, 9)

            tmp1 = randomNumber(1, 3)
            switch (tmp1) {
                case 1:
                    correctAnswer = index1+"-"+index4+"-"+index2+"-"+index3
                    index1 = "<span style='color: red'>"+index1+"</span>"
                    break;
                case 2:
                    correctAnswer = "-"+index4+(index1-index2)+"-"+index3
                    index2 = "<span style='color: red'>"+index2+"</span>"
                    break;
                case 3:
                    correctAnswer = (index1-index4)+"-"+index2+"-"+index3
                    index4 = "<span style='color: red'>"+index4+"</span>"
                    break;
            }
            question = index1+"-"+index2+"-<span style='color: skyblue'>"+index3+"</span>-"+index4
            break;
        
        case 17:
            index1 = randomNumber(0, 5)

            index2 = randomNumber(8, 9)

            index3 = randomNumber(1, 2)
            if (index3 = 1) {
                index3 = index1
            } else {
                index3 = index2
            }

            index4 = randomNumber(6, 7)

            tmp1 = randomNumber(1, 2)
            tmp2 = randomNumber(1, 2)
            switch (tmp1) {
                case 1:
                    correctAnswer = "-"+index4+"-"+index3
                    index2 = index1
                    break;
                case 2:
                    correctAnswer = "-"+index2+"-"+index3
                    index4 = index1
                    break;
            }
            question = index1+"-"+index2+"-<span style='color: skyblue'>"+index3+"</span>-"+index4
            break;
        
        case 18:
            index1 = randomNumber(0, 9)

            index2 = randomNumber(0, 8)
            if (index2 >= index1) {
                index2++
            }

            tmp1 = randomNumber(1, 9)
            tmp2 = randomNumber(1, 9)
            index3 = "<span style='color: skyblue'>"+tmp1+"</span><span style='color: red'>"+tmp2+"</span>"

            question = index1+"-"+index2+"+"+index3
            correctAnswer = index1+"-"+(index2+tmp1*10+tmp2)
            break;

        case 19:
            index1 = randomNumber(0, 9)

            index2 = randomNumber(0, 8)
            if (index2 >= index1) {
                index2++
            }

            tmp1 = randomNumber(1, 9)
            tmp2 = randomNumber(1, 9)
            index3 = tmp1+"<span style='color: skyblue'>"+tmp2+"</span>"

            question = index1+"-"+index2+"+"+index3
            correctAnswer = "-"+index2+index1+tmp1+tmp2
            break;

        case 20:
            index1 = randomNumber(0, 9)

            index2 = randomNumber(0, 8)
            if (index2 >= index1) {
                index2++
            }

            tmp1 = randomNumber(1, 9)
            tmp2 = randomNumber(1, 9)
            index3 = "<span style='color: red'>"+tmp1+"</span><span style='color: skyblue'>"+tmp2+"</span>"

            question = index1+"-"+index2+"+"+index3
            correctAnswer = "-"+index2+(index1+tmp1*10+tmp2)
            break;

        case 21:
            winState = true
            document.getElementById("question").innerHTML = "You won!"
            document.getElementById("input").value = "You won!";
            document.getElementById("output").innerHTML = "[You won!]"
            break;
        
        default:
            document.getElementById("output").innerHTML = "[There was an error, please refresh]"
    }

    if (!winState) {
        document.getElementById("question").innerHTML = "What is "+question+"?"
        document.getElementById("input").value = "";
        document.getElementById("stage").innerHTML = "Stage: "+stage+"/20"
    }
}