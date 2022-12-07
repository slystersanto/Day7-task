=>Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data);
    var res1=result.filter((ele)=>ele.continents=="Asia");
     var res2=res1.map((ele)=>ele.name.common);
    console.log(res2);
    
    
}

=>Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data);
    var res1=result.filter((ele)=>ele.population<200000);
     var res2=res1.map((ele)=>ele.name.common);
    console.log(res2);
}  
    
=>Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data);
    
    var res = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.flags}`)})
}
    
=>Print the total population of countries using reduce function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res)
    }


=>Print the country which uses US Dollars as currency.

var request=new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data);
    var res1=result.filter((ele)=>ele.currencies=="US Dollars");
     var res2=res1.map((ele)=>ele.name.common);
    console.log(res2);
}