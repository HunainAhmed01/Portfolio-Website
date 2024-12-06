function openTab(tabId) {
    document.querySelectorAll('.tab-contents').forEach(content => content.classList.toggle('active-tab', content.id === tabId));
    document.querySelectorAll('.tab-links').forEach(link => link.classList.toggle('active-link', link.textContent.trim().toLowerCase() === tabId));
}

document.addEventListener('DOMContentLoaded', () => openTab('skills'));


var sidemen = document.getElementById("sidemenu");

function openmenu(){
    sidemen.style.right = "0";
}
function closemenu(){
    sidemen.style.right = "-200px";
}

// -------------------SKILLS BARS-------------------------------
const skillLevels = document.querySelectorAll('.skill-level');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const percent = entry.target.getAttribute('data-percent');
      entry.target.style.width = percent + '%';
    }
  });
});

skillLevels.forEach(skill => {
  observer.observe(skill);
});


