document.addEventListener("DOMContentLoaded", function() {
    const questionContainer = document.getElementById("questionContainer");
    const flightDetailsContainer = document.getElementById("flightDetailsContainer");
    const flightPriceElement = document.getElementById("flightPrice");
    const planeTitleElement = document.getElementById("planeTitle");
    const planeImageElement = document.getElementById("planeImage");
    const editPassengersButton = document.getElementById("editPassengersButton");
    const elementoACambiar = document.getElementById("elementoACambiar");

    const passengerButtons = document.querySelectorAll(".passengerButton");
    passengerButtons.forEach(button => {
        button.addEventListener("click", function() {
            const passengers = parseInt(button.dataset.passengers);
            const price = parseInt(button.dataset.price);
            const plane = button.getAttribute("data-plane");
            const planeImageURL = button.getAttribute("data-plane-image");

            flightPriceElement.textContent = price.toLocaleString("es-AR", { minimumFractionDigits: 0, maximumFractionDigits: 0 });

            const pasajerosText = passengers === 1 ? "pasajero" : "pasajeros";
            elementoACambiar.textContent = "Precio final por " + passengers + " " + pasajerosText;

            planeTitleElement.textContent = plane;
            planeImageElement.src = planeImageURL;

            questionContainer.style.display = "none";
            flightDetailsContainer.style.display = "block";
        });
    });

    editPassengersButton.addEventListener("click", function() {
        flightDetailsContainer.style.display = "none";
        questionContainer.style.display = "block";
    });
});
