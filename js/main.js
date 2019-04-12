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
    end: "13:30",
    interval:"15"
};

class eventTime{
    constructor(stime,etime, interval){
        this.sh = stime.split(':')[0];
        this.sm = stime.split(':')[1];
        this.eh = etime.split(':')[0];
        this.em = etime.split(':')[1];
        this.interval = interval;
    }
    diff(){
        let tarr = [], i=0,
            sh = Number.parseInt(this.sh),
            eh = Number.parseInt(this.eh),
            sm = Number.parseInt(this.sm),
            em = Number.parseInt(this.em),
            interval = Number.parseInt(this.interval);
        while(sh<eh||sm<em)
        {
            sm=sm+interval;
            if(sm>59)
            {
                sm=sm-60;
                sh++;
            };
            if(sm>9)
                tarr[i]=`${sh}:${sm}`;
            else 
                tarr[i]=`${sh}:0${sm}`;
            i++;
        };
        return tarr;
    }
}

class slctIt{
    constructor(selector){
        this.elems = document.querySelectorAll(selector);
    }
    
    on(event, callback){
        for(let i = 0; i < this.elems.length; i++){
            this.elems[i].addEventListener(event, callback);
        }
        return this;
    }
}

createEvents(listOfEvents);

function createEvents(listOfEvents){
    let event = document.querySelector("#events");
    let times = document.querySelector("#time-picker");
    
    for(let i=0 ; i < Object.keys(listOfEvents).length; i++){
        event.innerHTML += `<div class='event'>
        <input type="checkbox">
        <div class="etime">${listOfEvents[i][0]}</div>
        <div class="ename">${listOfEvents[i][1]}</div>
        <div class="x"></div>
        </div>`;
    }
    
    let hs = new eventTime(timeOfEvents.start,timeOfEvents.end, timeOfEvents.interval);
    for(let i=0 ; i < hs.diff().length; i++){
        times.innerHTML += `<div class='times'>${hs.diff()[i]}</div>`;
    }
}

(new slctIt(".times")).on('mousedown', function(){    
    if(document.querySelector(".dark-back")){
        document.querySelector(".dark-back").classList.remove("dark-back");
    }
    this.classList.add("dark-back");
});


(new slctIt(".x")).on('mousedown', function(){
    this.style.backgroundPosition = "1px 9px";
}).on('mouseup', function(){
    this.style.backgroundPosition = "0px 8px";
    this.parentNode.remove(".event");
});

(new slctIt("#new-event")).on('mousedown', function(){
    this.style.top = "1px";
    this.style.left = "1px";
}).on('mouseup', function(){
    this.style.top = "0px";
    this.style.left = "0px";
    document.querySelector(".form").style.display = "block";
});

(new slctIt(".back")).on('click', function(){
    document.querySelector(".form").style.display = "none";
});
