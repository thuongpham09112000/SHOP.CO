fetch('https://midas-theme.myshopify.com/collections/featured-h2-1/products/armchair.js')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showdata(data);
    })
    .catch(error => console.error('Error:', error));

// function showdata(products) {
//     let kq = "";

//     products.forEach(product => {
//         const productCard = `
//                 <div class="col p-0">
//                   <div class="card">
//                     <a href="${product.url}">
//                       <img src="${product.featured_image}" alt="${product.title}">
//                     </a>
//                     <div class="card-body">
//                       <a href="${product.url}">
//                         <p class="card-text fw-bold">${product.title}</p>
//                       </a>
//                       <div class="evaluate d-flex flex-wrap">
//                         ${getRatingStars(product.rating || 0)}
//                         <span>${product.rating || 0}/</span><span>5</span>
//                       </div>
//                       <div class="card-price">
//                         <p>$${(product.price / 100).toFixed(2)}</p>
//                         ${product.compare_at_price ? `<p class="text-decoration-line-through text-opacity-04">$${(product.compare_at_price / 100).toFixed(2)}</p>` : ''}
//                         ${product.compare_at_price && product.compare_at_price > product.price ? `<span class="alert alert-danger rounded-pill">-${Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)}%</span>` : ''}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//             `;
//         kq += productCard;
//     });

//     const productList = document.getElementById('product-list');
//     productList.innerHTML = kq;
// }

function showdata(product) {
    const productList = document.getElementById('product-list');
    const productCard = `
        <div class="col p-0">
          <div class="card">
            <a href="${product.url}" style="border-radius: 20px;">
              <img src="${product.featured_image}" alt="${product.title}">
            </a>
            <div class="card-body">
              <a href="${product.url}">
                <p class="card-text fw-bold">${product.title}</p>
              </a>
              <div class="evaluate d-flex flex-wrap">
                ${getRatingStars(product.rating || 0)}
                <span>${product.rating || 0}/</span><span>5</span>
              </div>
              <div class="card-price">
                <p>$${(product.price / 100)}</p>
                ${product.compare_at_price ? `<p class="text-decoration-line-through text-opacity-04">$${(product.compare_at_price / 100)}</p>` : ''}
                ${product.compare_at_price && product.compare_at_price > product.price ? `<span class="alert alert-danger rounded-pill">-${Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)}%</span>` : ''}
              </div>
            </div>
          </div>
        </div>
    `;
    productList.innerHTML += productCard;
}


function getRatingStars(rating) {
    let fullStars = Math.floor(rating);
    let halfStar = rating % 1 !== 0;
    let starsHtml = '';

    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<img src="./image/Stars/star.png" alt="star">';
    }

    if (halfStar) {
        starsHtml += '<img src="./image/Stars/half-star.png" alt="half-star">';
    }

    return starsHtml;
}
