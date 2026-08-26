




    /* =========================
       MENU MOBILE
    ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    menuBtn.addEventListener("click", function () {

        mainNav.classList.toggle("show");

    });


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            alert("Veuillez remplir tous les champs.");

            return;
        }


        const emailSubject =
            encodeURIComponent(
                "ODTHAN - " + subject
            );


        const emailBody =
            encodeURIComponent(
                "Bonjour ODTHAN,\n\n" +

                "Nom : " + name + "\n" +

                "Email : " + email + "\n\n" +

                "Sujet : " + subject + "\n\n" +

                "Message :\n" +
                message +

                "\n\n----------------------\n" +

                "Message envoyé depuis le site ODTHAN."
            );


        const mailto =
            "mailto:odthanempire@gmail.com" +
            "?subject=" + emailSubject +
            "&body=" + emailBody;


        window.location.href = mailto;

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    document.getElementById("year").textContent =
        new Date().getFullYear();


    /* =========================
       CLOSE MOBILE MENU
       AFTER CLICK
    ========================= */

    document.querySelectorAll("#mainNav a").forEach(function(link) {

        link.addEventListener("click", function() {

            mainNav.classList.remove("show");

        });

    });
