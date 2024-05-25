let header = document.querySelector('#intro');
let anim = [
    { t: "Y", ms: 200 },
    { t: "YA", ms: 200 },
    { t: "YAS", ms: 200 },
    { t: "YASH", ms: 200 },
    { t: "YASH ", ms: 100 },
    { t: "YASH R", ms: 100 },
    { t: "YASH RO", ms: 100 },
    { t: "YASH ROO", ms: 100 },
    { t: "YASH ROOP", ms: 100 },
    { t: "YASH ROOP ", ms: 100 },
    { t: "YASH ROOP R", ms: 100 },
    { t: "YASH ROOP RA", ms: 100 },
    { t: "YASH ROOP RAI", ms: 200 },
    { t: "YASH ROOP RAI", ms: 200 },
    { t: "YASH ROOP RAI", ms: 200 },
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();