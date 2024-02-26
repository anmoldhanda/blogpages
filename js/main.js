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
