// MENU ITEMS

const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'Steak dinner',
    category: 'dinner',
    price: 16.99,
    img: './images/item-10.jpeg',
    desc: `A nice juicy steak`,
  },
];

// CONSTANTS

const sectionCenter = document.querySelector('.sectionCenter');
const underline = document.querySelector('.underline');
const filterBtnDiv = document.querySelector('.filterBtns');

// This fires when the page is first loaded

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  addFilterBtns();
});

// This is the function used to display any of the items based on the argument that is passed into it

function displayMenuItems(menuItems) {
  let displayItem = menuItems
    .map(function (item) {
      return `<article class="menuItem">
          <img class="photo" src=${item.img} alt=${item.title} />
          <div class="itemInfo">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>

            <p class="itemText">
              ${item.desc}
            </p>
          </div>
        </article>`;
    })
    .join('');

  // displayItem = displayItem.join('');

  sectionCenter.innerHTML = displayItem;
}

// This function will add all the filter buttons based on unique catagories

const addFilterBtns = () => {
  // This will create a new array of just the catagories of each menu object

  const allItemCatagories = menu.map(function (menuItem) {
    return menuItem.category;
  });

  // This will take the new array of catagories and create another array of individual unique catagories

  const uniqueCatagories = ['Full Menu', ...new Set(allItemCatagories)];

  // Then I will use a map method to create each filter button based on the amount of unique categories

  const uniqueCatagoryBtns = uniqueCatagories
    .map(function (uniqueCatagory) {
      return `<button class="filterBtn" id="${uniqueCatagory}">${uniqueCatagory}</button>`;
    })
    .join('');

  // I will then add each of the buttons to the filterBtnDiv

  filterBtnDiv.innerHTML = uniqueCatagoryBtns;

  // Then I will only select each of the filter buttons only once they have been created, this is important, if I select them before they are created they wont work!!!

  const filterBtns = document.querySelectorAll('.filterBtn');

  // This function will display the menu items based on the it's category though the category filter buttons

  filterBtns.forEach(function (Btn) {
    Btn.addEventListener('click', function (e) {
      const category = e.target.id;

      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category == category) {
          return menuItem;
        }
      });

      if (category == 'Full Menu') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
};
