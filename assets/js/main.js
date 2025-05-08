$(document).ready(function(){
    $(window).scroll(function(){
        var height = $(window).scrollTop();
        if (height>100) {
            $("#navBar").addClass("shadow navbar-blur");
        } else {
            $("#navBar").removeClass("shadow navbar-blur");
        }
    });
    $("#navBar").on("show.bs.collapse",function(){
        $(this).addClass("shadow navbar-blur");
        $("#navIcon").html('<i class="fa-solid fa-xmark"></i>');
    });
    $(window).on("load",function(){
        $("#preLoader").fadeOut();
    });
    $("#navBar").on("hide.bs.collapse",function(){
        var height = $(window).scrollTop();
        if(height<250) $(this).removeClass("shadow navbar-blur")
        $("#navIcon").html('<i class="fa-solid fa-bars-staggered"></i>');
    });
    $('#contact_form').on('submit',function(e){
        e.preventDefault();
        var form = $(this);
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcE02wjAAAAAD0K2lsdu5hq0KmsfUhGuzQKKrRO', {action: 'submit'}).then(function(token) {
                $("#contact_form_submit").addClass("disabled");
                $("#contact_form_submit").html("Sending...");
                var url = form.attr('action');
                $.ajax({
                    method: 'POST',
                    url: url,
                    data: form.serialize()+"&rctoken="+token,
                    dataType: 'json',
                    success: function(data) {
                        if (data.status=="success") {var class_name = "success"}
                        else if (data.status=="error") {var class_name = "danger"}
                        else {var class_name = "warning"}
                        $("#contact_form_status").html("<p class='alert alert-"+class_name+"'>"+data.message+"</p>");
                        $("#contact_form_submit").removeClass("disabled");
                        $("#contact_form_submit").html("Send");
                    },
                    error: function() {
                        $("#contact_form_status").html("<p class='alert alert-danger'>There was an error! Please try again!</p>");
                        $("#contact_form_submit").removeClass("disabled");
                        $("#contact_form_submit").html("Send");
                    }
                });
            });
        });
    });
    
});

// Open modal with animation
function openImageModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = src;
    modal.style.display = "flex";
    modal.classList.remove("fade-out");
    modal.classList.add("fade-in");
}

// Close modal with animation
function closeImageModal() {
    const modal = document.getElementById("imageModal");

    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");

    // Wait for animation to finish before hiding the modal
    setTimeout(() => {
        modal.style.display = "none";
    }, 400);
}

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  
    // Fade in animation on scroll
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    const elementsToAnimate = document.querySelectorAll(".fade-in, .slide-up");
    elementsToAnimate.forEach((el) => observer.observe(el));
  
    // Highlight navbar links on scroll
    const sections = document.querySelectorAll("section");
    const navbarLinks = document.querySelectorAll(".nav-link");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
  
      navbarLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );
  
    // Observe elements with fade-left and fade-right classes
    const elementsToAnimate = document.querySelectorAll(".fade-left, .fade-right");
    elementsToAnimate.forEach((el) => observer.observe(el));
  });



  document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    // Check and apply the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.toggle("light-theme", savedTheme === "light");
        themeIcon.className = savedTheme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    // Toggle theme on button click
    themeToggleButton.addEventListener("click", () => {
        const isLightTheme = body.classList.toggle("light-theme");
        themeIcon.className = isLightTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";

        // Save the user's theme preference in localStorage
        localStorage.setItem("theme", isLightTheme ? "light" : "dark");
    });
});



  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navBar");
    const isDesktop = window.innerWidth > 768;

    if (isDesktop) {
      const navbarOffsetTop = navbar.offsetTop;
      if (window.scrollY >= navbarOffsetTop) {
        navbar.classList.add("nav-fixed");
      } else {
        navbar.classList.remove("nav-fixed");
      }
    }
  });

  // Theme toggle working
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = document.getElementById("theme-icon");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  });