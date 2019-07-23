let rootNode = document.getElementById('root');


//first task
let addNewActionButton = document.querySelector('.addNewAction');
addNewActionButton.addEventListener('input', function (event) {
    let value = event.target.value;
    let plus = document.getElementById('plus');
    if (value && value.length > 0) {
        plus.disabled = false;
    } else {
        plus.disabled = true;

    }
});
document.getElementById('plus').addEventListener('click', function (event) {
    event.preventDefault();
    let value = event.target.closest('#addAction').querySelector('.addNewAction').value;
    if (value && value.length > 0) {
        let new_point = document.querySelector('.new_point');
        let clone = new_point.cloneNode(true);
        document.querySelector('.checkbox').appendChild(clone);
        clone.querySelector('.point_content').innerHTML = value;
        clone.style.display = 'block';
        clone.querySelector('.check').addEventListener('change', checkboxEventListener);
        clone.querySelector('.edit').addEventListener('click', editButton);
        clone.querySelector('.save').addEventListener('click', saveButton);
        clone.querySelector('.delete').addEventListener('click', deleteButton);
        checkLength(10);
    }
});

//second task

let checkboxes = document.querySelectorAll('.check');
for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', checkboxEventListener);
}

function checkboxEventListener(event) {
    if (event.target.checked) {
        event.target.disabled = true;
    }
}

//third task
let edit = document.querySelectorAll('.edit');

for (let i = 0; i < edit.length; i++) {
    edit[i].addEventListener('click', editButton);
}

function editButton(event) {
    let parent = event.target.parentNode;
    parent.style.display = 'none';
    parent.parentNode.querySelector('.editor_wrapper').style.display = 'flex';
}


let save = document.querySelectorAll('.save');
for (let i = 0; i < save.length; i++) {
    save[i].addEventListener('click', saveButton);
}

function saveButton(event) {

    let content = event.target.closest('.editor_wrapper').querySelector('.field_editor').value;
    if (content && content.length > 0) {
        event.target.closest('.point').querySelector('.point_content').innerHTML = content;
        event.target.parentNode.style.display = 'none';
        event.target.closest('.point').querySelector('.label').style.display = 'block';
    }
}


//task 4
let del = document.querySelectorAll('.delete');
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click', deleteButton);
}

function deleteButton(event) {
    let item = event.target.parentNode.parentNode;
    item.parentNode.removeChild(item);
}


//task 6+7
function checkLength(x) {
    console.log(document.querySelector('.checkbox').childElementCount);
    if (document.querySelector('.checkbox').childElementCount >= x) {
        document.getElementById('plus').disabled = true;
        document.querySelector('.addNewAction').disabled = true;
        document.querySelector('h2').style.display = 'block';
    }
}