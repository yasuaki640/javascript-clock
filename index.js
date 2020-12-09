function showTime() {
    let startDate = new Date();
    let nowDate
    let nowTimestamp = startDate.getTime();
    let hour, min, sec, session;

    setInterval(() => {
            nowTimestamp += 1000;
            nowDate = new Date(nowTimestamp);

            hour = nowDate.getHours();
            session = (hour > 12) ? "PM" : "AM";

            if (hour > 12) {
                hour -= 12;
            } else if (hour === 0) {
                hour = 12
            }

            hour = hour.toString().padStart(2, "0");
            min = nowDate.getMinutes().toString().padStart(2, "0");
            sec = nowDate.getSeconds().toString().padStart(2, "0");

            document.getElementById("ClockArea").innerText = `${hour}:${min}:${sec} ${session}`;
        }
        , 1000);
}

showTime();