document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            card.classList.add("card-clicked");

            setTimeout(function () {
                card.classList.remove("card-clicked");
            }, 180);

        });

    });

});