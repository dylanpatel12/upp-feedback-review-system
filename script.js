$(document).ready(function () {
    // Background slider
    (function changeBg() {
        var img_array = [
            "https://images.squarespace-cdn.com/content/v1/66cf0abe069efa03ec21da90/1724844740203-UW0ZD1E8MI2JHTVH5ISF/03_R03+-+Synagogue+Exterior_A4-01.jpg?format=2500w",
            "https://images.squarespace-cdn.com/content/v1/66cf0abe069efa03ec21da90/5ec5065a-f62d-41dc-92dd-11a4f6014854/24002_202_Hotel.jpeg?format=2500w",
            "https://images.squarespace-cdn.com/content/v1/66cf0abe069efa03ec21da90/3317aa69-42bd-4b73-8991-80593f742384/47NL-2.jpg?format=2500w",
            "https://images.squarespace-cdn.com/content/v1/66cf0abe069efa03ec21da90/1724844745485-D3SCGOQN6QKF807BMQ13/1338_BridgeStudios_FrontElevation_Final+%281%29-01.jpg?format=2500w",
            "https://images.squarespace-cdn.com/content/v1/66cf0abe069efa03ec21da90/823ee865-3b85-46b1-8bbe-7d82053cb2f4/Visual+Exterior+-+Revision2.jpg?format=2500w"
        ];

        var _curIndex = 0;
        var interval = 6500;

        // Preload all images
        img_array.forEach(function (src) {
            const img = new Image();
            img.src = src;
        });

        // Initialize background divs
        for (var i = 0; i < img_array.length; i++) {
            $('#background-slide' + i).css('background-image', 'url(' + img_array[i] + ')');
        }

        $('#background-slide0').addClass('visible');

        function runSlider() {
            var _nxtIndex = (_curIndex + 1) % img_array.length;

            $('#background-slide' + _curIndex).removeClass('visible');
            $('#background-slide' + _nxtIndex).addClass('visible');

            _curIndex = _nxtIndex;
        }

        // Start loop (no delay, runs every 15s forever)
        setInterval(runSlider, interval);
    })();

    // Reload button handler
    $('#reload-btn').on('click', function () {
        location.reload();
    });

    // Feedback form submit handler
    $('#feedback-form').on('submit', function (e) {
        e.preventDefault();

        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all required fields.');
            return;
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        $('#success-message').fadeIn();
        $('#feedback-form')[0].reset();

        setTimeout(function () {
            $('#success-message').fadeOut();
        }, 5000);
    });
});
