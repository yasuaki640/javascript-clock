function showTime() {
    let date = new Date();
    let timestamp = date.getTime();
    setInterval(() => {
            timestamp = timestamp + 1000;
            document.getElementById("ClockArea").innerText = timestamp;
        }
        , 1000);
}

showTime();