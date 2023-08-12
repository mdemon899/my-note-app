// Calling Variables From DOM
let notes_container = document.querySelector(".notes_container");
let createBtn = document.querySelector("#createBtn");

// Updating Local Storage
function updateStorage() {
  localStorage.setItem("notes", notes_container.innerHTML);
}

// Showing Local Storage
function showStorage() {
  notes_container.innerHTML = localStorage.getItem("notes");
}
showStorage();

// Creating New Notes
createBtn.addEventListener("click", () => {
  // Adding P
  let newP = document.createElement("p");
  newP.setAttribute("contenteditable", "true");
  newP.classList.add("input_box");

  // Delete Button
  let deleteImg = document.createElement("img");
  deleteImg.src = "../IMG/delete.png";

  // Displaying
  notes_container.appendChild(newP).appendChild(deleteImg);
});

// Creating Delete Button Function
notes_container.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    let notes = document.querySelectorAll(".input_box");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateStorage();
      };
    });
  }
});
