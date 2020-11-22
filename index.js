$(function () {

    $("#js-shopping-list-form").on('submit', function (event) {
        event.preventDefault()

        const userText = $(event.currentTarget).find('#shopping-list-entry').val();


        $('.shopping-list').append(`<li>
        <span class="shopping-item">${userText}</span>
        <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
        <span class="button-label">delete</span>
        </button>
        </div>
        </li>`) 
    })

  
    $('.shopping-list').on('click', '.shopping-item-toggle', function () {
        $(this)
          .closest('li')
          .find('.shopping-item')
          .toggleClass('shopping-item__checked');
      });
    
 
      $('.shopping-list').on('click', '.shopping-item-delete', function () {
        $(this).closest('li').remove();
      });
    

    //lastly, the newly added list item needs to be able to be 
    //deleted and "check"-ed
  
});
