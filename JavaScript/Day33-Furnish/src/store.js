import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');


/* {
    "id": "rec43w3ipXvP28vog",
    "fields": {
      "company": "ikea",
      "colors": [
        "#f15025",
        "#222"
      ],
      "featured": true,
      "price": 999,
      "name": "high-back bench",
      "image": [
        {
          "id": "attcvDDMikF6G2iNi",
          "width": 1000,
          "height": 639,
          "url": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668084633/product-1_evgdfv.jpg",
          "filename": "product-1.jpeg",
          "size": 62864,
          "type": "image/jpeg",
          "thumbnails": {
            "small": {
              "url": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668084633/product-1_evgdfv.jpg",
              "width": 56,
              "height": 36
            },
            "large": {
              "url": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668084633/product-1_evgdfv.jpg",
              "width": 801,
              "height": 512
            },
            "full": {
              "url": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1668084633/product-1_evgdfv.jpg",
              "width": 3000,
              "height": 3000
            }
          }
        }
      ]
    }
  }, */
const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { featured, name, price, company, colors, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    return { id, featured, name, price, company, colors, image };
  });
  setStorageItem('store', store);
};

const findProduct = (id) => {
  let product = store.find((product) => product.id === id);
  return product;
};

export { store, setupStore, findProduct };
