"use strict";

// Task 1 Goal: Change button color and text on click & change toggle status text

const toggleBtn = document.getElementById("toggle-btn");
const toggleStatusEl = document.getElementById("toggle-status");
// TODO: Add to enhance code: const toggleMsg = (condition, a, b) => (condition ? a : b);
toggleBtn.addEventListener("click", () => {
  const isActive = toggleBtn.classList.toggle("is-active");
  toggleBtn.textContent = isActive ? "active" : "toggle me";
  toggleStatusEl.textContent = isActive ? "active" : "inactive";
});

// TASK 2 GOAL: To write text into the form field, press the submit button and add the text to the list

// TASK 2 Second Goal: Reset Button will revert the list back to it's original state

// DOM Selectors for: list, button, form, input
const characterForm = document.getElementById("character-form");
const characterInput = document.getElementById("character-input");
const characterListEl = document.getElementById("character-list");
const resetBtn = document.getElementById("reset-btn");

// default character list that we can fall back to
const DEFAULT_CHARACTERS = ["Sauron", "Galadriel", "Fantastic Mr.Fox"];

// working copy of the list that we can manipulate
let characterList = [...DEFAULT_CHARACTERS];
// function to render the array to the DOM
function renderCharacterList() {
  characterListEl.innerHTML = "";
  characterList.forEach((character) => {
    const li = document.createElement("li");
    li.textContent = character;
    characterListEl.appendChild(li);
  });
}
// Event Listener for the form: Submit adds input information to the new list
characterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // get the info in the input field
  // test by logging it
  // trim space from front and end of the input value
  // don't render anything if the input is empty
  // if it's good, push to the working list
  // render the list with the new information
  // clear the input field
  // DECIDE if we want to maintain user focus on this input
});
// Event Listener to reset the list to the original

// run function that renders the list
renderCharacterList();
