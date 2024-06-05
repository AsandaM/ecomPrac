function CreateItem(id, name, category, image, description, price) {
    this.id = id
    this.name = name
    this.category = category
    this.image = image
    this.description = description
    this.price = price
}

let item1 = new CreateItem(1, 'Apple iPhone', 'Electronics', 'https://ik.imagekit.io/3dqckpw4d/upload/iphone_12___Purple1657182290iphone-12-purple.png', 'Powerful. Beautiful. Durable.', 23999.99)
let item2 = new CreateItem(2, 'MacBook', 'Electronics', 'https://ey6ff3dp8en.exactdn.com/wp-content/uploads/2021/01/Refurbished-MacBook-2015-A1466-5.jpg?strip=all&lossy=0&ssl=1', 'Up to 22 hours of battery life. The world\'s best laptop display.', 17499,99)
let item3 = new CreateItem(3, 'Adidas', 'Shoes', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-o9JvyJQboRbzmAC_Zd9meJA4bZ_RaUNzKw&s', 'An enhanced grip provides more traction on a range of surfaces, so you stay on your feet until only you decide otherwise.', 1799,99)
let item4 = new CreateItem(4,'Coat', 'Clothes', 'https://st.mngbcn.com/rcs/pics/static/T5/fotos/outfit/S20/57066728_09-99999999_01.jpg?ts=1693229570591&imwidth=360&imdensity=2', 'Versatile, functional and stylish', 999.99)
let item5 = new CreateItem(5, 'Cake', 'Food', 'https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg', 'Indulge in our delicious collection of cake', 59.95 )
let item6 = new CreateItem(6, 'Bag', 'Accessories', 'https://www.shutterstock.com/image-photo/stylish-womens-brown-handbag-trendy-260nw-2143560027.jpg', 'range of recycled or leather bags for work, travel or leisure', 449,99)

let items = [item1,item2,item3,item4,item5,item6]

localStorage.setItem('items', JSON.stringify(items))

let main = document.querySelector('main')


items.forEach(item =>{
    main.innerHTML += `
                        <div>
                        <img src="${item.image}">
                        <p>R ${item.price} </p>
                        <button id="viewMore"> View More </button>
                        <button class="purchase" value='${item.id}'> Purchase </button>
                        </div>
    `
})

let btns = document.querySelectorAll('.purchase')
 let purchasedItems =  []

// btns.forEach(btn =>{
//     btn.addEventListener('click', ()=>{
//         let x = items.find(item => item.id == btn.value)
//         purchasedItems.push(x)
//         console.log(purchasedItems)
//     })
// })

function addToCart(id) {
    let [item] = items.filter(object=> object.id === +id) //+id converts it into a number
    purchasedItems.push(item)
    console.log(purchasedItems);
    
}

btns.forEach(button => {
    button.addEventListener('click',(event)=>{
        addToCart(event.target.value)
    })
});




