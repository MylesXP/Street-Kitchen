//Favorite Icon Heart "Added" Toggle
$('.heart').click(function() {
    $(this).find('i').toggleClass('far').toggleClass('fas');
    $(this).find('button').toggleClass('btn-outline-danger').toggleClass('btn-danger');
});

// Favorite Icon Background Toggle
$('.btn-outline-danger').click(function() {
    $(this).toggleClass('btn-outline-danger').toggleClass('btn-danger');
});