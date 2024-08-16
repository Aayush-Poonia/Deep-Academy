document.addEventListener('DOMContentLoaded', () => {
    console.log('School website is ready!');
});


document.addEventListener("DOMContentLoaded", () => {
    // Carousel functionality
    let currentIndex = 0;
    const events = document.querySelectorAll(".carousel .event");
    const totalEvents = events.length;

    document.querySelector(".carousel-button.next").addEventListener("click", () => {
        events[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % totalEvents;
        events[currentIndex].style.display = "block";
    });

    document.querySelector(".carousel-button.prev").addEventListener("click", () => {
        events[currentIndex].style.display = "none";
        currentIndex = (currentIndex - 1 + totalEvents) % totalEvents;
        events[currentIndex].style.display = "block";
    });

    // Collapsible content
    const collapsible = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    collapsible.addEventListener("click", () => {
        collapsible.classList.toggle("active");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.close');
    const modals = document.querySelectorAll('.modal');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});


// node js file

import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
