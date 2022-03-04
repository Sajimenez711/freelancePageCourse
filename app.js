import ('./cssMain.css');
console.log('El app');
const taskForm = document.getElementById('taskForm');
const pendingTasks = document.getElementById('pendingTasks');
const tasksOnProgress = document.getElementById('tasksOnProgress');
const tasksCompleted = document.getElementById('tasksCompleted');
const taskInput = document.getElementById('input');
const taskLimit = 5;
const idGenerator = () => {
    return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, (c) => {  
        const r = Math.floor(Math.random() * 16);  
        return r.toString(16); 
    })
}
let pendingTasksList  = [{
    id: 1,
    text: 'Walk out the dog',
}]
let tasksOnProgressList = [{
    id: 2,
    text: 'Practice Js vanilla',
}]
let tasksCompletedList = [{
    id: 3,
    text: 'Practice dnd accent',
    state: 'completed',
}]


const tasksHandler = (state) => {
    console.log(pendingTasks);
    console.log(pendingTasksList);

}

const buttonCreator = (typeOfTask, id) => {
    const greenButton = document.createElement("button");
    greenButton.id = `${id}-greenButton`;
    greenButton.className = 'Start-complete-task-button';
    const redButton = document.createElement("button");
    redButton.id = `${id}-redButton`;
    redButton.className = 'Pause-delete-task-button';
    switch(typeOfTask) {
        case 'created' :
        greenButton.innerText= 'Start';
        greenButton.addEventListener('click', e => {
            e.preventDefault();
            const startedTask = pendingTasksList.filter(task => task.id === id);
            tasksOnProgressList.push(startedTask);
            var node = document.createElement("li");
            var textnode = document.createTextNode('fghj');
            node.appendChild(textnode);
            const [startButton, deleteButton] = buttonCreator('inProgress', id );
            node.appendChild(startButton);
            node.appendChild(deleteButton);
            list.appendChild(node);
        });
        redButton.innerText= 'Delete';
        greenButton.addEventListener('click', e => {
            e.preventDefault();
        });
        return [greenButton,redButton];

        case 'inProgress':
            greenButton.innerText= 'Completed';
            redButton.innerText= 'Pause';
            break;
        default:
            console.log('Deafult');
            break;
    }

}
const taskMaker = (task, listName, list) => {
    const id = idGenerator();
    listName.push({ id, text: task});
    var node = document.createElement("li");
    var textnode = document.createTextNode(task);
    node.appendChild(textnode);
    const [startButton, deleteButton] = buttonCreator('created', id );
    node.appendChild(startButton);
    node.appendChild(deleteButton);
    list.appendChild(node);
}

taskForm.addEventListener('submit', e => {
    e.preventDefault();
    console.log('hi')
    taskMaker(taskInput.value, pendingTasksList, pendingTasks);
    taskInput.value= ''
})