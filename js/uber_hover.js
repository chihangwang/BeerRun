$("#uber_ad").hover(function() {
    $('#car_light').css("visibility", "visible");
    $("#car_light p").css("visibility", "visible");
}, function() {
    $('#car_light').css('visibility', 'hidden');
    $("#car_light p").css("visibility", "hidden");
});