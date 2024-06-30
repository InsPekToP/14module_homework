var tasks = []; // Пустой массив

// Добавление элемента в массив, плюс увеличение индекса
$("#add").on("click", function () {
	var task = $("#task").val(); // получаем значение из input #task
	if(task == '')
		return false; // Выход, так как ничего не ввел пользователь
	
	tasks.push(task);
	$("#task").val("");
	
	// Пишем что элемент добавлен
	$("#results").text("Элемент был добавлен");
	$("#results").show();
	setTimeout(hideResults, 2000);
});