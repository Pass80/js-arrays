const textInput = document.getElementById('name');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');
const list = document.getElementById('list');

const listOfStudent = [];

const showList = () => {
    listOfStudent.forEach((student) => {
        list.innerHTML += `<li>${student}</li>`;
    });
};

const addName = () => {
    if (textInput.value.trim() != '') {
        list.innerHTML = '';
        listOfStudent.push(textInput.value);
        showList();
        textInput.value = '';
    } else return;
};

const removeName = () => {
    list.innerHTML = '';
    listOfStudent.pop();
    showList();
    textInput.value = '';
};
