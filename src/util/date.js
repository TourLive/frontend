// For todays date;
Date.prototype.today = function () {
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"."+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"."+ this.getFullYear();
};

// For the time now
Date.prototype.timeNow = function () {
    return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
};

export function mapValueToTimeString(value){
    console.log("value: "+ value);
    let days = Math.floor(value/(3600*24));
    console.log(days);
    let hours = Math.floor((value - (days * 86400)) / 3600);
    console.log(hours);
    let minutes = Math.floor((value - (days * 86400) - (hours * 3600)) / 60);
    console.log(minutes);
    let seconds = Math.floor(value - (days * 86400) - (hours * 3600) - (minutes * 60));
    console.log(seconds);
    hours += (24 * days);
    console.log(hours);
    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    return hours + ":" + displayMinutes + ":" + displaySeconds + " h";
}