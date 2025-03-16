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

function calculateArea(){
    const areainput = document.getElementById('areainput').value;
    const inunit = document.getElementById('inunit').value;
    const outunit = document.getElementById('outunit').value;
    const resultarea = document.getElementById('areaoutput');
    if(inunit === 'sqm' && outunit === 'sqm'){
        resultarea.value = areainput;
    }
    if(inunit === 'sqm' && outunit === 'sqkm'){
        resultarea.value = areainput / 1000000;
    }
    if(inunit === 'sqm' && outunit == 'sqcm'){
        resultarea.value = areainput * 10000;
    }
    if(inunit === 'sqm' && outunit == 'sqmm'){
        resultarea.value = areainput * 1000000;
    }
    if(inunit === 'sqm' && outunit === 'sqmi'){
        resultarea.value = areainput / 2589988.110336;
    }
    if(inunit === 'sqkm' && outunit === 'sqkm'){
        resultarea.value = areainput;
    }
    if(inunit === 'sqkm' && outunit === 'sqm'){
        resultarea.value = areainput * 1000000;
    }
    if(inunit === 'sqkm' && outunit === 'sqcm'){
        resultarea.value = areainput * 10000000000;
    }
    if(inunit === 'sqkm' && outunit === 'sqmm'){
        resultarea.value = areainput * 1000000000000;
    }
    if(inunit === 'sqkm' && outunit === 'sqmi'){
        resultarea.value = areainput / 2.59;
    }
    if(inunit === 'sqcm' && outunit === 'sqcm'){
        resultarea.value = areainput;
    }
    if(inunit === 'sqcm' && outunit === 'sqm'){
        resultarea.value = areainput / 10000;
    }
    if(inunit === 'sqcm' && outunit === 'sqkm'){
        resultarea.value = areainput / 10000000000;
    }
    if(inunit === 'sqcm' && outunit === 'sqmm'){
        resultarea.value = areainput * 100;
    }
    if(inunit === 'sqcm' && outunit === 'sqmi'){
        resultarea.value = areainput / 2589988.110336;
    }
    if(inunit === 'sqmm' && outunit === 'sqmm'){
        resultarea.value = areainput;
    }
    if(inunit === 'sqmm' && outunit === 'sqm'){
        resultarea.value = areainput / 1000000;
    }
    if(inunit === 'sqmm' && outunit === 'sqkm'){
        resultarea.value = areainput / 1000000000000;
    }
    if(inunit === 'sqmm' && outunit === 'sqcm'){
        resultarea.value = areainput / 100;
    }
    if(inunit === 'sqmm' && outunit === 'sqmi'){
        resultarea.value = areainput / 2589988.110336;
    }
    if(inunit === 'sqmi' && outunit === 'sqmi'){
        resultarea.value = areainput;
    }
    if(inunit === 'sqmi' && outunit === 'sqm'){
        resultarea.value = areainput * 2589988.110336;
    }
    if(inunit === 'sqmi' && outunit === 'sqkm'){
        resultarea.value = areainput * 2.59;
    }
    if(inunit === 'sqmi' && outunit === 'sqcm'){
        resultarea.value = areainput * 2589988.110336;
    }
    if(inunit === 'sqmi' && outunit === 'sqmm'){
        resultarea.value = areainput * 2589988.110336;
    }
}


function calculateBMI(){
    const weight = document.getElementById('weightinput').value;
    const height = document.getElementById('heightinput').value;
    const bmi = document.getElementById('BMI');
    const bmistatus = document.getElementById('BMIstatus');
    
    const result = weight * 10000 / (height * height);
    bmi.innerHTML = 'BMI: ' + result;
    if(result < 18.5){
        bmistatus.innerHTML = 'Underweight';
    }
    if(result >= 18.5 && result <= 24.9){
        bmistatus.innerHTML = 'Normal weight';
    }
    if(result >= 25 && result <= 29.9){
        bmistatus.innerHTML = 'Overweight';
    }
}

function calculatedata(){
    const indata = document.getElementById('datainput').value;
    const inunit = document.getElementById('datainunit').value;
    const outunit = document.getElementById('dataioutunit').value;
    const outdata = document.getElementById('dataoutput');
    if(inunit === 'b'&& outunit === 'b'){
        outdata.value = indata;
    }
    if(inunit === 'b'&& outunit === 'kb'){
        outdata.value = indata / 1024;
    }
    if(inunit === 'b'&& outunit === 'mb'){
        outdata.value = indata / 1048576;
    }
    if(inunit === 'b'&& outunit === 'gb'){
        outdata.value = indata / 1073741824;
    }
    if(inunit === 'b'&& outunit === 'tb'){
        outdata.value = indata / 1099511627776;
    }
    if(inunit === 'b'&& outunit === 'pb'){
        outdata.value = indata / 1125899906842624;
    }
    if(inunit === 'kb'&& outunit === 'kb'){
        outdata.value = indata;
    }
    if(inunit === 'kb'&& outunit === 'b'){
        outdata.value = indata * 1024;
    }
    if(inunit === 'kb'&& outunit === 'mb'){
        outdata.value = indata / 1024;
    }
    if(inunit === 'kb'&& outunit === 'gb'){
        outdata.value = indata / 1048576;
    }
    if(inunit === 'kb'&& outunit === 'tb'){
        outdata.value = indata / 1073741824;
    }
    if(inunit === 'kb'&& outunit === 'pb'){
        outdata.value = indata / 1125899906842624;
    }
    if(inunit === 'mb'&& outunit === 'mb'){
        outdata.value = indata;
    }
    if(inunit === 'mb'&& outunit === 'b'){
        outdata.value = indata * 1048576;
    }
    if(inunit === 'mb'&& outunit === 'kb'){
        outdata.value = indata * 1024;
    }
    if(inunit === 'mb'&& outunit === 'gb'){
        outdata.value = indata / 1024;
    }
    if(inunit === 'mb'&& outunit === 'tb'){
        outdata.value = indata / 1048576;
    }
    if(inunit === 'mb'&& outunit === 'pb'){
        outdata.value = indata / 1073741824;
    }
    if(inunit === 'gb'&& outunit === 'gb'){
        outdata.value = indata;
    }
    if(inunit === 'gb'&& outunit === 'b'){
        outdata.value = indata * 1073741824;
    }
    if(inunit === 'gb'&& outunit === 'kb'){
        outdata.value = indata * 1048576;
    }
    if(inunit === 'gb'&& outunit === 'mb'){
        outdata.value = indata * 1024
    }
    if(inunit === 'gb'&& outunit === 'tb'){
        outdata.value = indata / 1024;
    }
    if(inunit === 'gb'&& outunit === 'pb'){
        outdata.value = indata / 1048576;
    }
    if(inunit === 'tb'&& outunit === 'tb'){
        outdata.value = indata;
    }
    if(inunit === 'tb'&& outunit === 'b'){
        outdata.value = indata * 1099511627776;
    }
    if(inunit === 'tb'&& outunit === 'kb'){
        outdata.value = indata * 1073741824;
    }
    if(inunit === 'tb'&& outunit === 'mb'){
        outdata.value = indata * 1048576;
    }
    if(inunit === 'tb'&& outunit === 'gb'){
        outdata.value = indata * 1024
    }
    if(inunit === 'tb'&& outunit === 'pb'){
        outdata.value = indata / 1024;
    }
    if(inunit === 'pb'&& outunit === 'pb'){
        outdata.value = indata;
    }
    if(inunit === 'pb'&& outunit === 'b'){
        outdata.value = indata * 1125899906842624;
    }
    if(inunit === 'pb'&& outunit === 'kb'){
        outdata.value = indata * 1099511627776;
    }
    if(inunit === 'pb'&& outunit === 'mb'){
        outdata.value = indata * 1073741824;
    }
    if(inunit === 'pb'&& outunit === 'gb'){
        outdata.value = indata * 1048576;
    }
    if(inunit === 'pb'&& outunit === 'tb'){
        outdata.value = indata * 1024;
    }
}

function Discount(){
    const price = document.getElementById('Originalprice').value;
    const discount = document.getElementById('Discount').value;
    const result = document.getElementById('Finalprice');
    const result1 = document.getElementById('Saveafterdiscount');
    result.value = price - (price * discount / 100);
    result1.innerHTML = 'You save: ' + price * discount / 100;
}

function calculateLength(){
    const leninput = document.getElementById('lengthin').value;
    const lenoutput = document.getElementById('lengthout');
    const inunit = document.getElementById('leninunit').value;
    const outunit = document.getElementById('lenoutunit').value;
    if(inunit === 'm' && outunit === 'm'){
        lenoutput.value = leninput;
    }
    if(inunit === 'm' && outunit === 'km'){
        lenoutput.value = leninput / 1000;
    }
    if(inunit === 'm' && outunit === 'cm'){
        lenoutput.value = leninput * 100;
    }
    if(inunit === 'm' && outunit === 'mm'){
        lenoutput.value = leninput * 1000;
    }
    if(inunit === 'm' && outunit === 'ft'){
        lenoutput.value = leninput * 3.28084;
    }
    if(inunit === 'm' && outunit === 'in'){
        lenoutput.value = leninput * 39.3701;
    }
    if(inunit === 'km' && outunit === 'km'){
        lenoutput.value = leninput;
    }
    if(inunit === 'km' && outunit === 'm'){
        lenoutput.value = leninput * 1000;
    }
    if(inunit === 'km' && outunit === 'cm'){
        lenoutput.value = leninput * 100000;
    }
    if(inunit === 'km' && outunit === 'mm'){
        lenoutput.value = leninput * 1000000;
    }
    if(inunit === 'km' && outunit === 'ft'){
        lenoutput.value = leninput * 3280.84;
    }
    if(inunit === 'km' && outunit === 'in'){
        lenoutput.value = leninput * 39370.1;
    }
    if(inunit === 'cm' && outunit === 'cm'){
        lenoutput.value = leninput;
    }
    if(inunit === 'cm' && outunit === 'm'){
        lenoutput.value = leninput / 100;
    }
    if(inunit === 'cm' && outunit === 'km'){
        lenoutput.value = leninput / 100000;
    }
    if(inunit === 'cm' && outunit === 'mm'){
        lenoutput.value = leninput * 10;
    }
    if(inunit === 'cm' && outunit === 'ft'){
        lenoutput.value = leninput / 30.48;
    }
    if(inunit === 'cm' && outunit === 'in'){
        lenoutput.value = leninput / 2.54;
    }
    if(inunit === 'mm' && outunit === 'mm'){
        lenoutput.value = leninput;
    }
    if(inunit === 'mm' && outunit === 'm'){
        lenoutput.value = leninput / 1000;
    }
    if(inunit === 'mm' && outunit === 'km'){
        lenoutput.value = leninput / 1000000;
    }
    if(inunit === 'mm' && outunit === 'cm'){
        lenoutput.value = leninput / 10;
    }
    if(inunit === 'mm' && outunit === 'ft'){
        lenoutput.value = leninput / 304.8;
    }
    if(inunit === 'mm' && outunit === 'in'){
        lenoutput.value = leninput / 25.4;
    }
    if(inunit === 'ft' && outunit === 'ft'){
        lenoutput.value = leninput;
    }
    if(inunit === 'ft' && outunit === 'm'){
        lenoutput.value = leninput / 3.28084;
    }
    if(inunit === 'ft' && outunit === 'km'){
        lenoutput.value = leninput / 3280.84;
    }
    if(inunit === 'ft' && outunit === 'cm'){
        lenoutput.value = leninput * 30.48;
    }
    if(inunit === 'ft' && outunit === 'mm'){
        lenoutput.value = leninput * 304.8;
    }
    if(inunit === 'ft' && outunit === 'in'){
        lenoutput.value = leninput * 12;
    }
    if(inunit === 'in' && outunit === 'in'){
        lenoutput.value = leninput;
    }
    if(inunit === 'in' && outunit === 'm'){
        lenoutput.value = leninput / 39.3701;
    }
    if(inunit === 'in' && outunit === 'km'){
        lenoutput.value = leninput / 39370.1;
    }
    if(inunit === 'in' && outunit === 'cm'){
        lenoutput.value = leninput * 2.54;
    }
    if(inunit === 'in' && outunit === 'mm'){
        lenoutput.value = leninput * 25.4;
    }
    if(inunit === 'in' && outunit === 'ft'){
        lenoutput.value = leninput / 12;
    }

}

function massconvert(){
    const massinput = document.getElementById('massin').value;
    const massoutput = document.getElementById('massout');
    const inunit = document.getElementById('massinunit').value;
    const outunit = document.getElementById('massoutunit').value;
    if(inunit === 'kg' && outunit === 'kg'){
        massoutput.value = massinput;
    }
    if(inunit === 'kg' && outunit === 'g'){
        massoutput.value = massinput * 1000;
    }
    if(inunit === 'kg' && outunit === 'mg'){
        massoutput.value = massinput * 1000000;
    }
    if(inunit === 'kg' && outunit === 'lb'){
        massoutput.value = massinput * 2.20462;
    }
    if(inunit === 'kg' && outunit === 'oz'){
        massoutput.value = massinput * 35.274;
    }
    if(inunit === 'kg' && outunit === 't'){
        massoutput.value = massinput / 1000;
    }
    if(inunit === 'g' && outunit === 'g'){
        massoutput.value = massinput;
    }
    if(inunit === 'g' && outunit === 'kg'){
        massoutput.value = massinput / 1000;
    }
    if(inunit === 'g' && outunit === 'mg'){
        massoutput.value = massinput * 1000;
    }
    if(inunit === 'g' && outunit === 'lb'){
        massoutput.value = massinput / 453.592;
    }
    if(inunit === 'g' && outunit === 'oz'){
        massoutput.value = massinput / 28.3495;
    }
    if(inunit === 'g' && outunit === 't'){
        massoutput.value = massinput / 1000000;
    }
    if(inunit === 'mg' && outunit === 'mg'){
        massoutput.value = massinput;
    }
    if(inunit === 'mg' && outunit === 'kg'){
        massoutput.value = massinput / 1000000;
    }
    if(inunit === 'mg' && outunit === 'g'){
        massoutput.value = massinput / 1000;
    }
    if(inunit === 'mg' && outunit === 'lb'){
        massoutput.value = massinput / 453592;
    }
    if(inunit === 'mg' && outunit === 'oz'){
        massoutput.value = massinput / 28349.5;
    }
    if(inunit === 'mg' && outunit === 't'){
        massoutput.value = massinput / 1000000000;
    }
    if(inunit === 'lb' && outunit === 'lb'){
        massoutput.value = massinput;
    }
    if(inunit === 'lb' && outunit === 'kg'){
        massoutput.value = massinput / 2.20462;
    }
    if(inunit === 'lb' && outunit === 'g'){
        massoutput.value = massinput * 453.592;
    }
    if(inunit === 'lb' && outunit === 'mg'){
        massoutput.value = massinput * 453592;
    }
    if(inunit === 'lb' && outunit === 'oz'){
        massoutput.value = massinput * 16;
    }
    if(inunit === 'lb' && outunit === 't'){
        massoutput.value = massinput / 2204.62;
    }
    if(inunit === 'oz' && outunit === 'oz'){
        massoutput.value = massinput;
    }
    if(inunit === 'oz' && outunit === 'kg'){
        massoutput.value = massinput / 35.274;
    }
    if(inunit === 'oz' && outunit === 'g'){
        massoutput.value = massinput * 28.3495;
    }   
    if(inunit === 'oz' && outunit === 'mg'){
        massoutput.value = massinput * 28349.5;
    }
    if(inunit === 'oz' && outunit === 'lb'){
        massoutput.value = massinput / 16;
    }
    if(inunit === 'oz' && outunit === 't'){
        massoutput.value = massinput / 35273.962;
    }
    if(inunit === 't' && outunit === 't'){
        massoutput.value = massinput;
    }
    if(inunit === 't' && outunit === 'kg'){
        massoutput.value = massinput * 1000;
    }
    if(inunit === 't' && outunit === 'g'){
        massoutput.value = massinput * 1000000;
    }
    if(inunit === 't' && outunit === 'mg'){
        massoutput.value = massinput * 1000000000;
    }
    if(inunit === 't' && outunit === 'lb'){
        massoutput.value = massinput * 2204.62;
    }
    if(inunit === 't' && outunit === 'oz'){
        massoutput.value = massinput * 35273.962;
    }
}


function calculateTemp(){
    const tempinput = document.getElementById('tempin').value;
    const tempoutput = document.getElementById('tempout');
    const inunit = document.getElementById('tempinunit').value;
    const outunit = document.getElementById('tempoutunit').value;
    if(inunit === 'c' && outunit === 'c'){
        tempoutput.value = tempinput;
    }
    if(inunit === 'c' && outunit === 'f'){
        tempoutput.value = (tempinput * 9/5) + 32;
    }
    if(inunit === 'c' && outunit === 'k'){
        tempoutput.value = tempinput + 273.15;
    }
    if(inunit === 'f' && outunit === 'f'){
        tempoutput.value = tempinput;
    }
    if(inunit === 'f' && outunit === 'c'){
        tempoutput.value = (tempinput - 32) * 5/9;
    }
    if(inunit === 'f' && outunit === 'k'){
        tempoutput.value = (tempinput - 32) * 5/9 + 273.15;
    }
    if(inunit === 'k' && outunit === 'k'){
        tempoutput.value = tempinput;
    }
    if(inunit === 'k' && outunit === 'c'){
        tempoutput.value = tempinput - 273.15;
    }
    if(inunit === 'k' && outunit === 'f'){
        tempoutput.value = (tempinput - 273.15) * 9/5 + 32;
    }

}

function calculateTime(){
    const timeinput = document.getElementById('timeinput').value;
    const timeoutput = document.getElementById('timeoutput');
    const inunit = document.getElementById('timeinputunit').value;
    const outunit = document.getElementById('timeoutputunit').value;
    if(inunit === 's' && outunit === 's'){
        timeoutput.value = timeinput;
    }
    if(inunit === 's' && outunit === 'm'){
        timeoutput.value = timeinput / 60;
    }
    if(inunit === 's' && outunit === 'h'){
        timeoutput.value = timeinput / 3600;
    }
    if(inunit === 'm' && outunit === 'm'){
        timeoutput.value = timeinput;
    }
    if(inunit === 'm' && outunit === 's'){
        timeoutput.value = timeinput * 60;
    }
    if(inunit === 'm' && outunit === 'h'){
        timeoutput.value = timeinput / 60;
    }
    if(inunit === 'h' && outunit === 'h'){
        timeoutput.value = timeinput;
    }
    if(inunit === 'h' && outunit === 's'){
        timeoutput.value = timeinput * 3600;
    }
    if(inunit === 'h' && outunit === 'm'){
        timeoutput.value = timeinput * 60;
    }
}