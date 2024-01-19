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
const blogcards = document.getElementsByClassName("blogcards");
searchblogicon.addEventListener("click", () => {
  searchbloginputfield.classList.toggle("hideshowsearchbar");
});

// search bar functionality if the user's searched blog is available then it will show the specified blog otherwise it will set the container empty
searchbloginputfield.addEventListener("keyup", () => {
  let searchterm = searchbloginputfield.value.toLowerCase();
  let singleblogcard = Array.from(blogcards).forEach((singleblogcard) => {
    let blogcardtext = singleblogcard.textContent.toLowerCase();
    if (blogcardtext.includes(searchterm)) {
      singleblogcard.style.display = "flex";
    } else {
      singleblogcard.style.display = "none";
    }
  });
});

// ================================ blog comments form ================================
const blogcommentsform = document.querySelector(".blogcommentsform");
const inputname = document.getElementById("inputname");
const inputemail = document.getElementById("inputemail");
const inputblogcommentsfield = document.getElementById(
  "inputblogcommentsfield"
);
let validinputname = false;
let validinputemail = false;
let validinputblogtextarea = false;
inputname.addEventListener("blur", (e) => {
  let inputnamevalue = inputname.value;
  let regexname = /^([a-zA-Z]){3,25}$/;
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
    inputblogcommentsfield
  ) {
    // now all the validation are true so first it will store the user comments into localstorage then submit and reset the form
    let storenamevalue = inputname.value;
    let storeemailvalue = inputemail.value;
    let inputblogcommentsfieldvalue = inputblogcommentsfield.value;
    let postcommentsdatabase = new Array();
    postcommentsdatabase = JSON.parse(localStorage.getItem("postcomments"))
      ? JSON.parse(localStorage.getItem("postcomments"))
      : [];
    // bypass duplicate entries if the same email id user is trying to comment to the post then it can't submit the form and comment it post emailid must be unique
    if (
      postcommentsdatabase.some((duplicatevalues) => {
        return duplicatevalues.emailid == storeemailvalue;
      })
    ) {
      alert("duplicate data detected blog with email id already exists");
      blogcommentsform.reset();
    } else {
      let postcommentsentry = {
        name: storenamevalue,
        emailid: storeemailvalue,
        comments: inputblogcommentsfieldvalue,
      };
      postcommentsdatabase.push(postcommentsentry);
      let postcomments = localStorage.setItem(
        "postcomments",
        JSON.stringify(postcommentsdatabase)
      );
    }
    blogcommentsform.reset();
    blogcommentsform.submit();
  } else {
    blogcommentsform.reset();
  }
});
