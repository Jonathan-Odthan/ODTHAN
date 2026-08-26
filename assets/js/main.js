/* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    menuBtn.addEventListener("click", () => {

        mainNav.classList.toggle("show");

    });


    /* CLOSE MENU AFTER CLICK */

    document.querySelectorAll("#mainNav a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("show");

        });

    });


    /* =====================================================
       HEADER ON SCROLL
    ===================================================== */

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* =====================================================
       SCROLL TO TOP
    ===================================================== */

    const scrollTop = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    });


    scrollTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    document.getElementById("year").textContent =
        new Date().getFullYear();
