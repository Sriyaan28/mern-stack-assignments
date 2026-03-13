// Shallow copy observation on nested objects
const user =
{
    id: 101,
    name: "Ravi",
    preferences:
    {
        theme: "dark",
        language: "en"
    }
};

let copyUser = { ...user }

// changing name and theme in copyUser
copyUser.name = 'DD'
copyUser.preferences.theme = 'light' // => changes in original user too

console.log(user)
console.log(copyUser)

// Deep copy observation
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

let copyOrder = structuredClone(order)

//changing city and price in copyOrder
copyOrder.customer.address.city = 'Secunderabad';
copyOrder.items[0].price = 90000;

console.log(order)  // doesnt change
console.log(copyOrder)
