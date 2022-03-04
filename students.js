const students = [
    { name: 'Hope', skill: ['javascript', 'html', 'css'] },
    { name: 'Michelle', skill: ['javascript', 'html', 'css', 'Php'] },
    { name: 'Micheck', skill: ['javascript', 'html', 'css', 'Php'] },
    { name: 'Gladys', skill: ['javascript', 'html', 'css', 'Php'] },
];

/* debugger
students.pop();
debugger
students.shift();
debugger
students.splice(1, 2);
debugger */


const addStudentBtn = document.querySelector('#addStudent'); // equevalent to getDocumentById
const table = document.getElementById('studentsList');
const tableBody = table.querySelector('tbody');

addStudentBtn.addEventListener('click', addStudent);
updateTable();

// generate the elements of the tbody
function updateTable() {
    let contentOfTableBody = '';
    for (let i = 0; i < students.length; i++) {
        console.log(i, students[i]);

        contentOfTableBody += `
    <tr>
        <td>` + students[i].name + `</td>
        <td>` + students[i].skill.join(', ') + `</td>
        <td> <button class="btn removeStudent">&times;</button> </td>
    </tr>`;
    }
    tableBody.innerHTML = contentOfTableBody;

    const removeButtons = document.querySelectorAll('.removeStudent');
    for (let i = 0; i < removeButtons.length; i++) {
        const removeBtn = removeButtons[i];
        removeBtn.addEventListener('click', (evt) => {
            students.splice(i, 1);
            // updateTable();
            const btn = evt.target;
            btn.closest('tr').remove();
        });
    }
}


function addStudent() {
    const studentName = prompt("Enter student name");
    const skills = prompt("Enter the student skill separated with comma");

    students.unshift({
        name: studentName,
        skill: skills.split(',') // Javascript, C#, Python
    });

    updateTable();
}
