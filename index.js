function showTime() {
    let startDate = new Date();
    let nowTimestamp = startDate.getTime();
    let hour, min, sec;

    setInterval(() => {
            nowTimestamp += 1000;
            let nowDate = new Date(nowTimestamp);
            hour = nowDate.getHours();
            min = nowDate.getMinutes();
            sec = nowDate.getSeconds();

            document.getElementById("ClockArea").innerText = `${hour}:${min}:${sec}`;
        }
        , 1000);
}

showTime();