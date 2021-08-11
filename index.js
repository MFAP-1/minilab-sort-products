// WEEK 1 - DAY 2: MINILAB | Filter Products [MFAP-1]

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
    for (let j = 0; j < products[i].tags.length; j++) {
      if (products[i].tags[j] === category){
        filteredArr.push(products[i]);
        break; // increase efficiency. Reducing the number of loops when found.
      }
    }
  }
  return filteredArr;
}

console.log(filterProducts('apple'));