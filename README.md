Вам необходимо реализовать программу «Список дел». Программа будет содержать поле для ввода задания, а также две кнопки: добавить и отобразить. При нажатии на кнопку "Добавить" – задание добавляется ко всему списку, а при нажатии "Отобразить" – задания отображаются в виде списка под кнопками.

Также при добавлении задания появляется блок с текстом «Элемент был добавлен». Блок автоматически должен исчезнуть через 2 секунды.

Вообще не получилось сделать дз,надо пересмотреть 13 модуль и вернуться к этому заданию
Есть похожее задание в index2.js.



        $("button.add").on('click',function(){
            let value_add = $("input").val();
            console.log(value_add);
            $("div.add_element").show();
        });

        

        $("button.display").on('click',function(){
            $('div.display_add').append("<span>тест</span>");
       });