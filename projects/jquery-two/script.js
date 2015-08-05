$(function(){
  
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];
  
  prepareView(avengers);

  // Code goes here!
    function prepareView(list) {
      var $ul = ('ul/');
      list.forEach(function (item){
        ('<li/>')
        .addClass(item.toLowerCase().split(" ").join("-"))
        .text(item)
        .appendTo($ul);
        
      });
      console.log($ul);
    }
});