// =========================================
// Rank Flow Digital Hubs
// Premium Script v2
// =========================================


// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
// =========================================
// Scroll Reveal Animation
// =========================================

const revealElements = document.querySelectorAll(
".service-card,.portfolio-card,.blog-card,.why-card,.testimonial-card,.stat-box,.about-image,.about-content"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {

        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((el) => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================================
// Counter Animation
// =========================================

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

function startCounter() {

    if (started) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const trigger = stats.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 120) {

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text.replace(/\D/g, ""));

            let count = 0;

            const speed = number / 80;

            const update = () => {

                count += speed;

                if (count < number) {

                    counter.innerText = Math.floor(count) + text.replace(/[0-9]/g, "");

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        });

        started = true;

    }

}

window.addEventListener("scroll", startCounter);

startCounter();


// =========================================
// Button Hover Effect
// =========================================

document.querySelectorAll(".btn-primary,.btn-secondary,.btn-nav").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-4px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "";

    });

});
// =========================================
// Mobile Menu (Future Ready)
// =========================================

const nav = document.querySelector("nav");

const menuBtn = document.createElement("div");

menuBtn.className = "menu-toggle";

menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

document.querySelector(".nav-container").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show-menu");

});


// =========================================
// Scroll To Top Button
// =========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.className = "scrollTop";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("showTop");

    } else {

        topBtn.classList.remove("showTop");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =========================================
// Current Year in Footer
// =========================================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${year} Rank Flow Digital Hubs. All Rights Reserved.`;

}


// =========================================
// Console Branding
// =========================================

console.log("%cRank Flow Digital Hubs", "color:#3B82F6;font-size:22px;font-weight:bold;");

console.log("%cProfessional SEO | Guest Posting | Link Building | Content Writing", "color:#94a3b8;font-size:14px;");