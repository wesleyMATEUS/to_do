var my_main = [];
var my_op1 = [];
var my_op2 = [];

var ref_main;

function DOWN()
{
  console.log(my_main);
  console.log("a------------");

  for(let i = 0; i < my_main.length; i++)
  {
    $("#main" + i).remove();
  }

  for(let i = 0; i < my_main.length; i++)
  {
    $("#main").append('<li id=\"main' + i + '\">' + my_main[i].nota + '</li>');
    $('#main' + i).addClass(my_main[i].status);
  }
}

function UP()
{
  if(my_main[0].note == '')
    my_main.splice(0, 1);
  ref_main.push(my_main);
}

$(function()
{
  //localDB();
  firebase_config();

  var efeito_0 = 0, efeito_1 = 0, efeito_2 = 0;
  // SETUP
  var $list, $newItemForm, $newItemButton, $main, $op1, $op2;
  var item = '';                                 // item is an empty string
  $list = $("#main");
  $newItemForm = $('#newItemForm');              // Cache form to add new items
  $newItemButton = $('#newItemButton');          // Cache button to show form

  $main = $('#main');
  $op1 = $('#op1');
  $op2 = $('#op2');

  $main.show();
  $op1.hide();
  $op2.hide();

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
      $list.append('<li>' + text + '</li>');
      $('input:text').val('');
      updateCount();

      if(efeito_0 == 0)
      {
        var ob = {"nota" : text, "status" : ""}
        my_main.push(ob);
      }
      else if(efeito_0 == 1)
      {
        var ob = {"nota" : text, "status" : ""}
        my_op1.push(ob);
      }
      else if(efeito_0 == 2)
      {
        var ob = {"nota" : text, "status" : ""}
        my_op2.push(ob);
      }
    }

    $newItemButton.show();
    $newItemForm.hide();

    //console.log(my_main);
    //console.log(my_op1);
    //console.log(my_op2);
    //console.log("---------------");
  });



  $('#dir').on('click', function() {
    efeito_0++;
    if(efeito_0 > 2)
      efeito_0 = 0;

    if(efeito_0 == 0)
    {
      $main.show();
      $op1.hide();
      $op2.hide();

      $list = $("#main");
    }
    else if(efeito_0 == 1)
    {
      $main.hide();
      $op1.show();
      $op2.hide();

      $list = $("#op1");
    }
    else if(efeito_0 == 2)
    {
      $main.hide();
      $op1.hide();
      $op2.show();

      $list = $("#op2");
    }
  });

  $('#esq').on('click', function() {
    efeito_0--;
    if(efeito_0 < 0)
      efeito_0 = 2;

    if(efeito_0 == 0)
    {
      $main.show();
      $op1.hide();
      $op2.hide();

      $list = $("#main");
    }
    else if(efeito_0 == 1)
    {
      $main.hide();
      $op1.show();
      $op2.hide();

      $list = $("#op1");
    }
    else if(efeito_0 == 2)
    {
      $main.hide();
      $op1.hide();
      $op2.show();

      $list = $("#op2");
    }
  });



  $("#op1").on('click', 'li', function() {
    var $this = $(this);

    efeito_1++;

    if(efeito_1 > 2)
      efeito_1 = 0;

    if(efeito_1 == 0)
    {
      $this.addClass('cool');
      $this.removeClass('hot');
    }
    else if(efeito_1 == 1)
    {
      $this.removeClass('cool');
      $this.removeClass('hot');
    }
    else if(efeito_1 == 2)
    {
      $this.removeClass('cool');
      $this.addClass('hot');
    }

    /*
    var $this = $(this);
    var complete = $this.hasClass('complete');
    $list
      .add('<li class=\"complete\">' + item + '</li>')
      .hide().fadeIn(300);*/
  });

  $("#op2").on('click', 'li', function() {
    var $this = $(this);

    efeito_1++;

    if(efeito_1 > 2)
      efeito_1 = 0;

    if(efeito_1 == 0)
    {
      $this.addClass('cool');
      $this.removeClass('hot');
    }
    else if(efeito_1 == 1)
    {
      $this.removeClass('cool');
      $this.removeClass('hot');
    }
    else if(efeito_1 == 2)
    {
      $this.removeClass('cool');
      $this.addClass('hot');
    }

    /*
    var $this = $(this);
    var complete = $this.hasClass('complete');
    $list
      .add('<li class=\"complete\">' + item + '</li>')
      .hide().fadeIn(300);*/
  });

  $list.on('click', 'li', function() {
    var $this = $(this);

    efeito_1++;

    if(efeito_1 > 2)
      efeito_1 = 0;

    if(efeito_1 == 0)
    {
      $this.addClass('cool');
      $this.removeClass('hot');
    }
    else if(efeito_1 == 1)
    {
      $this.removeClass('cool');
      $this.removeClass('hot');
    }
    else if(efeito_1 == 2)
    {
      $this.removeClass('cool');
      $this.addClass('hot');
    }

    /*
    var $this = $(this);
    var complete = $this.hasClass('complete');
    $list
      .add('<li class=\"complete\">' + item + '</li>')
      .hide().fadeIn(300);*/
  });



  $list.on("contextmenu", 'li', function() {
    efeito_2++;
    if(efeito_2 > 2)
      efeito_2 = 0;

    var $this = $(this);

    //console.log($this);

    var complete = $this.hasClass('complete');
    if (complete === true)
    {
      var txt;
      var val = confirm("delete note?");

      if (val == true)
      {
        $this.animate({
          opacity: 0.0,
          paddingLeft: '+=180'
        }, 500, 'swing', function() {
          $this.remove();
        });

        //como remover esse item do array
        for(let i = 0; i < my_main.length; i++)
        {
          if($this.text() == my_main[i].nota)
          {
            var re = my_main.splice(i, 1);

            //console.log("nota retirada: " + re);
          }
        }

        //console.log(my_main);
        //console.log("---------------");
      }
    }

    if(efeito_2 == 0){
      $this.removeClass('complete');
      $this.removeClass('favorite');
    }
    else if (efeito_2 == 1){
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

  $("#op1").on("contextmenu", 'li', function() {
    efeito_2++;
    if(efeito_2 > 2)
      efeito_2 = 0;

    var $this = $(this);

    //console.log($this.text());

    var complete = $this.hasClass('complete');
    if (complete === true) {
      var txt;
      var val = confirm("delete note?");
      if (val == true)
      {
        $this.animate({
          opacity: 0.0,
          paddingLeft: '+=180'
        }, 500, 'swing', function() {
          $this.remove();
        });

        //como remover esse item do array
        for(let i = 0; i < my_op1.length; i++)
        {
          if($this.text() == my_op1[i].nota)
          {
            var re = my_op1.splice(i, 1);

            //console.log("nota retirada: " + re);
          }
        }

        //console.log(my_op1);
        //console.log("---------------");
      }
    }

    if(efeito_2 == 0){
      $this.removeClass('complete');
      $this.removeClass('favorite');
    }
    else if (efeito_2 == 1){
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

  $("#op2").on("contextmenu", 'li', function() {
    efeito_2++;
    if(efeito_2 > 2)
      efeito_2 = 0;

    var $this = $(this);

    //console.log($this.text());

    var complete = $this.hasClass('complete');
    if (complete === true) {
      var txt;
      var val = confirm("delete note?");
      if (val == true) {
        $this.animate({
          opacity: 0.0,
          paddingLeft: '+=180'
        }, 500, 'swing', function() {
          $this.remove();
        });

        //como remover esse item do array
        for(let i = 0; i < my_op2.length; i++)
        {
          if($this.text() == my_op2[i].nota)
          {
            var re = my_op2.splice(i, 1);

            //console.log("nota retirada: " + re);
          }
        }

        //console.log(my_op2);
        ////console.log("---------------");
      }
    }

    if(efeito_2 == 0){
      $this.removeClass('complete');
      $this.removeClass('favorite');
    }
    else if (efeito_2 == 1){
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
