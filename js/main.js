var listOfEvents = [
    ["10:30", "Бег на 100 метров"],
    ["10:30", "Прыжки в высоту"],
    ["11:30", "Бег на 1000 метров"],
    ["11:45", "Толканиe ядра"],
    ["12:00", "Тройной прыжок"],
    ["12:15", "Эстафета 4*400"]
];

var timeOfEvents = {
    start: "10:00",
    end:"13:30",
    interval:"15"
};

class ${
    constructor(selector){
        this.elems = document.querySelectorAll(selector);
    }

    on(event, callback){
        for(let i = 0; i < elems.length; i++){
            this.elems[i].addEventListener(event, callback);
        }
        return this;
    }
}

createEvents(listOfEvents);

function countOfTimeIntervals(timeS, timeE, interval){
    let hs = Number.parseInt(timeS.split(':')[0]);
    let he = Number.parseInt(timeE.split(':')[0]);
    let ms = Number.parseInt(timeS.split(':')[1]);
    let me = Number.parseInt(timeE.split(':')[1]);
    return (((he-hs)*60 + me - ms)/interval); 
}

function createEvents(listOfEvents){
    let event = document.querySelector("#events");
    let times = document.querySelector("#time-picker");
    let count = countOfTimeIntervals(timeOfEvents.start,timeOfEvents.end,timeOfEvents.interval);
    
    for(let i=0 ; i < Object.keys(listOfEvents).length; i++){
        event.innerHTML += `<div class='event'><input type="radio">
                                <div class="etime">${listOfEvents[i][0]}</div>
                                <div class="ename">${listOfEvents[i][1]}</div>
                                <div class="x"></div>
                            </div>`;
    }
    
    for(let i=0 ; i < count; i++){
        times.innerHTML += `<div class='times'></div>`;
    }
}