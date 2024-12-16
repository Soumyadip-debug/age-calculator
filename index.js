const inputData = document.querySelector('#inputdate');
const button = document.querySelector('#enter');
const resultValue = document.querySelector('#result');

function calculateAge(){
    let birthDate = new Date(inputData.value);

    let day1 = birthDate.getDate();
    let month1 = birthDate.getMonth() +1;
    let year1 = birthDate.getFullYear();

    let today = new Date();

    let day2 = today.getDate();
    let month2 = today.getMonth() +1;
    let year2 = today.getFullYear();

    let day3,month3,year3;

    year3 = year2 - year1;

    if(month2 >= month1){
        month3 = month2 - month1;
    }else{
        year3--;
        month3 = 12 + month2 - month1;
    }

    if(day2 >= day1){
        day3 = day2 - day1;
    }else{
        month3 --;
        day3 = 31 + day2 - day1;
    }

    

    resultValue.textContent  = `Your age is ${year3} years, ${month3} months, and ${day3} days.`;

}

button.addEventListener('click',calculateAge);