$(document).ready(function() {
  // Funciones

  // Obtener subcategorias
  $.get('https://api.mercadolibre.com/categories/MPE1071', function(response) {
    for (const subcategory of response.children_categories) {
      const li = `<li class="nav-item">
                    <a class="nav-link" href="#">${subcategory.name}</a>
                  </li>`;
      $('#navbarNav .navbar-nav').append(li);
    }
  });


  $.ajax({
    url: 'https://api.mercadolibre.com/sites/MPE/search?category=MPE1071', // cambiar el id
    success: function(data){
      // console.log(data.results)
    }
  });
});