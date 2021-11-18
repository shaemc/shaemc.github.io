// main.js...this is the file that you added to the html through a script tag
import { qs, alertMessage } from "./utility.js";
import aCourse from "./course.js";
// now you can use those functions just like if they were declared locally.
alertMessage("I'm from the module!");

//modules.js
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, false);
  });
  
aCourse.init();