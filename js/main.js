// ================================ hamburger menu animation ================================
const hamburgermenu = document.querySelector(".hamburgermenu");
const bars = document.querySelectorAll(".bars");
const navlist = document.querySelector(".navlist");
hamburgermenu.addEventListener("click", () => {
  hamburgermenu.classList.toggle("active");
  navlist.classList.toggle("showhidenavmenu");
});

// ================================ hide show the search bar ================================
const searchbloginputfield = document.getElementById("searchbloginputfield");
const searchblogicon = document.getElementById("searchblogicon");
searchblogicon.addEventListener("click", () => {
  searchbloginputfield.classList.toggle("hideshowsearchbar");
});

// ================================ blog comments form ================================
const blogcommentsform = document.querySelector(".blogcommentsform");
const inputname = document.getElementById("inputname");
const inputemail = document.getElementById("inputemail");
const inputblogcommenttextarea = document.getElementById(
  "inputblogcommenttextarea"
);
let validinputname = false;
let validinputemail = false;
let validinputblogtextarea = false;
inputname.addEventListener("blur", (e) => {
  let inputnamevalue = inputname.value;
  let regexname = /^([a-zA-Z]){3,15}$/;
  if (regexname.test(inputnamevalue)) {
    validinputname = true;
    inputname.classList.remove("blogforminputerror");
  } else {
    validinputname = false;
    inputname.classList.add("blogforminputerror");
  }
});
inputemail.addEventListener("blur", (e) => {
  let inputemailvalue = inputemail.value;
  let regexemail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){1,25}$/;
  if (regexemail.test(inputemailvalue)) {
    validinputemail = true;
    inputemail.classList.remove("blogforminputerror");
  } else {
    validinputemail = false;
    inputemail.classList.add("blogforminputerror");
  }
});
// if the validations are true then the form will be submitted otherwise not and the required input fields will show errors
blogcommentsform.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    validinputname == true &&
    validinputemail == true &&
    inputblogcommenttextarea
  ) {
    blogcommentsform.reset();
    blogcommentsform.submit();
  } else {
    blogcommentsform.reset();
  }
});
