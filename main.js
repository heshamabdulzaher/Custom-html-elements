// =============== Standard Input ==============
const standardInput = document.querySelector("#standardInput");
standardInput.addEventListener("focus", handleInputsAnimation);
standardInput.addEventListener("focusout", handleInputsAnimation);
function handleInputsAnimation(e) {
  if (e.type === "focus") {
    e.target.parentElement.classList.add("active");
  } else if (e.type === "focusout") {
    e.target.parentElement.classList.remove("active");
    if (e.target.value) {
      e.target.parentElement.classList.add("gotValue");
    } else {
      e.target.parentElement.classList.remove("gotValue");
    }
  }
}
// =============== Outline Input ==============
const outlineInput = document.querySelector("#outlineInput");
outlineInput.addEventListener("focus", handleInputsAnimation);
outlineInput.addEventListener("focusout", handleInputsAnimation);
function handleInputsAnimation(e) {
  if (e.type === "focus") {
    e.target.parentElement.classList.add("active");
  } else if (e.type === "focusout") {
    e.target.parentElement.classList.remove("active");
    if (e.target.value) {
      e.target.parentElement.classList.add("gotValue");
    } else {
      e.target.parentElement.classList.remove("gotValue");
    }
  }
}
