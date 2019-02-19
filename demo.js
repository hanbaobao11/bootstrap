$('.slid-btn').on('click',function(){
    $(this).find('span').toggleClass('glyphicon-triangle-bottom');
    $(this).find('span').toggleClass('glyphicon-triangle-right');
})
$('#menu-btn').on('click',function(){
    $('.left-menu').show();
    $('#menu-btn').hide();
})
$('.list-group-item').not('.disabled').on('click',function(){
    $('.list-group-item').removeClass('active');
    $(this).addClass('active');
    var id=$(this).attr('href');
    $('.tab-content-item').removeClass('active');
    $(id).addClass('active');
})