document.addEventListener('DOMContentLoaded', function () {
  const el = document.querySelector('#heroCarousel');
  if (el) {
    new bootstrap.Carousel(el, {
      interval: 3000,  
      ride: 'carousel',
      wrap: true,       
      pause: false     
    });
  }
});



const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 992) {
    document.querySelectorAll('.navbar .nav-item.dropdown').forEach(function (everyitem) {
      everyitem.addEventListener('mouseover', function () {
        let el_link = this.querySelector('a[data-bs-toggle]');
        if (el_link != null) {
          let nextEl = el_link.nextElementSibling;
          if (nextEl) {
            nextEl.classList.add('show');
          }
        }
      });
      everyitem.addEventListener('mouseleave', function () {
        let el_link = this.querySelector('a[data-bs-toggle]');
        if (el_link != null) {
          let nextEl = el_link.nextElementSibling;
          if (nextEl) {
            nextEl.classList.remove('show');
          }
        }
      });
    });
  }
});



const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(tab => tab.classList.remove("active"));

  
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

