const nav = document.querySelector(".navbar");
fetch('./components/navbar.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
  })

const schedule = document.querySelector(".schedule");
fetch('./components/schedule.html')
  .then(res => res.text())
  .then(data => {
    schedule.innerHTML = data;
  })