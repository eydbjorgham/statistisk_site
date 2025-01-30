let productId = 1163;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
        <div class="grid1_1_1">
            <div>
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="tshirt">
            </div>
            <div>
                <h1>Product Information</h1>
                <h2>Model name</h2>
                <p>${data.productdisplayname}</p>
                <h2>Color</h2>
                <p>${data.colour1}</p>
                <h2>Inventory number</h2>
                <p>${data.id}</p>
                <h1>Nike</h1>
                <p>${data.brandbio}</p>
            </div>
            <div class="kurv">
                <h1>${data.productdisplayname}</h1>
                <p>${data.brandname}</p>
                <h3>Choose a size <button>S</button></h3>
                <button>Add to basket</button>
            </div>
        </div>
        `;
  });
