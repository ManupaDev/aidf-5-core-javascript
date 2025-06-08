/*
let r = 4
const pi = 3.14

const circumference = 2 * pi * r
console.log(circumference)
*/

// const a = 2 + 2 + 2 + 2; //2 * 4

// let total = 0;
// for (let i = 0; i < 4; i = i + 1) {
//   total = total + 2;
// }
// console.log(total);

// let total = 0
// let i = 0
// while (i < 4) {
//   total = total + 2
//   i = i + 1
// }
// console.log(total)

// let num = 0;
// while (num < 10) {
//   num = Number(prompt("Enter a number: "));
//   console.log(num);
// }

// function greet(name) {
//   console.log(this);
// }
// greet("Manupa");

// const greet = (name) => {
//   console.log(this);
// };

// greet("Manupa");

// const add = (a, b) => {
//   return a + b;
// };

// const result = add(1, 2);
// console.log(result);

// let a = 5
// a = 6

// const manupa = {
//   name: "Manupa",
//   age: 20,
//   city: "Colombo",

//   greet: () => {
//     console.log("Hello there! My name is " + this.name + "!");
//   },
// };

// manupa.greet();

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const twiceNums = nums.map((num) => {
//   return num * 2;
// });

// console.log(twiceNums);

// const oddNums = nums.filter((num) => {
//   return num % 2 !== 0;
// });
// const evenNums = nums.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(nums);
// console.log(oddNums);
// console.log(evenNums);

// const btn = document.querySelector(".btn");
// btn.addEventListener("mouseover", () => {
//   console.log("Button hovered");
// });

const todoInput = document.querySelector(".todo__input");
const todoCreateButton = document.querySelector(".todo__create__button");
const todoContainer = document.querySelector(".todo__container");

const allTodoItemText = [];

todoCreateButton.addEventListener("click", () => {
  const todoItemText = todoInput.value;
  todoInput.value = "";
  if (!todoItemText) {
    return;
  }
  allTodoItemText.push(todoItemText);
  const allTodoItemHtmls = allTodoItemText.map((text) => {
    return `<div class="todo__item">
          <div class="todo__item__left">
            <input type="checkbox" id="completed" name="completed" />
            <span>${text}</span>
          </div>
          <div class="todo__item__right">
            <svg
              class="todo__delete__button"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </div>
        </div>`;
  });

  todoContainer.innerHTML = allTodoItemHtmls.join(" ");
});
