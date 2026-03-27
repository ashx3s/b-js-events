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

// default character list that we can fall back to

// working copy of the list that we can manipulate

// function to render the array to the DOM

// Event Listener for the form: Submit adds input information to the new list

// Event Listener to reset the list to the original

// run function that renders the list
