const taskbtn = document.getElementById('taskbtn');
taskbtn.addEventListener('click', addTask);

function addTask(){
    if(!document.getElementById('todoInput')){

        var inputBox = document.createElement('input');
        inputBox.type = 'text';
        inputBox.id = 'todoInput';

        var submitbtn = document.createElement('button');
        submitbtn.innerText = "Submit";
        submitbtn.id = 'submitBtn';

        document.getElementById('inputContainer').appendChild(inputBox);
        document.getElementById('inputContainer').appendChild(submitbtn);

        submitbtn.addEventListener('click', function(){
            var inputVal = inputBox.value().trim();
            if(inputVal !== ''){
                const listItem = document.createElement('li');
                listItem.innerText = inputVal;
                document.getElementById('todolist').appendChild(listItem);
                document.getElementById('inputContainer').innerHTML = '';
            }
        });
    }

}