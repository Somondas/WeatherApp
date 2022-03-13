// TODO: Select all the elements 
const curDate = document.getElementById("date");
const  icon = document.getElementById("icon");

// Now use date function to get the currect day




// currentDay()
const currDate = () => {
    const currentDay = () =>{
        let date = new Date()
        let weekday = ['sun', "mon", 'tue', 'wed', 'thu', 'fri', 'sat']
        return weekday[date.getDay()];
    }
    // let day = currentDay()
    let m_name = ['jan','feb', 'mar', "api", 'may', 'jun', 'jul', 'aug', 'sep', 'oct','nov','dec']
    let now = new Date()
    let month = m_name[now.getMonth()]
    let date = now.getDate()
    let hour = now.getHours();
    let min = now.getMinutes();
    let period = "AM"
    if(hour > 11){
        period = "PM"
        if(hour >12) hour -= 12
    }
    if(min < 10){
        min = "0" + min
    }
    return`${currentDay()} | ${month} ${date} | ${hour}:${min}${period}`;

}
curDate.innerHTML = currDate()
