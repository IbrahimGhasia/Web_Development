let input = prompt("What would you like to do?");

const todos = [];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, What is the new Todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the lsit!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, Enter an index to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`Ok, Deleted ${deleted[0]}`);
    } else {
      console.log("Um! Unkown Index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP!");
