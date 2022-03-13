const fs = require("fs");
const http = require("http");
const requests = require("requests");

const home = fs.readFileSync("index.html", "utf-8");
// console.log(home);
const replaceVal = (orgVal, newVal) =>{
    let temp = orgVal.replace("{%temp%}", (newVal.main.temp / 10).toFixed(2))
    temp = temp.replace("{%maxtemp%}", (newVal.main.temp_max /10).toFixed(2))
    temp = temp.replace("{%mintemp%}", (newVal.main.temp_min/10).toFixed(2))
    temp = temp.replace("{%city%}", newVal.name)
    temp = temp.replace("{%country%}", newVal.sys.country)
    temp = temp.replace("{%condition%}", newVal.weather[0].icon)
    return temp
}
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests("https://api.openweathermap.org/data/2.5/weather?q=Guwahati&appid=a494b9d810d5d732b657e11dab5693de")
      .on("data", function (chunk) {
        const objData = JSON.parse(chunk)
        const arrData = [objData]
        // console.log(arrData);
        const realTimeval = arrData.map((val) => replaceVal(home, val)).join('')
        res.write(realTimeval)
        // console.log(realTimeval);


      })
      .on("end", function (err) {
        if (err) return console.log("connection closed due to errors", err);

        res.end()
      });
  }
});

server.listen(8000, "127.0.0.1")
