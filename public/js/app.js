$(document).ready(function() {
  // Funciones

  // Obtener subcategorias
  $.get('https://api.mercadolibre.com/categories/MPE1071', function(response) {
    console.log(response);
    for (const subcategory of response.children_categories) {
      const li = `<li class="nav-item">
                    <a class="nav-link" href="#">${subcategory.name}</a>
                  </li>`;
      $('#navbarNav .navbar-nav').append(li);
    }
  });

  // Obetener todos los productos
  $.ajax({
    url: 'https://api.mercadolibre.com/sites/MPE/search?category=MPE1071',
    success: function(data){
      for (const item of data.results) {
        const div = `<div class="col-12 col-sm-6 col-md-4 d-flex mb-3">

                        <div class="card col-12">
                          <img class="card-img-top" src="${item.thumbnail}" alt="Card image cap">
                          <div class="card-body">
                            <h6 class="card-title font-weight-bold">${item.title}</h6>
                            <h6 class="card-text">${item.price} ${item.installments.currency_id}</h6>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>

                    </div>`;

        $('#general-products').append(div);
      }
      // console.log(data.results)
    }
  });
});