$(document).ready(function() {
    var checkedIds = [];

    $('.checkbox').change(function() {
      if ($(this).is(':checked')) {
        checkedIds.push($(this).prop('id'));
      } else {
        var index = checkedIds.indexOf($(this).prop('id'));
        if (index > -1) {
          checkedIds.splice(index, 1);
        }
      }
    });
  });