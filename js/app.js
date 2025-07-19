// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const menuData = [
        {
            category: "Завтраки",
            items: [
                {
                    imgSrc: "../assets/utr_3.png",
                    imgAlt: "Pancakes",
                    price: "20c",
                    name: "Блинчики",
                    description: "Пушистые блинчики с потрясающим вкусом."
                },
                {
                    imgSrc: "../assets/utr_4.png",
                    imgAlt: "Pancakes",
                    price: "20c",
                    name: "Блинчики",
                    description: "Пушистые блинчики с потрясающим вкусом."
                },
                {
                    imgSrc: "../assets/utr_1.png",
                    imgAlt: "Semolina Porridge",
                    price: "80c",
                    name: "Манная каша",
                    description: "Кремовая каша с кусочком сливочного масла."
                },
                {
                    imgSrc: "../assets/utr_2.png",
                    imgAlt: "Pancakes",
                    price: "80c",
                    name: "Рисовая каша",
                    description: "Рисовая каша с маслом и с кусочком карици."
                },
            ]
        },
        {
            category: "Первое блюдо",
            items: [
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Chicken Soup",
                    price: "$9",
                    name: "Chicken Soup",
                    description: "Classic comforting chicken noodle soup."
                }
            ]
        },
        {
            category: "Второе блюдо",
            items: [
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Beef Steak",
                    price: "$24",
                    name: "Beef Steak",
                    description: "Grilled steak with a side of potatoes."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Beef Steak",
                    price: "$24",
                    name: "Beef Steak",
                    description: "Grilled steak with a side of potatoes."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Beef Steak",
                    price: "$24",
                    name: "Beef Steak",
                    description: "Grilled steak with a side of potatoes."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Beef Steak",
                    price: "$24",
                    name: "Beef Steak",
                    description: "Grilled steak with a side of potatoes."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Beef Steak",
                    price: "$24",
                    name: "Beef Steak",
                    description: "Grilled steak with a side of potatoes."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Beef Steak",
                    price: "$24",
                    name: "Beef Steak",
                    description: "Grilled steak with a side of potatoes."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Beef Steak",
                    price: "$24",
                    name: "Beef Steak",
                    description: "Grilled steak with a side of potatoes."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Salmon Fillet",
                    price: "$22",
                    name: "Salmon Fillet",
                    description: "Oven-baked salmon with fresh herbs."
                }
            ]
        },
        {
            category: "Шашлыки",
            items: [
                {
                    imgSrc: "https://i.imgur.com/gAXXA8A.png",
                    imgAlt: "Lamb Kebab",
                    price: "$18",
                    name: "Lamb Kebab",
                    description: "Juicy lamb skewers with grilled vegetables."
                },
                {
                    imgSrc: "https://i.imgur.com/gAXXA8A.png",
                    imgAlt: "Lamb Kebab",
                    price: "$18",
                    name: "Lamb Kebab",
                    description: "Juicy lamb skewers with grilled vegetables."
                },
                {
                    imgSrc: "https://i.imgur.com/gAXXA8A.png",
                    imgAlt: "Lamb Kebab",
                    price: "$18",
                    name: "Lamb Kebab",
                    description: "Juicy lamb skewers with grilled vegetables."
                },
                {
                    imgSrc: "https://i.imgur.com/gAXXA8A.png",
                    imgAlt: "Lamb Kebab",
                    price: "$18",
                    name: "Lamb Kebab",
                    description: "Juicy lamb skewers with grilled vegetables."
                },
            ]
        },
        {
            category: "Десерты",
            items: [
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Cheesecake",
                    price: "$7",
                    name: "Cheesecake",
                    description: "Creamy New York style cheesecake."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Cheesecake",
                    price: "$7",
                    name: "Cheesecake",
                    description: "Creamy New York style cheesecake."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Cheesecake",
                    price: "$7",
                    name: "Cheesecake",
                    description: "Creamy New York style cheesecake."
                },
                {
                    imgSrc: "https://i.imgur.com/dK5z0Mr.png",
                    imgAlt: "Cheesecake",
                    price: "$7",
                    name: "Cheesecake",
                    description: "Creamy New York style cheesecake."
                }
            ]
        },
        {
            category: "Мохито",
            items: [
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Classic Mojito",
                    price: "$12",
                    name: "Classic Mojito",
                    description: "Fresh mint, lime, sugar, and white rum."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Classic Mojito",
                    price: "$12",
                    name: "Classic Mojito",
                    description: "Fresh mint, lime, sugar, and white rum."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Classic Mojito",
                    price: "$12",
                    name: "Classic Mojito",
                    description: "Fresh mint, lime, sugar, and white rum."
                },
                {
                    imgSrc: "https://i.imgur.com/lMocYjV.png",
                    imgAlt: "Classic Mojito",
                    price: "$12",
                    name: "Classic Mojito",
                    description: "Fresh mint, lime, sugar, and white rum."
                }
            ]
        }
    ];

    const menuContainer = document.querySelector('.menu__container');
    const createMenuCard = (dish) => {
        const card = document.createElement('div');
        card.className = 'menu__card';

        card.innerHTML = `
            <img src="${dish.imgSrc}" alt="${dish.imgAlt}" class="menu__img">
            <div class="menu__price">${dish.price}</div>
            <h4 class="menu__name">${dish.name}</h4>
            <p class="menu__description">${dish.description}</p>
        `;
        
        return card;
    };

-
    menuData.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'menu__category';

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'menu__category-title';
        categoryTitle.textContent = category.category;
        categoryContainer.appendChild(categoryTitle);

        const gridContainer = document.createElement('div');
        gridContainer.className = 'menu__grid';

        category.items.forEach(dish => {
            const card = createMenuCard(dish);
            gridContainer.appendChild(card);
        });

        categoryContainer.appendChild(gridContainer);
        menuContainer.appendChild(categoryContainer);
    });

});

// DELETE THIS ENTIRE BLOCK FROM YOUR app.js FILE
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});