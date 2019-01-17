$(document).ready(function () {
    var compteur = 0;
    $('#plus').click(function () {
        compteur++;
        $('#text').html('Vous avez cliqué ' + compteur + ' fois.');
    });
    $('#moins').click(function () {
        compteur--;
        $('#text').html('Vous avez cliqué ' + compteur + ' fois.');
    });
});