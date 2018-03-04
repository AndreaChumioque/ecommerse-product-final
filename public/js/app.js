$(document).ready(function() {
  // Funciones

  // Obtener subcategorias
  $.get('https://api.mercadolibre.com/categories/MPE1071', function(response) {
    console.log(response);
    for (const subcategory of response.children_categories) {
      const li = `<li class="nav-item">
                    <a class="nav-link" href="/${subcategory.name}">${subcategory.name}</a>
                  </li>`;
      $('#navbarNav .navbar-nav').append(li);
      // aqui debe estar e problema, la libreria page.js se supone que debe enrutar
      // uso de la libreria page.js para enrutar cada categoria
      page(`/${subcategory.name}`, function() {
        $('#general-products').html('');
        $.ajax({
          url: `https://api.mercadolibre.com/sites/MPE/search?category=${subcategory.id}`,
          contentType: 'application/json',
          success: function(data){
            for (const item of data.results) {
              const div = `<div class="col-12 col-sm-6 col-md-4 d-flex mb-3">      
                              <div class="card col-12">
                                <img class="card-img-top" src="${item.thumbnail}" alt="Card image cap">
                                <div class="card-body">
                                  <h6 class="card-title font-weight-bold">${item.title}</h6>
                                  <h6 class="card-text">${item.price} ${item.installments.currency_id}</h6>
                                  <a href="#" class="btn btn-primary btn-pet">Añadir a carrito de compra</a>
                                </div>
                              </div>      
                          </div>`;      
              $('#general-products').append(div);
            }
            // console.log(data.results)
          }
        });
      })
      page()
    }
  });

  // Obetener todos los productos
  $.ajax({
    url: 'https://api.mercadolibre.com/sites/MPE/search?category=MPE1071',
    contentType: 'application/json',
    success: function(data){
      // console.log(data.results);
      for (const item of data.results) {
        const div = `<div class="col-12 col-sm-6 col-md-4 d-flex mb-3">
                        <div class="card col-12">
                          <img class="card-img-top" src="${item.thumbnail}" alt="Card image cap">
                          <div class="card-body">
                            <h6 class="card-title font-weight-bold">${item.title}</h6>
                            <h6 class="card-text">${item.price} ${item.installments.currency_id}</h6>
                            <a href="#" class="btn btn-primary btn-pet">Añadir a carrito de compra</a>
                          </div>
                        </div>
                    </div>`;

        $('#general-products').append(div);
      }
      // console.log(data.results)
    }
  });
});