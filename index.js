const product={
    title: 'Best Hospital',
    description:'come and get served',
    price: 200,
    quantity:20,
    sellOne:()=>{
       product.quantity-=1; 
    },
print: () => {
    console.log('we have $ ${product.quantity} of ${product.title}');

}
}

const productIdElement= Document.getElementByID('productID');

productIdElement.innerHTML= product.title; 
