let tg = window.Telegram.WebApp;

tg.expand();
var BackButton = Telegram.WebApp.BackButton;
BackButton.show();
BackButton.isVisible(True);
BackButton.onClick(function() {
    WebApp.showAlert("BackButton clicked");
    BackButton.hide();
});
Telegram.WebApp.onEvent('backButtonClicked', function(){
  window.location.reload("index.html");
});

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn = document.getElementById("btn");


btn.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();  
    var query = document.getElementById("searchInput").value;
    window.location.href = "/search?query=" + encodeURIComponent(query);
  });
