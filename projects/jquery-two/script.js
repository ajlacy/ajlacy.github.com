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
        console.log($listItems);
        $listItems.each(function (key) {
            output.push($listItems[key].innerHTML);
        });
        return output;
    }
    var data = getData($('.avenger')).sort();
    $('#avengers').empty();
    var $ul = createUnorderedList(data);
    $('#avengers').append($ul);
    
    
    
});