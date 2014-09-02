function HtmlCreator () {}

HtmlCreator.createElem = function (elem, id, className, content, attributes) {
    return (typeof attributes != 'undefined') ? '<' + elem +' id="' + id + '" class="' + className + '" ' + attributes
            + '>' + content + '</' + elem + '>' : '<' + elem +' id="' + id + '" class="' + className + '">' + content + '</' + elem + '>';
};

HtmlCreator.createMonoElem = function (elem, id, className, attributes) {
    return (typeof attributes != 'undefined') ? '<' + elem +' id="' + id + '" class="' + className + '" ' + attributes
            + '>' : '<' + elem +' id="' + id + '" class="' + className + '">';
};

HtmlCreator.createHorizontalLine = function (className) {
    return (typeof className != 'undefined') ? '<hr class="' + className + '"/>' : '<hr/>';
};

HtmlCreator.createListFromObject = function (object, listId, listClass, translation) {
    var html = "<select id='"+listId+"' class='"+listClass+"'>";

        $.each(object, function(key, value) {
                html += "<option value='" + key + "'>" + translation[key] + "</option>"
                });

        return html+"</select>";
};