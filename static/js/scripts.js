function enableSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    enableSmoothScrolling();
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    function enableDarkMode() {
        successMessage.classList.add("text-white");
    }

    function disableDarkMode() {
        successMessage.classList.remove("text-white");
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        fetch("/", {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                successMessage.style.display = "block";
                form.reset();
            } else {
                console.error("Error:", data.error_message);
            }
        })
        .catch((error) => {
            console.error("Fetch Error:", error);
        });
    });

    if (localStorage.getItem("dark-mode") === "enabled") {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon) => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.5)";
        });

        icon.addEventListener("mouseout", () => {
            icon.style.transform = "scale(1)";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const skillsSection = document.getElementById("skills");
    const floatingContactForm = document.querySelector(".floating-contact-form");
    const formSection = document.getElementById("form-container")
    const masthead = document.getElementsByClassName('masthead')[0];
    const contact = document.getElementById("contact-me-bruh");
    const submitButton = document.getElementById("submitButton");
    const readMore = document.getElementsByClassName("read-more");

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        enableDarkMode();
    }

    darkModeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");
        skillsSection.classList.add("dark-mode");
        formSection.classList.add("dark-mode");
        masthead.classList.add('dark-mode');
        contact.classList.add('dark-mode');
        floatingContactForm.classList.add('dark-mode');
        submitButton.classList.add('dark-mode');
        readMore.forEach ((readButton) => {
          readButton.target.classList.add('dark-mode')
        });
        readMore.classList.add('dark-mode');
        localStorage.setItem("dark-mode", "enabled");
    }

    function disableDarkMode() {
        body.classList.remove("dark-mode");
        skillsSection.classList.remove("dark-mode");
        formSection.classList.remove("dark-mode");
        masthead.classList.remove('dark-mode');
        masthead.classList.remove('dark-mode');
        contact.classList.remove('dark-mode');
        floatingContactForm.classList.remove('dark-mode');
        submitButton.classList.remove('dark-mode');
        readMore.forEach ((readButton) => {
          readButton.target.classList.remove('dark-mode')
        });
        localStorage.setItem("dark-mode", "disabled");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver( (entries) => {
        entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
            }
        })

    });

    const rowElements = document.querySelectorAll('.animate');
    const leftElements = document.querySelectorAll('.left');
    const rightElements = document.querySelectorAll('.right');
    rowElements.forEach((el) => observer.observe(el));
    leftElements.forEach((el) => observer.observe(el));
    rightElements.forEach((el) => observer.observe(el));
});

