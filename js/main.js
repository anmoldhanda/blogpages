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
const blogformerror = document.getElementById("blogformerror");
let validinputname = false;
let validinputemail = false;
let validinputblogtextarea = false;
inputname.addEventListener("blur", (e) => {
  let inputnamevalue = inputname.value;
  let regexname = /^([a-zA-Z]\s*){3,25}$/;
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
    // now all the validation are true so first it will store the user comments into localstorage in encrypted format then submit and reset the form
    let storenamevalue = btoa(inputname.value);
    let storeemailvalue = btoa(inputemail.value);
    let inputblogcommentsfieldvalue = btoa(inputblogcommentsfield.value);
    // let postcommentsdatabase = new Array();
    // getting the localstorage's data as encrypted format beacause we aren't printing it anywehren if need to print then use atob("pass localstorage's key as string")
    let postcommentsdatabase = JSON.parse(
      localStorage.getItem("cG9zdGNvbW1lbnRz")
    )
      ? JSON.parse(localStorage.getItem("cG9zdGNvbW1lbnRz"))
      : [];
    // bypass duplicate entries if the same email id user is trying to comment to the post then it can't submit the form and comment it post emailid must be unique
    if (
      postcommentsdatabase.some((duplicatevalues) => {
        return duplicatevalues.emailid == storeemailvalue;
      })
    ) {
      blogcommentsform.reset();
      blogformerror.style.display = "block";
    } else {
      let postcommentsentry = {
        name: storenamevalue,
        emailid: storeemailvalue,
        comments: inputblogcommentsfieldvalue,
      };
      postcommentsdatabase.push(postcommentsentry);
      // ============================== encrypted the localstorage's key ==============================
      let postcomments = localStorage.setItem(
        btoa("postcomments"),
        JSON.stringify(postcommentsdatabase)
      );
      blogcommentsform.submit();
      blogcommentsform.reset();
      location.href = "index.html";
    }
  } else {
    blogformerror.style.display = "none";
    blogcommentsform.reset();
  }
});
