
$(function() {
  'use strict';
  function Todo(elem) {

    this.eList = elem.find('.todo__list');
    this.eText = elem.find('.todo__text');
    this.eButton = elem.find('.todo__add');
    var that = this;
    this.eText.on('input', function () {
        that.eButton.prop('disabled', !this.value);
    });

    
    this.eButton.on('click', function () {
      var val = that.eText.val();

      if (val) {
        that.addItem(val);
        that.eText.val('');
        that.eButton.prop('disabled', true);
      }
    });

    this.eList.on('click', '.todo__list-item', function () {
      var COMPLETED_CLASS = 'todo__list-item_completed_yes';
      var item = $(this);
      
      item.hasClass(COMPLETED_CLASS) ?
        item.removeClass(COMPLETED_CLASS) :
        item.addClass(COMPLETED_CLASS);
    });
    
    this.eList.on('click', '.todo__list-item-remove', function (e) {
      $(this).closest('.todo__list-item').remove();
    });
  }


  Todo.prototype.addItem = function(text, isCompleted) {
    var item = $(
      '<li class="todo__list-item">'+ 
        '<span class="todo__list-item-text"></span>' +
        '<span class="todo__list-item-remove">&#10060;</span>' +
      '</li>'
    );

    if (isCompleted) {
      item.addClass('todo__list-item_completed_yes');
    }

    item.find('.todo__list-item-text').text(text);
    
    this.eList.append(item);
  }
  var todo = new Todo($('#list'));
});
