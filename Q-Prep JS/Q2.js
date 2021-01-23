/* Q2. A school has following rules for grading system:

[0, 25) - F

[25, 45) - E

[45, 50) - D

[50, 60) - C

[60, 80) - B

[80, 100] - A


If the input is less than 0 or greater than 100 then it is considered invalid.


Note: "[“ or “]" brackets include the number when setting the interval whereas “(“ or “)” brackets do not. For example, [0, 25) means >=0 and <25.
*/

function getGrade(score) {
    if(score>=0 && score<25){
        grade = "F";
    }
    else if(score>=25 && score<45){
        grade="E";
    }
    else if(score>=45 && score<50){
        grade="D";
    }
    else if(score>=50 && score<60){
        grade="C";
    }
    else if(score>=60 && score<80){
        grade="B";
    }
    else if(score>=80 && score<=100){
        grade="A";
    }
    else{
        grade="Invalid"
    }
    return grade;
}