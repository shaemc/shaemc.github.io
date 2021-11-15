const myArray = ["one", "two", "three"];

function createHTMLString(string) {
    return `<li>${string}</li>`;
}
const htmlStrings = myArray.map(createHTMLString);
const myList = document.querySelector('#myList');

myList.innerHTML = htmlStrings.join("");


const grades = ['A', 'B', 'C', 'D'];

function gradePoints(grade) {
    let points = 0;
    if (grade === 'A'){
        points = 4;
    }
    else if (grade === 'B'){
        points = 3;
    }
    else if (grade === 'C'){
        points = 2;
    }
    else if (grade === 'D'){
        points = 1;
    }
    else {
        points = 0;
    }
    return points;
}

const myGrades = document.querySelector('#myGrades');
myGrades.innerHTML = grades.map(gradePoints);