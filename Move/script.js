var main = function() {
  var cities = ["Seattle","NYC","Tempa","Rochester","Columbus"];
  cities.sort();
      $("#searchBox").autocomplete({
      source: cities
    });
}
 
$(document).ready(main);
