function calculateAge(){
    const startdate = new Date(document.getElementById('fromdateInput').value);   
    const enddate = new Date(document.getElementById('todateInput').value);
    
    const timeDifference = Math.abs(startdate.getTime() - enddate.getTime());
    const insecond = timeDifference / 1000;
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
    console.log(daysDifference);
    const years = Math.floor(daysDifference / 365);
    const months = Math.floor(daysDifference / 365 * 12);
    const hours = Math.floor(insecond / 3600);
    const minutes = Math.floor(insecond / 60);
    const year = document.getElementById('years');
    year.innerHTML = 'Years: <br><br> ' + years;
    const month = document.getElementById('months');
    month.innerHTML = 'Months: <br><br> ' + months;
    const hour = document.getElementById('hours');
    hour.innerHTML = 'Hours: <br><br> ' + hours;
    const minute = document.getElementById('minutes');
    minute.innerHTML = 'Minutes: <br><br> ' + minutes;
    const second = document.getElementById('seconds');
    second.innerHTML = 'Seconds: <br><br> ' + insecond;
    const days = document.getElementById('days');
    days.innerHTML = 'Days: <br><br> ' + daysDifference;
}