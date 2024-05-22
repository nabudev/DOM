// Define an array of products
const products = [
    { id:1, nombre: "Camisa de algodon", precio: 25.99, categoria: "Ropa", imagen: "camisa.jpg", descripcion: "Una camisa de algodon comoda y elegante" },
    { id:1, nombre: "Zapatos de cuero", precio: 59.99, categoria: "Calzado", imagen: "zapato.jpg", descripcion: "Zapatos de cuero de alta calidad para hombres" },
    { id:1, nombre: "Bolso de mano", precio: 39.99, categoria: "Accesorios", imagen: "bolso.jpg", descripcion: "Un bolso de mano elegante y funcional para mujeres" },
  ];
  
  // Function to display products
  function displayProducts() {
    let productsHTML = '';
    products.forEach(product => {
      productsHTML += `
        <div class="product">
          <h2>${product.nombre}</h2>
          <p>Price: ${product.precio}</p>
          <p>${product.categoria}</p>
          <p>${product.imagen}</p>
          <p>${product.descripcion}</p>
        </div>
      `;
    });
    document.getElementById('products').innerHTML = productsHTML;
  }
  
  // Call the function on page load
  window.onload = displayProducts;
