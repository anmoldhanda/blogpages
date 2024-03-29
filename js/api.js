// ================================ news api ================================
function technewsapi() {
  // const apikey = "d78bc78661f64e2ca8be27e4d918e917";
  // const apicountry = "in";
  // const apicategory = "technology";
  // const apiurl = `https://newsapi.org/v2/top-headlines?country=${apicountry}&category=${apicategory}&apiKey=${apikey}`;
  let blogscontainer = document.querySelector(".blogscontainer");
  let fetchapi = fetch(apiurl);
  fetchapi
    .then((response) => {
      // ================================ printing the response in json format from the news api ================================
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      let allarticles = data.articles;
      // console.log(allarticles);
      let eacharticletext = "";
      for (let eacharticle in allarticles) {
        // console.log(allarticles[eacharticle]);
        if (
          allarticles[eacharticle].urlToImage &&
          allarticles[eacharticle].author !== null
        ) {
          // if the api data is containing the particular data's image with author name is not equal to null then it will only show the data otherwise not
          eacharticle = `<div class="blogcards">
            <div class="blogphotobox">
              <img
                src="${allarticles[eacharticle].urlToImage}"
                alt="blog photo"
                class="blogphoto"
              />
            </div>
            <div class="blogdetails">
              <div class="blogiconsdetails">
                <div class="singleblogicon">
                  <span class="blogicontext"
                    ><i class="fa fa-user"></i> ${allarticles[eacharticle].author}</span
                  >
                </div>
                <div class="singleblogicon">
                  <span class="blogicontext"
                    ><i class="fa-solid fa-calendar-days"></i> ${allarticles[eacharticle].publishedAt}</span
                  >
                </div>
                <!-- <div class="singleblogicon">
                <span class="blogicontext"
                  ><i class="fa fa-comment"></i> 0 Comments</span
                >
              </div> -->
              </div>
              <div class="blogcontent">
                <a href="${allarticles[eacharticle].url}"
                  ><h2 class="blogheadline">${allarticles[eacharticle].title}</h2></a
                >
                <p class="blogdescription">${allarticles[eacharticle].description}</p>
                <a href="${allarticles[eacharticle].url}"
                  ><button class="readmorebtn">read more</button></a
                >
              </div>
            </div>
          </div>`;
          eacharticletext += eacharticle;
        }
      }
      blogscontainer.innerHTML = eacharticletext;
      // console.log(data);
    });
}
// technewsapi();
