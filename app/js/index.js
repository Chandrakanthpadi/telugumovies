const search = document.getElementById("search");
const list = document.getElementsByTagName("a");
const error = document.getElementById("error");
// var movies = Array.prototype.slice.call(list);
// console.log(list[0].lastElementChild.textContent);

search.addEventListener("keyup", (e) => {
  let count = 0;
  const term = e.target.value.toLowerCase();
  Array.from(list).forEach((movie) => {
    if (movie.lastElementChild.textContent.toLowerCase().indexOf(term) == -1) {
      movie.style.display = "none";
    } else {
      count++;
      movie.style.display = "flex";
    }
  });
  count ? (error.style.display = "none") : (error.style.display = "block");
});
