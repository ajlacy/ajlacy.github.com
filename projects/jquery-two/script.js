$(function () {
    var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

    $('#avengers')
        .append(createUnorderedList(avengers, 'list-avengers', 'avenger'));
    
    // Code goes here!
    function createUnorderedList(array, listId, className) {
        // list = list.sort();
        var $ul = $('<ul/>')
            .attr('id', listId);
        array.forEach(function (item) {
            // given Iron Man => iron-man //
            var id = item.toLowerCase().split(" ").join("-");
            $('<li/>')
                .attr('id', id)
                .addClass(className)
                .text(item)
                .appendTo($ul);
        });
        return $ul;
    }

    function removeAvenger(avenger) {
        var className = avenger.toLowerCase().split(" ").join("-")
        $("." + className).remove();
    }
    
    // removeAvenger('Iron Man');
    // removeAvenger('Wasp');
    
    function getData(className) {
        var output = [];
        var $listItems = $(className);
        $listItems.each(function (key) {
            output.push($listItems[key].innerHTML);
        });
        return output;
    }
    var data = getData($('.avenger')).sort();
    $('#avengers').empty();
    var $ul = createUnorderedList(data);
    $('#avengers').append($ul);
    
    $("<div/>")
        .attr('id', 'test-div')
        .addClass("hot")
        .text("HELLLLLLLLLLLLLOOOOOOOOOOOOO")
        .appendTo('main');
        
    var $ironMan = $('#iron-man');
    
    function fadeIn($element, callback, args) {
        $element.fadeIn(2000, function () {
            callback.apply(null, args);
        });
    }
    
    function fadeOut($element, callback, args) {
        $element.fadeOut(2000, function () {
            callback.apply(null, args);
        });
    }
    
    fadeOut($ironMan, fadeIn, [$ironMan]);
    
});