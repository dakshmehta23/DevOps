document.addEventListener('DOMContentLoaded', () => {
    axios.get('/config') // Assuming you have a config endpoint in app.js
        .then(response => {
            const shopOpen = response.data.shopOpen;

            if (shopOpen) {
                displayCoffeeList();
            } else {
                displayShopClosedMessage();
            }
        })
        .catch(error => {
            console.error('Error fetching shop status:', error);
            displayShopClosedMessage(); // Default to closed if there's an error
        });
});

function displayCoffeeList() {
    const availableCoffeesHeading = document.getElementById('heading');
    availableCoffeesHeading.style.display = 'block';
    availableCoffeesHeading.textContent = 'Available Coffees';
    axios.get('/coffees')
        .then(response => {
            const coffeeList = document.getElementById('coffeeList');
            response.data.forEach(coffee => {
                const listItem = document.createElement('li');
                listItem.textContent = `${coffee.name} - $${coffee.price}`;
                const orderButton = document.createElement('button');
                orderButton.textContent = "Order";
                orderButton.onclick = () => placeOrder(coffee.id);
                listItem.appendChild(orderButton);
                coffeeList.appendChild(listItem);
            });
        });
}

function displayShopClosedMessage() {
    const shopStatus = document.getElementById('shopStatus');
    shopStatus.textContent = 'Sorry, the coffee shop is currently closed.';

    // Hide the coffeeList element
    const temp = document.getElementById('heading');
    temp.style.display = 'none';
}

function placeOrder(coffeeId) {
    axios.post('/order', { coffeeId: coffeeId, quantity: 1 })
        .then(response => {
            alert(`Ordered ${response.data.coffeeName}! Total: $${response.data.total}`);
        })
        .catch(error => {
            alert('Error placing order.');
        });
}