const schedule = document.querySelector(".schedule");
fetch('./components/schedule.html')
  .then(res => res.text())
  .then(data => {
    schedule.innerHTML = data;
  })
