$(function() {
  var efeito = 0;
  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';                                 // item is an empty string
  $list = $('ul');                               // Cache the unordered list
  $newItemForm = $('#newItemForm');              // Cache form to add new items
  $newItemButton = $('#newItemButton');          // Cache button to show form

  $('li').hide().each(function(index) {          // Hide list items
    $(this).delay(150 * index).fadeIn(1600);     // Then fade them in
  });

  // ITEM COUNTER
  function updateCount() {                       // Create function to update counter
    var items = $('li[class!=complete]').length; // Number of items in list
    $('#counter').text(items);                   // Added into counter circle

    document.title = items + "   Duck list";
  }
  updateCount();                                 // Call the function

  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                         // Show the button
  $newItemForm.hide();                           // Hide the form
  $('#showForm').on('click', function() {        // When click on add item button
    $newItemButton.hide();                       // Hide the button
    $newItemForm.show();                         // Show the form
  });

  // ADDING A NEW LIST ITEM
  $newItemForm.on('submit', function(e) {       // When a new item is submitted
    e.preventDefault();                         // Prevent form being submitted
    var text = $('input:text').val();           // Get value of text input

    if(text != ''){
      $list.append('<li>' + text + '</li>');      // Add item to end of the list
      $('input:text').val('');                    // Empty the text input
      updateCount();
    }
  });

  $list.on('click', 'li', function() {
    var $this = $(this);
    var complete = $this.hasClass('complete');

    $list
      .add('<li class=\"complete\">' + item + '</li>')
      .hide().fadeIn(300);
  });

  $list.on("contextmenu", 'li', function() {
    efeito++;
    if(efeito > 2)
      efeito = 0;

    var $this = $(this);
    var complete = $this.hasClass('complete');

    /*
    if (complete === true) {
      $this.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {
        $this.remove();
      });
    }*/
    if(efeito == 0){
      $this.removeClass('complete');
      $this.removeClass('favorite');
    }
    else if (efeito == 1){
      $this.addClass('favorite');
      $this.removeClass('complete');

      updateCount();
    }
    else {
      item = $this.text();
      $this.addClass('complete');
      $this.removeClass('favorite');

      /*$this.remove();
      $list
        .append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);
      */
      updateCount();
    }
  });

});
