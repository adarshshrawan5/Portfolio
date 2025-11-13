// Smooth scroll effect for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({

      behavior: "smooth"

    });

  });

});



// Optional: Show a message when clicking "Resume (Coming Soon)"

document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("click", function (e) {

    if (this.textContent.includes("Resume")) {

      e.preventDefault();

      alert("Resume download will be added soon!");

    }

  });

});