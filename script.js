// Smooth scrolling & Active Navbar Link Highlight
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});


// Resume Section btn click
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx)=>{
    btn.addEventListener('click',()=>{
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn=>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail=>{
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});
