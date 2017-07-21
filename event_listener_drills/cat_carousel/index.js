// target img with class thumbnails
// add event listener on click / keydown 'enter'
// 
$(function(){
    $('.thumbnails img').click(function(event){
        let sourceAttr = $(event.currentTarget).attr('src');
        let sourceAlt = $(event.currentTarget).attr('alt');
        $('.hero img').attr('src', sourceAttr);
        $('.hero img').attr('alt', sourceAlt);
    });
});