

function calculateCurrentGrade(){
    document.getElementById("error").innerHTML =  "";
    var hwW = parseInt(document.getElementById("hwWeight").value);
    var qW = parseInt(document.getElementById("qWeight").value);
    var tW = parseInt(document.getElementById("tWeight").value);
    var mW = parseInt(document.getElementById("mWeight").value);
    var fW = parseInt(document.getElementById("fWeight").value);
    var weights = (hwW + qW +tW + mW + fW)/ 100;
    if(weights > 1){
         document.getElementById("error").innerHTML = "ERROR, the weights need to add up to 100.";
    }
    if(weights < 1){
        document.getElementById("error").innerHTML = "ERROR, the weights need to add up to 100.";
    }
    var hwGrade = Math.round(avg(convertArrayStringToNumber(document.getElementById("homework").value)));
    console.log(hwGrade);
    document.getElementById("avgHw").innerHTML = "Your total homework grade is " +  hwGrade + "%";
    colorGrade(document.getElementById("avgHw"), hwGrade);
    var quizGrade = Math.round(avg(convertArrayStringToNumber(document.getElementById("quiz").value)));
    console.log(quizGrade);
    document.getElementById("avgQuiz").innerHTML = "Your total quiz grade is " + quizGrade + "%";
    colorGrade(document.getElementById("avgQuiz"), quizGrade);
    var testGrade = Math.round(avg(convertArrayStringToNumber(document.getElementById("test").value)));
    console.log(testGrade);
    document.getElementById("avgTest").innerHTML = "Your total test grade is " + testGrade + "%";
    colorGrade(document.getElementById("avgTest"), testGrade);
    var midtermGrade = Math.round(avg(convertArrayStringToNumber(document.getElementById("midterm").value)));
    console.log(midtermGrade);
    document.getElementById("avgMidterm").innerHTML = "Your total midterm grade is " + midtermGrade + "%";
    colorGrade(document.getElementById("avgMidterm"), midtermGrade);
    var hw = (hwGrade * hwW) / 100;
    var quiz = (quizGrade * qW) / 100;
    var test = (testGrade * tW) / 100;
    var midterm = (midtermGrade * mW) / 100;
    var currentGrade = Math.round(100 * ((hw + quiz + test + midterm) / (100 - fW)));
    console.log(currentGrade);
    document.getElementById("totalGrade").innerHTML = "Your current grade is a " + currentGrade + "%";
    colorGrade(document.getElementById("totalGrade"), currentGrade);
    calculateGradeNeeded(currentGrade);
}

function calculateGradeNeeded(g){
     var x = (1-((document.getElementById("fWeight").value)/100)) * (g/100);
     var y = ((document.getElementById("dGrade").value)/100) - x;
     var finalGradeNeeded = Math.round((y / ((document.getElementById("fWeight").value)/100)) * 100);
     console.log(finalGradeNeeded);
    if(finalGradeNeeded >= 100){
        return document.getElementById("gradeNeeded").innerHTML = "You need a "  +  finalGradeNeeded  +  "% on the final to get your desired grade. Better luck next semester!";
    }
     document.getElementById("gradeNeeded").innerHTML = "You need a "  +  finalGradeNeeded  +  "% on the final to get your desired grade.";
}

function convertArrayStringToNumber(string){
    var array = string.split(",");
    for(var a = 0; a < array.length; a++){
        if(isNaN(array[a]) == true){
            return document.getElementById("error").innerHTML= "ERROR, it seems you have entered an invalid character.";
        }
    }
    for(var i = 0; i < array.length; i++){
        array[i] = parseInt(array[i]);
    }
    return array;
}

function avg(array){
    var average = 0;

    for(var i=0; i < array.length; i++){
        average += array[i];
    }
    return (average/array.length);
}

function colorGrade(x, grade){
    if(grade >= 90){
        x.style.background = "Green";
    }
    if(grade >= 80 && grade < 90){
        x.style.background = "GreenYellow";
    }
    if(grade >= 70 && grade < 80){
        x.style.background = "Yellow";
    }
    if(grade >= 60 && grade < 70){
        x.style.background = "Tomato";
    }
    if(grade >= 50 && grade < 60){
        x.style.background = "Red"
    }
    if(grade <= 50){
        x.style.background = "Red"
    }
}




