const tasks = [
  { id: 1, done: true },
  { id: 2, done: true },
  { id: 3, done: false },
  { id: 4, done: true }
];

let allDone = true;

for (const task of tasks) {
  allDone = allDone && task.done;
}

console.log(allDone); // Output: false
