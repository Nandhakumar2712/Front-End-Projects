const disp = document.getElementById("stp");
let isrunning = false;
let elapsed = 0;
let startTime = 0;
let time  = null;


function start()
{
    if(!isrunning)
    {
        startTime = Date.now() - elapsed;
        time = setInterval(update,1)
        isrunning = true;
        console.log("running");
    }
}

function stop()
{
    if(isrunning)
    { 
        clearInterval(time);
        elapsed = Date.now() - startTime;
        isrunning  = false;
        console.log("stop");
    }
   
}

function reset()
{

    clearInterval(time);
    elapsed = 0;
    startTime = 0;
    isrunning  = false;
    disp.textContent ="00:00:00:00";
}

function update()
{
    const curtime = Date.now();
    elapsed = curtime - startTime;

    let hrs = Math.floor(elapsed / (1000 * 60 * 60));
    let min = Math.floor(elapsed / (1000 * 60)%60);
    let sec = Math.floor(elapsed / 1000 % 60);
    let milli  = Math.floor(elapsed %1000/10);

    hrs = String(hrs).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    milli= String(milli).padStart(2,"0");

    disp.textContent = `${hrs}:${min}:${sec}:${milli}`;
}