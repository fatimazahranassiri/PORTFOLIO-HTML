$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio FATIMA ZAHRA";
            $("#favicon").attr("href", "/assets/images/hero2.2.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });


// fetch projects start
function getProjects() {
    return fetch("./PORTFOLIO-HTML/projects/projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";

    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
            <div class="box tilt" style="width: 380px; margin: 1rem">
                <img draggable="false" src="../assets/images/projects/${project.image}.png" alt="project" />
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                    <div class="desc">
                        <p>${project.desc}</p>
                        <div class="btns">
                            <a href="javascript:void(0)" class="btn view-btn" data-media="../assets/images/projects/${project.image}.png"><i class="fas fa-eye"></i> View</a>
                            <a href="#" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    });

    projectsContainer.innerHTML = projectsHTML;
    

    // Now, attach the event listener for the modal after the content has been loaded
    document.querySelectorAll(".view-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const mediaUrl = this.getAttribute("data-media");

            // Show image or video in modal
            const modalContent = document.getElementById("modalContent");
            if (mediaUrl.endsWith(".mp4") || mediaUrl.includes("youtube")) {
                modalContent.innerHTML = `<video controls class="w-full h-full"><source src="${mediaUrl}" type="video/mp4"></video>`;
            } else {
                modalContent.innerHTML = `<img src="${mediaUrl}" alt="Project Image">`;
            }

            const modal = document.getElementById("projectModal");
            modal.style.display = "flex"; // Show modal
            
        });
    });

    // Handle closing the modal
    const modal = document.getElementById("projectModal");
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
    });

    // Close the modal if user clicks outside of the modal content
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal
        }
    });

    // Isotope filter functionality (this is unrelated to modal, so it remains unchanged)
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // Filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}


getProjects().then(data => {
    showProjects(data);
})
// fetch projects end

// Start of Tawk.to Live Chat
// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// End of Tawk.to Live Chat

// disable developer mode
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }

// document.querySelector("#zk4fbp8v3e381742336433653").classList.remove("widget-visible");
document.querySelector(".widget-visible").classList.remove("widget-visible");




