const nav = document.querySelector(".navbar");
fetch('./components/navbar.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data;
  })
document.querySelector(".navbar").style.position = 'relative';


const allStar = document.querySelectorAll('.rating .star')

allStar.forEach((item, idx)=> {
    item.addEventListener('click', function(){
        allStar.forEach(i=>{
            i.classList.replace('bxs-star', 'bx-star')
        })
        for(let i=0; i<allStar.length; i++){
            if(i <= idx){
                allStar[i].classList.replace('bx-star', 'bxs-star')
            }
            
        }
    })
})