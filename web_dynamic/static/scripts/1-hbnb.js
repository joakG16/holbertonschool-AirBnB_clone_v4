var checkedIds = [];
var amenitychecked = [];

$('input[type="checkbox"]').change(function() {
  if ($(this).is(':checked')) {
    checkedIds.push($(this).data('id')); //accessing dataset property id
    amenitychecked.push($(this).data('name'));
    $('div .amenities h4').html(amenitychecked.join(", ")); // join returns a string separted by value specified
  } else {
    var index = checkedIds.indexOf($(this).data('id'));
    if (index > -1) { // if value(the index) is found
      checkedIds.splice(index, 1); // index(start): from where to change the array, 1(deleteCount): number of elements to remove from start
      amenitychecked.splice(index, 1);
      $('div .amenities h4').html(amenitychecked.join(", "));
    }
  }
});