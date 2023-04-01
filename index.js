const detailsBtns = document.querySelectorAll('.details-btn');
const popups = document.querySelectorAll('.details-popup');

for (let i = 0; i < detailsBtns.length; i++) {
  detailsBtns[i].addEventListener('click', function() {
    if (popups[i].style.display === "block") {
      popups[i].style.display = "none";
      detailsBtns[i].textContent = "View Details";
    } else {
      popups[i].style.display = "block";
      detailsBtns[i].textContent = "Close Details";
    }

    popups[i].addEventListener('transitionend', function() {
      if (popups[i].style.display === "none") {
        detailsBtns[i].textContent = "Close Details";
      }
    });
  });
}

const toggleMenu = () => document.body.classList.toggle("open");