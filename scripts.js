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

// revealing all current homework by pressing "show more"
function revealHW() {
	if (document.URL.startsWith("https://journal.top-academy.ru/ru/main/homework/page/index") ||
    document.URL == "https://journal.top-academy.ru/ru/main/homework/page/index") {
	    if(document.body.contains(document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4)"))) {
	        document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4)").querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4) > p.text-center > span").click();
	    }
    }
}

// sort by exp. date function, then call a function
function sortByDate() {
	if (document.URL.startsWith("https://journal.top-academy.ru/ru/main/homework/page/index") ||
	document.URL == "https://journal.top-academy.ru/ru/main/homework/page/index") {
	    var barabama = [];
	    var doglet = document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4) > div");
        let sons = doglet.querySelectorAll(".homework-item");
	    sons.forEach(son => {
            let dogs = son.querySelectorAll(".item-footer")
            dogs.forEach(element => {
                let data = element.innerText.split("\n")[2].split(".");
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

// custom css for login page
function addCustomCSS() {
    if (document.URL.startsWith("https://journal.top-academy.ru/ru/auth/login/index") ||
    document.URL == "https://journal.top-academy.ru/ru/auth/login/index") {
	    const style = document.createElement('style');
	    style.type = 'text/css';
	
	    const cssCode = `
	    body {
	        background: linear-gradient(60deg, 
	            hsl(255deg 58% 66%) 0%, 
	            hsl(205deg 90% 61%) 20%, 
	            hsl(191deg 78% 63%) 40%, 
	            hsl(175deg 63% 67%) 60%, 
	            hsl(153deg 63% 68%) 80%, 
	            hsl(104deg 56% 69%) 100%);
	        background-size: 500% 500%;  
	        animation: gradient 15s ease infinite;
	    }
	
	    @keyframes gradient {
	        0% { background-position: 0% 50% }
	        50% { background-position: 100% 50% }
	        100% { background-position: 0% 50% }
	    }
	
	    #cover-caption > div > div > div {
	        background: white;
	        border-top: 15px solid #d91842;
	        border-right: 15px solid #d91842;
	        border-radius: 5px 20px 5px 20px;
	        filter: drop-shadow(16px 16px 20px rgba(0, 0, 0, 0.6)); 
	    }
	
	    .auth-decoration {
	        border: unset;
	    }
	
	    #cover-caption > h1 {
	        --border-thc: 7px;
	        --border-col: #d91842;
	        margin: 0px 0px 20px 0px !important;
	        color: white;
	        font-family: var(--aka-text-font);
	        font-size: 4rem;
	        font-weight: bolder;
	        letter-spacing: 14px;
	        text-shadow: 
	            var(--border-thc) 0 var(--border-col), 
	            calc(var(--border-thc) * -1) 0 var(--border-col), 
	            0 var(--border-thc) var(--border-col), 
	            0 calc(var(--border-thc) * -1) var(--border-col);
	        filter: drop-shadow(8px 8px 10px rgba(0, 0, 0, 0.6)); 
	    }`;
	
	    style.appendChild(document.createTextNode(cssCode));
	
	    document.head.appendChild(style);
    }
} 

// shit code, don't care
setInterval(nameFix, 350);
setInterval(revealHW, 350);
setInterval(sortByDate, 350);
setInterval(addCustomCSS, 350);