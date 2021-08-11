// Seu código aqui!

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

// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!
//console.log(products);
 
function filterProducts(category) {
  let newArr = [];
  for (let i=0; i<products.length; i++) {
    for (let k=0; k<products[i].tags.length; k++) {
      if (products[i].tags[k] === category) {
        newArr.push(products[i]);
      }
    }
  }

  return newArr;
}

console.log(filterProducts('apple'));