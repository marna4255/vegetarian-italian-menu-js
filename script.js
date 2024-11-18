// Array of Italian dishes, with a 'name' and 'vegetarian' status for each dish
const italianDishes = [
  {
    name: "Eggplant Parmesan",
    vegetarian: true,
  },
  {
    name: "Spaghetti&Meatballs",
    vegetarian: false,
  },
  {
    name: "Minestrone Soup",
    vegetarian: true,
  },
  {
    name: "Fettuccine Alfredo",
    vegetarian: true,
  },
  {
    name: "Chicken Parmesan",
    vegetarian: false,
  },
  {
    name: "Penne Arrabbiata",
    vegetarian: true,
  },
];

function displayVegetarianMenu(dishes) {
  // Filter the dishes array to get only vegetarian dishes
  const vegetarianMenuItems = dishes.filter((dish) => dish.vegetarian);
  console.log(vegetarianMenuItems);

  // Select the container in the DOM where the menu will be displayed
  const menuContainer = document.querySelector(".menu-container");

  // Create an unordered list (ul) element to hold the vegetarian menu items
  const ul = document.createElement("ul");

  // Use the 'map' function to create list items (li) for each vegetarian dish
  const listItems = vegetarianMenuItems.map((dish) => {
    const li = document.createElement("li"); // Create a list item (li)
    li.textContent = dish.name; // Set the text of the list item to the dish name
    return li; // Return the list item to be added to the list
  });

  // Append each list item (li) to the unordered list (ul)
  listItems.forEach((li) => ul.appendChild(li));

  // Append the unordered list (ul) to the menu container in the DOM
  menuContainer.appendChild(ul);
}

// Call the function to display the vegetarian menu
displayVegetarianMenu(italianDishes);
