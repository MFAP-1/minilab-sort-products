// WEEK 1 - DAY 2: MINILAB | Filter Products [MFAP-1 & SANDER]

// given array of objects. Unaltered.
const products = [
  {
    id: 1,
    name: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
  {
    id: 2,
    name: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
  {
    id: 3,
    name: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
  {
    id: 4,
    name: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
];

// Function definition 
const filterProducts = category => {
  const filteredArr = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].tags.includes(category)){
      filteredArr.push(products[i]);
    }
  }
  return filteredArr;
}

console.log(filterProducts('apple'));