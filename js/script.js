document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.querySelector('#home h1');
    welcomeMessage.style.opacity = '0';
    welcomeMessage.style.transition = 'opacity 1.5s';

    setTimeout(function() {
        welcomeMessage.style.opacity = '1';
    }, 400);
});
document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.querySelector('#home h1');
    welcomeMessage.style.opacity = '0';
    welcomeMessage.style.transition = 'opacity 1.5s';

    const words = welcomeMessage.innerText.split(' ');

    welcomeMessage.innerHTML = '';

    words.forEach(function (word, index) {
        const span = document.createElement('span');
        span.innerHTML = word + ' ';
        span.style.opacity = '0';
        span.style.transition = 'opacity 2.8s ' + (index * 0.3) + 's';

        welcomeMessage.appendChild(span);

        setTimeout(function () {
            span.style.opacity = '1';
        }, 400);

    });
});


document.addEventListener('DOMContentLoaded', function() {
    const welcomeMessage = document.querySelector('#home h2');
    welcomeMessage.style.opacity = '0';
    welcomeMessage.style.transition = 'opacity 1.5s';

    const words = welcomeMessage.innerText.split(' ');

    welcomeMessage.innerHTML = '';

    words.forEach(function (word, index) {
        const span = document.createElement('span');
        span.innerHTML = word + ' ';
        span.style.opacity = '0';
        span.style.transition = 'opacity 2.8s ' + (index * 0.3) + 's';

        welcomeMessage.appendChild(span);
    });

    setTimeout(function() {
        welcomeMessage.style.opacity = '1';

        words.forEach(function (word, index) {
            const span = welcomeMessage.children[index];

            setTimeout(function () {
                span.style.opacity = '1';
            }, 400);
        });
    }, 1500); 
});



var githubImage = document.getElementById('GitHubImage');
var profileImage = document.getElementById('ProfileImage');
var linkedinImage = document.getElementById('LinkedinImage');

setTimeout(function() {
    githubImage.style.display = 'block';
    profileImage.style.display = 'block';
    linkedinImage.style.display = 'block';

    setTimeout(function() {
        githubImage.style.opacity = '1';
        profileImage.style.opacity = '1';
        linkedinImage.style.opacity = '1';
    }, 100);
}, 4800);



let zoomed = false;
let currentFontSize = 16;

function toggleZoom() {
    const body = document.body;
    zoomed = !zoomed;

    if (zoomed) {
        const zoomLevel = 1.5;
        currentFontSize *= zoomLevel;
    } else {
        currentFontSize = 16;
    }

    body.style.fontSize = `${currentFontSize}px`;
}


const darkModeToggle = document.querySelector('#darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', function () {
    body.classList.toggle('dark-mode');
});

$(document).ready(function () {
    $('#about').waypoint(function () {
        $('#about .container').addClass('appear');
    }, { offset: '50%' });


    $('#skills').waypoint(function () {
        $('#skills .container').addClass('appear');
    }, { offset: '50%' });

    $('#production').waypoint(function () {
        $('#production .container').addClass('appear');
    }, { offset: '50%' });

    $('#project').waypoint(function () {
        $('#project .container').addClass('appear');
    }, { offset: '50%' });


});
