// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    description: "Learn about Javascript Syntax",
    sections: [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function(sectionNum) {
        // find the correct section
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum === sectionNum);
        // increment enrolled
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
    },
    removeStudent: function(sectionNum) {
        // find the correct section
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum === sectionNum);
        // increment enrolled
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
    }
  };

aCourse.removeStudent(1);

// aCourse.sections[0].instructor //this can be used to find the instructor in the aCourse object

function info(course) {
    const name = course.name
    const code = course.code

    document.querySelector('#courseName').innerHTML = name;
    document.querySelector('#courseCode').innerHTML = code;
}

info(aCourse);

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
      );
      document.querySelector("#sections").innerHTML = html.join("");
};

renderSections(aCourse.sections);

// aCourse ["code"];
// aCourse.name;   //these are how you can call things from an object

