

$(function(){

$('button[type=submit]').click(function(event){
    event.preventDefault();
    let shoppingItem = '';
    let enteredItem = $('.js-shopping-list-entry').val();
    let template = (`<li>
        <span class="shopping-item">${enteredItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    
    shoppingItem += template;

    $('.shopping-list').append(shoppingItem);
    $('.js-shopping-list-entry').val('');
});

$('.shopping-item-toggle').click(function(event){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
})

$('.shopping-item-delete').click(function(event){
    $(this).parents('li').remove();
})

});
