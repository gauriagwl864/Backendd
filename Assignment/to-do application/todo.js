const fs=require ("fs");
const path=require ("path");
const TODO_FILE =path.join(__dirname,"todos.json");
console.log(TODO_FILE);
//console.log(fs);

 function readTodos(){
    const data=fs.readFileSync(TODO_FILE,"utf-8");
    return JSON.parse(data);
 }
 function writeTodos(todos) {
  fs.writeFileSync(TODO_FILE,JSON.stringify(todos));
}

function addTodo(task) {
const todos =readTodos();

const newTodo = {
id:Date.now(),
task: task,
done:false
  };

  todos.push(newTodo);
writeTodos(todos);

console.log("✅ Todo added:", task);
}

function listTodos() {
const todos =readTodos();

if (todos.length ===0) {
console.log("📭 No todos found!");
return;
  }

  todos.forEach((todo, index) => {
const status = todo.done ?"✅" :"❌";
console.log(`${index + 1}.${status}${todo.task}`);
  });
}

