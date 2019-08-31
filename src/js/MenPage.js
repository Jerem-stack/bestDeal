$(document).ready(function(){
  console.log('Men Page')


  $('.panel-group').on('hidden.bs.collapse', toggleIcon);
  $('.panel-group').on('shown.bs.collapse', toggleIcon);

  $("#ex13").slider({
      ticks: [0, 100, 200, 300, 400],
      ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
      ticks_snap_bounds: 30
  });

});
function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('fas fa-plus fas fa-minus');
}
