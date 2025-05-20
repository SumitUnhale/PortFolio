document.addEventListener('DOMContentLoaded', (event) => {
    const textArray = [
        "Full Stack Developer    ",
        "Computer Science Student  ",
        "A Web Developer           "
    ];
    let currentIndex = 0;
    const textElement = document.getElementById('changingText');

    setInterval(() => {
        textElement.classList.add('hide');
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % textArray.length;
            console.log(currentIndex);
            textElement.textContent = textArray[currentIndex];
            textElement.classList.remove('hide');
        }, 1000);
    }, 3000);

    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hidden');
        } else {
            navbar.classList.remove('hidden');
        }

        lastScrollTop = scrollTop;
    });

    const eduBoxes = document.querySelectorAll(".edu-box");

    function checkVisibility() {
        eduBoxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const boxBottom = box.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 50 && boxBottom > 50) {
                box.classList.add("active");
            } else {
                box.classList.remove("active");
            }
        });
    }
    
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    const menuLinks = document.querySelectorAll(".nav-link");
    const navColl = document.getElementById("ftco-nav");

    menuLinks.forEach((link) => {
        link.addEventListener("click", function() {
            const bsCollapse = bootstrap.Collapse.getInstance(navColl);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        })
    })
    
    

});