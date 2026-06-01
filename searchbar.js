function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    let name = product.textContent.toLowerCase();

    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

document.getElementById("searchInput").addEventListener("keyup", function() {
  let input = this.value.toLowerCase();
  let products = document.querySelectorAll(".product");

  products.forEach(product => {
    let name = product.textContent.toLowerCase();
    product.style.display = name.includes(input) ? "block" : "none";
  });
});

function filterProducts(category) {
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    if (category === 'all' || product.dataset.category === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}