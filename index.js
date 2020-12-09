function showTime() {
    let startDate = new Date();
    let nowTimestamp = startDate.getTime();
    let hour, min, sec;

    setInterval(() => {
            nowTimestamp += 1000;
            let nowDate = new Date(nowTimestamp);
            hour = nowDate.getHours().toString().padStart(2, "0");
            min = nowDate.getMinutes().toString().padStart(2, "0");
            sec = nowDate.getSeconds().toString().padStart(2, "0");

            document.getElementById("ClockArea").innerText = `${hour}:${min}:${sec}`;
        }
        , 1000);
}

showTime();