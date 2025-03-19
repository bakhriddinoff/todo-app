const inputValue = document.getElementById('input');
const list = document.getElementById('list');
const typing = document.getElementById('typing');
const allTasks = document.getElementById('allTasks');
const activeTasks = document.getElementById('activeTasks');
const completedTasks = document.getElementById('completedTasks');
const clearCompleted = document.getElementById('clearCompleted');
const theme = document.getElementById('theme');
const itemsLeft = document.getElementById('items-left');
const themeToggle = document.getElementById("themeToggle");
const background = document.getElementById('background');
const body = document.body;

let toDoes = [
    {
        task: 'Complete online JavaScript course',
        isCompleted: true
    },
    {
        task: 'Jog around the park 3x',
        isCompleted: false
    }
];
