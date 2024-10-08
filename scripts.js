// adding info to the page name depending on its content
function nameFix() {
    var win = window.location.href;
    var dick = {
        "dashboard": "Главная",
        "schedule": "Расписание",
        "progress": "Оценки",
        "homework": "Домашние задания",
        "library": "Учебные материалы",
        "news": "Объявления",
        "rewards": "Награды",
        "feedback": "Отзывы о студенте",
        "payment": "Оплата",
        "settings": "Личный кабинет",
        "faq": "Ответы на вопросы",
        "contacts": "Администрация",
        "signal": "Обращения",
        "market": "Магазин",
    };
    for (var key in dick) {
        if (win.includes(key)) {
            document.title = "Journal - " + dick[key]
            //document.title = "DogKal - " + dick[key];
        }
    }
}
setInterval(nameFix, 300);

// revealing all current homework by pressing "show more"
function revealHW() {
    if (document.URL == "https://journal.top-academy.ru/ru/main/homework/page/index" && document.body.contains(document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4)"))) {
        document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4)").querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4) > p.text-center > span").click();
    }
}
setInterval(revealHW, 500);

// sort by exp. date function, then call a function
function sortByDate() {
	if (document.URL == "https://journal.top-academy.ru/ru/main/homework/page/index") {
	    var barabama = [];
	    var doglet = document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4) > div");
        var sons = doglet.querySelectorAll(".homework-item");
	    sons.forEach(son => {
            let dogs = son.querySelectorAll(".item-footer")
            dogs.forEach(dog => {
                let data = dog.innerText.split("\n")[2].split(".");
                barabama.push({date: new Date(`${data[2]}-${data[1]}-${data[0]}`), selector: son});
            });
	    });
	    barabama.sort((a, b) => a.date - b.date);
	    let x = 0;
	    barabama.forEach(element => {
	        element.selector.style.order = x;
	        x++;
	    });
	}
} 
setInterval(sortByDate, 1500);

// function hwFix() {
//     if (document.URL == "https://journal.top-academy.ru/ru/main/homework/page/index") {
//     	setInterval(sortByDate, 2500);
    	
//     	//done in styles.css
//         setTimeout(function(){
//             var dogs = [
//                 ["0", "body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(1)"],
//                 ["3", "body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(2)"],
//                 ["2", "body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(3)"],
//                 ["1", "body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4)"]
//             ];
//             dogs.forEach(element => { document.querySelector(element[1]).style.order = element[0] });
//         }, 1500);
        
//         // useless sort button
//         setTimeout(function(){
//             var nawRow = document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.homeworks-navigation.row")
//             nawRow.style.justifyContent = "flex-end";
//             var updateButt = document.createElement("button")
//             updateButt.innerHTML = "Отсортировать ДЗ"
//             Object.assign(updateButt.style, {
//                 position: "relative",
//                 right: "15px",
//                 margin: "20px 0 -60px 0",
//                 width: "200px",
//                 height: "49.51px",
//                 backgroundColor: "white",
//                 borderRadius: "25px",
//                 outline: "0",
//                 border: "1px solid #e5ebf2",
//             });
//             nawRow.appendChild(updateButt);
//             updateButt.addEventListener('mouseover', () => {
//                 updateButt.style.filter = 'opacity(80%)';
//                 updateButt.style.cursor = "pointer";
//             });
//             updateButt.addEventListener('mouseout', () => {
//                 updateButt.style.filter = 'opacity(100%)';
//                 updateButt.style.cursor = "unset";
//             });
//             updateButt.addEventListener("click", sortByDate);
//         }, 1500);
//     }
// }
//
// window.navigation.addEventListener("navigate", () => {
//     hwFix();
// });
