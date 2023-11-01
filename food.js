const fooditems = [
  {
  id: 1,
  title: 'Classic Cheeseburger',
  price: 4.99,
  description: 'Juicy beef patty, cheddar cheese, lettuce, tomato, and special sauce on a sesame seed bun.',
  category: "Fast Food ",
  image: 'tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063-removebg-preview.png',
  rating: { rate: 4.5, count: 200 }
  },
  {
  id: 2,
  title: 'Crispy Chicken Sandwich',
  price: 5.49,
  description: 'Crispy fried chicken breast, pickles, lettuce, and mayo on a brioche bun.',
  category: "Fast Food ",
  image: 'sandwich-removebg-preview.png',
  rating: { rate: 4.2, count: 180 }
  },
  {
  id: 3,
  title: 'Pepperoni Pizza',
  price: 7.99,
  description: 'Spicy pepperoni, tomato sauce, mozzarella cheese, and herbs on a hand-tossed crust.',
  category: "Fast Food ",
  image: 'https://pizzrella.com/cdn/shop/files/Pep1-PhotoRoom.png-PhotoRoom.png?v=1690391066',
  rating: { rate: 4.7, count: 150 }
  },
  {
  id: 4,
  title: 'Beef CheeseBurger',
  price: 5.49,
  description: 'Grilled veggie patty, lettuce, tomato, onions, and avocado on a whole wheat bun.',
  category: "Fast Food ",
  image: 'https://images.squarespace-cdn.com/content/v1/5e3c82ffe7c17442242aa62e/1591053720895-VXCRFTCITUQV2XT8FVDO/Veggie-Burger.png',
  rating: { rate: 4.0, count: 190 }
  },
  {
  id: 5,
  title: 'Sushi Rolls',
  price: 8.99,
  description: 'Assorted sushi rolls with fresh fish, rice, and vegetables.',
  category: "Fast Food ",
  image: 'maki-sushi-isolated-white-removebg-preview.png',
  rating: { rate: 4.8, count: 220 }
  },
  {
  id: 6,
  title: 'Fries and Dips',
  price: 3.99,
  description: 'Crispy golden fries served with ketchup, mayo, and cheese dip.',
  category: "Fast Food ",
  image: 'flat-lay-box-fries-with-sauces-removebg-preview.png',
  rating: { rate: 4.3, count: 180 }
  },
  {
  id: 7,
  title: 'BBQ Ribs',
  price: 12.99,
  description: 'Tender BBQ ribs slow-cooked to perfection, served with coleslaw and baked beans.',
  category: "Fast Food ",
  image: 'grilled-steak-table-removebg-preview.png',
  rating: { rate: 4.6, count: 210 }
  },
  {
  id: 8,
  title: 'Ice Cream Sundae',
  price: 6.49,
  description: 'Vanilla ice cream topped with chocolate syrup, whipped cream, and a cherry on top.',
  category: "Dessert ",
  image: 'ice-cream-with-desert-removebg-preview.png',
  rating: { rate: 4.9, count: 250 }
  },
  {
  id: 9,
  title: 'Fish and Chips',
  price: 9.99,
  description: 'Crispy battered fish served with thick-cut fries and tartar sauce.',
  category: "Fast Food ",
  image: 'fish-and-chips-with-ai-generated-free-png.webp',
  rating: { rate: 4.4, count: 190 }
  },
  {
  id: 10,
  title: 'Cheese Pizza',
  price: 8.49,
  description: 'Tomato sauce, mozzarella cheese, and herbs on a hand-tossed crust.',
  category: "Fast Food ",
  image: 'hawaiian-pizza-removebg-preview.png',
  rating: { rate: 4.7, count: 180 }
  },
  {
  id: 11,
  title: 'Spicy Chicken Wings',
  price: 7.99,
  description: 'Crispy and spicy chicken wings served with ranch dip and celery sticks.',
  category: "Fast Food ",
  image: 'delicious-crispy-fried-chicken-isolated-white-surface-removebg-preview.png',
  rating: { rate: 4.6, count: 220 }
  },
  {
  id: 12,
  title: 'Bacon Cheese Fries',
  price: 6.49,
  description: 'Golden fries topped with melted cheese, crispy bacon bits, and green onions.',
  category: "Fast Food ",
  image: 'png-transparent-french-fries-with-cheese-french-fries-cheese-fries-chili-con-carne-hamburger-food-fries-cheese-recipe-american-food-removebg-preview.png',
  rating: { rate: 4.3, count: 180 }
  },
  {
  id: 13,
  title: 'Grilled Cheese Sandwich',
  price: 4.99,
  description: 'Toasty grilled bread with melted cheddar cheese, served with tomato soup for dipping.',
  category: "Fast Food ",
  image: 'panini-sandwich-with-ham-cheese-tomato-arugula-isolated-white-background-removebg-preview.png',
  rating: { rate: 4.2, count: 160 }
  },
  {
  id: 14,
  title: 'Beef Tacos',
  price: 8.99,
  description: 'Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa.',
  category: "Fast Food ",
  image: 'traditional-mexican-tacos-with-meat-vegetables-isolated-white-background_123827-19907-removebg-preview.png',
  rating: { rate: 4.5, count: 190 }
  },
  {
  id: 15,
  title: 'Margarita Cocktail',
  price: 9.99,
  description: 'Classic margarita cocktail with tequila, lime juice, and triple sec, served on the rocks.',
  category: "Beverage ",
  image: 'lemon-drop-martini-cocktail-isolated-white-background-removebg-preview.png',
  rating: { rate: 4.8, count: 210 }
  },
  {
  id: 16,
  title: 'Chocolate Milkshake',
  price: 5.49,
  description: 'Creamy chocolate milkshake topped with whipped cream and chocolate drizzle.',
  category: "Beverage ",
  image: 'image_2023-10-29_233645196-removebg-preview.png',
  rating: { rate: 4.7, count: 180 }
  },
  {
  id: 17,
  title: 'Chicken Nuggets',
  price: 3.99,
  description: 'Crispy chicken nuggets served with your choice of dipping sauces.',
  category: "Fast Food ",
  image: 'meat-sauce-fried-barbecue-delicious_1203-6402-removebg-preview.png',
  rating: { rate: 4.4, count: 190 }
  },
  {
  id: 18,
  title: 'Caesar Salad',
  price: 6.99,
  description: 'Fresh romaine lettuce, croutons, parmesan cheese, and Caesar dressing.',
  category: "Salad ",
  image: 'image_2023-10-29_233804827-removebg-preview.png',
  rating: { rate: 4.6, count: 200 }
  },
  {
  id: 19,
  title: 'Onion Rings',
  price: 4.49,
  description: 'Crispy battered onion rings served with spicy ketchup for dipping.',
  category: "Fast Food ",
  image: 'image_2023-10-29_233942731-removebg-preview.png',
  rating: { rate: 4.1, count: 170 }
  },
  {
  id: 20,
  title: 'Apple Pie',
  price: 3.99,
  description: 'Warm apple pie with a flaky crust, served with a scoop of vanilla ice cream.',
  category: "Dessert ",
  image: 'apple-pie-transparent-png.png',
  rating: { rate: 4.9, count: 230 }
  },
  
  
  ]

const fooddiv = document.getElementById('fooddiv')


 function allfood() {
 fooditems.forEach((data, ind) => {
 const card = `<div id =${data.id} class = 'card'> 
 <img src = ${data.image} class = 'card-img' />
 <h2 class = 'card-title'>${data.title}</h2>
 <h6 class = 'card-category'>${data.category}</h6>
 <h6 class = 'card-price'>Price : ${data.price}</h6>
 <p class = 'card-rating'>${data.rating.rate} (${data.rating.count})</p>
 <button class="Btn">
 Pay
 <svg viewBox="0 0 576 512" class="svgIcon"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
</button>
 </div>`

fooddiv.innerHTML += card
})
}
allfood()
document.getElementsByName('sort').forEach(input => {
    input.addEventListener('change', filterAccordingToRating)
  })

  document.getElementsByName('sort-price').forEach(input => {
    input.addEventListener('change', filterAccordingToPrice)
  })
  function filterAccordingToPrice () {
    if (this.value == 'high') {
      const sorted = fooditems.sort((a, b) => b.price - a.price)
      displayProducts(sorted)
    }
    if (this.value == 'low') {
      const sorted = fooditems.sort((a, b) => a.price - b.price)
      displayProducts(sorted)
    }
  }
  
   function filterByPriceRange () {
     console.log(this.value)
     const filtered = fooditems.filter(data => data.price >= this.value)
     displayProducts(filtered  )
   }


document
.getElementById('range-input')
.addEventListener('change', filterByPriceRange)

function filterByPriceRange () {
  console.log(this.value)
    const filtered = fooditems.filter(data => data.price >= this.value)
    displayProducts(filtered)
  }
  
  document.getElementsByName('sort-category').forEach(input => {
    input.addEventListener('change', filterAccordingToCatogery);
  });

  function filterAccordingToCatogery(){
    if(this.value == 'all'){
      const FATC = fooditems.filter((data)=>data.category.includes(' '))
      displayProducts(FATC)
    }
    if(this.value == 'fastFood'){
      const FATC = fooditems.filter((data)=>data.category.includes('Fast'))
      displayProducts(FATC)
    }
    if(this.value == 'salad'){
      const FATC = fooditems.filter((data)=>data.category.includes('Salad'))
      displayProducts(FATC)
    }
    if(this.value == 'beverage'){
      const FATC = fooditems.filter((data)=>data.category.includes('Beverage'))
      displayProducts(FATC)
    }
    if(this.value == 'dessert'){
      const FATC = fooditems.filter((data)=>data.category.includes('Dessert'))
      displayProducts(FATC)
    }
  }

  document.getElementById('sbtn').addEventListener('click', filterAccordingToSearch)
  function filterAccordingToSearch(){
    const input = document.getElementById('search_input').value
    console.log('input->' , input)
      const FATS = fooditems.filter((data)=>data.title.toLowerCase().includes(input.toLowerCase(input)))
    console.log('FATS->' , FATS)

    displayProducts(FATS)
  }

function displayProducts(prod) {
    fooddiv.innerHTML = null
    prod.forEach((data, ind) => {
      const card = `<div id =${data.id} class = 'card'> 
      <img src = ${data.image} class = 'card-img' />
      <h2 class = 'card-title'>${data.title}</h2>
      <h6 class = 'card-category'>${data.category}</h6>
      <h6 class = 'card-price'>Price : ${data.price}</h6>
      <p class = 'card-rating'>${data.rating.rate} (${data.rating.count})</p>
      <button class="Btn">
      Pay
      <svg viewBox="0 0 576 512" class="svgIcon"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
     </button>
      </div>`
 
     fooddiv.innerHTML += card
     
   })
  }
