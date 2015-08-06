$(function() {

  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

 $('#avengers').append(createUnorderedList(avengers)); 
 
  
  // Code goes here!
  function createUnorderedList(list) {
    list = list.sort();
      var $ul = ('ul/');
      list.forEach(function(item) {
       var className = item.toLowerCase().split(" ").join("-")
        $('<li/>')
          .addClass(className)
          .text(item)
          .appendTo($ul);

    });
    $('#avengers').append($ul)
    console.log($ul);
  }
  
  function removeAvenger(avenger) {
    var className = avenger.toLowerCase().split(".").join("-")
    $("." + className).remove();
    //console.log(className);
  }
  
  function sortListAlpha($ul) {
    
  }
});