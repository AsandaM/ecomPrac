let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems'))

let tbody = document.querySelector('tbody')
function displayData(purchasedItems){
    purchasedItems.map((item) =>{
    tbody.innerHTML += `
                     <tr>
                         <td>${item.id}</td>
                         <td>${item.name}</td>
                         <td>${item.category}</td>
                         <td>${item.image}</td>
                         <td>${item.description}</td>
                         <td>${item.price}</td>
                        <td>${item.quantity}</td>
               </tr>
            
                   `
}
)}

displayData(purchasedItems)