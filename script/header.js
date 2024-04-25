const nav = document.querySelector(".navbar");
fetch('./components/navbar.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
  })