"use strict"; 
  function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

$(function() {
    $('pre').click(function() {
        SelectText('cleaned');
    });
});

var app = angular.module('scrubIt',[]);
app.filter('scrub', function() {
  return function(input = "") {
    var firstEx = /\(t([^)]+)\)/ig;
    var secondEx = /\d{1,3}\.?\d{1,3}MB\sram,/ig;
    var output = input.replace(firstEx,"").replace(secondEx,"");
    return output;
  };
});

