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
            document.title = "Journal - " + dick[key];
        } 
    }
}

// funnyes button
function buttonCreate() {
	const container = document.createElement("div");
		container.style.position = "fixed";
		container.style.bottom = "20px";
		container.style.right = "20px";
		container.style.zIndex = "3000";
	 
	const toggleButton = document.createElement("button");
		toggleButton.textContent = "Funnyes";
		toggleButton.style.padding = "10px 10px";
		toggleButton.style.fontSize = "16px";
		toggleButton.style.cursor = "pointer";
		toggleButton.style.borderRadius = "8px";
		toggleButton.style.border = "unset";
		toggleButton.style.outline = "unset";
		toggleButton.style.fontWeight = "bolder";
		toggleButton.style.transitionDuration = "0.4s";
		toggleButton.style.color = "#fff";
		toggleButton.style.letterSpacing = "2.5px";
		toggleButton.style.backgroundColor = "#00000075"; 
		toggleButton.style.boxShadow = "#00000075 0px 0px 1px 1px, inset #00000075 0px 0px 2px 2px";
		toggleButton.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
		toggleButton.onmouseover = () => {
			toggleButton.style.boxShadow = "#00000045 0px 0px 2px 2px, inset #00000025 0px 0px 2px 2px";
			toggleButton.style.backgroundColor = "#00000090";
			toggleButton.style.letterSpacing = "3px";
		};
		toggleButton.onmouseout = () => {
			toggleButton.style.boxShadow = "#00000075 0px 0px 1px 1px, inset #00000075 0px 0px 2px 2px";
			toggleButton.style.backgroundColor = "#00000075";
			toggleButton.style.letterSpacing = "2.5px";
		};
		
	const menu = document.createElement("div");
		menu.style.display = "none";
		menu.style.position = "absolute";
		menu.style.bottom = "50px";
		menu.style.right = "0";
		menu.style.backgroundColor = "#00000075";
		menu.style.color = "#fff";
		menu.style.borderRadius = "8px";
		menu.style.boxShadow = "0 4px 8px #00000020";
		menu.style.width = "fit-content";
		menu.style.boxShadow = "#00000075 0px 0px 1px 1px, inset #00000075 0px 0px 2px 2px";
	
	const items = ["LGTV", "SadMode", /*"Invert",*/ "PoorEyesight"];
	items.forEach((text) => {
		const menuItem = document.createElement("div");
		menuItem.className = text;
		menuItem.textContent = text;
		menuItem.style.userSelect = "none";
		menuItem.style.padding = "10px";
		menuItem.style.cursor = "pointer";
		menuItem.style.backgroundColor = "#ffffff00";
		menuItem.style.letterSpacing = "0.5px";
		menuItem.style.borderRadius = "8px";
		menuItem.style.fontWeight = "bolder";
		menuItem.style.color = "red"; 
		menuItem.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
		menuItem.onmouseover = () => (menuItem.style.backgroundColor = "#00000030");
		menuItem.onmouseout = () => (menuItem.style.backgroundColor = "#ffffff00");
		menu.appendChild(menuItem);
	});
	
	toggleButton.addEventListener("click", () => {
		menu.style.display = menu.style.display === "none" ? "block" : "none";
	});
	
	container.appendChild(toggleButton);
	container.appendChild(menu);
	document.body.appendChild(container);
	
	const LGTV_button = document.querySelector(".LGTV");
	const SadMode_button = document.querySelector(".SadMode");
	// const Invert_button = document.querySelector(".Invert");
	const PoorEyesight_button = document.querySelector(".PoorEyesight");
	
	let LGTV_status = false;
	let SadMode_status = false;
	// let Invert_status = false;
	let PoorEyesight_status = false;

	const bodyElements = document.querySelectorAll("*:not(body)");
	
	setInterval(() => {
	    bodyElements.forEach(element => {
	        let filter = '';
	
	        if (LGTV_status) {
	            const LG_color = (Date.now() / 50) % 360;
	            filter += `hue-rotate(${LG_color}deg) `;
	        }
	        if (SadMode_status) {
	            filter += `grayscale(0.65)`;
	        }
	        // if (Invert_status) {
	        //     filter += `invert(1)`;
	        // }
	        if (PoorEyesight_status) {
	            filter += `blur(3px)`;
	        }
	        
	        element.style.filter = filter.trim() || "unset";
	    });
	}, 100);
	
	if (LGTV_button) {
	    LGTV_button.addEventListener("click", () => {
	        LGTV_status = !LGTV_status;
	        LGTV_button.style.color = LGTV_status ? "green" : "red";
	        LGTV_button.style.textShadow = LGTV_status ? 
	        			"-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff" : 
	        			"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
	    });
	}
	if (SadMode_button) {
	    SadMode_button.addEventListener("click", () => {
	        SadMode_status = !SadMode_status;
	        SadMode_button.style.color = SadMode_status ? "green" : "red";
	        SadMode_button.style.textShadow = SadMode_status ? 
	        			"-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff" : 
	        			"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
	    });
	}
	// if (Invert_button) {
	//     Invert_button.addEventListener("click", () => {
	//         Invert_status = !Invert_status;
	//         Invert_button.style.color = Invert_status ? "green" : "red";
	// 		Invert_button.style.textShadow = Invert_status ? 
	// 					"-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff" : 
	// 					"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
	//     });
	// }
	if (PoorEyesight_button) {
	    PoorEyesight_button.addEventListener("click", () => {
	        PoorEyesight_status = !PoorEyesight_status;
	        PoorEyesight_button.style.color = PoorEyesight_status ? "green" : "red";
	        PoorEyesight_button.style.textShadow = PoorEyesight_status ? 
	        			"-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff" : 
	        			"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
	    });
	}
}
setTimeout(buttonCreate, 500);

// revealing all current homework by pressing "show more"
function revealHW(HWelement) {
	if (document.URL.startsWith("https://journal.top-academy.ru/ru/main/homework/page/index") ||
    document.URL == "https://journal.top-academy.ru/ru/main/homework/page/index") {
	    if(document.body.contains(HWelement)) {
	        HWelement.querySelector("p.text-center > span").click();
	    }
    }
}

// sort by exp. date function, then call a function
function sortByDate(HWelement) {
	if (document.URL.startsWith("https://journal.top-academy.ru/ru/main/homework/page/index") ||
	document.URL == "https://journal.top-academy.ru/ru/main/homework/page/index") {
	    var barabama = [];
	    var doglet = HWelement.querySelector("div");
        let sons = doglet.querySelectorAll(".homework-item");
	    sons.forEach(son => {
            let dogs = son.querySelectorAll(".item-footer");
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
setInterval(function(){revealHW(document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(1)"))}, 350);
setInterval(function(){sortByDate(document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(1)"))}, 350);
setInterval(function(){revealHW(document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4)"))}, 350);
setInterval(function(){sortByDate(document.querySelector("body > mystat > ng-component > ng-component > div > div.content > div.wrapper > ng-component > div > div.items-homework > hw-item:nth-child(4)"))}, 350);
setInterval(addCustomCSS, 350);