const form = document.querySelector("#checkout-form");

const nameInput = document.querySelector("#name");

const statusMessage = document.querySelector("#status");

const deliveryInputs =
    document.querySelectorAll(
        'input[name="delivery"]'
    );

const savedData =
    sessionStorage.getItem("checkout");


if (savedData) {

    const checkoutData =
        JSON.parse(savedData);

    nameInput.value = checkoutData.name;

    const deliveryInput =
        document.querySelector(
            `input[value="${checkoutData.delivery}"]`
        );

    if (deliveryInput) {
        deliveryInput.checked = true;
    }

}

form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const selectedDelivery =
            document.querySelector(
                'input[name="delivery"]:checked'
            );


        const checkoutData = {

            name: nameInput.value,

            delivery: selectedDelivery.value

        };
        

        sessionStorage.setItem(
            "checkout",
            JSON.stringify(checkoutData)
        );



        statusMessage.textContent =
            "Dados guardados nesta sessão.";

    }
);