

var req= new XMLHttpRequest();
url="https://restcountries.eu/rest/v2/all"
req.open("GET",url,true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    var n=data.length;
    for(i=0;i<n;i++){
        try{
        countryname=data[i]["name"]
        var latlng=data[i].latlng;
        if(latlng==0) throw new Error("Latlng not found");
        lat=data[i]["latlng"][0];
        lon=data[i]["latlng"][1];
        newurl="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=08f06efc8e5262a43c16b133e86eda58"
        weatherFun(newurl,countryname);
        }
        catch(e){
            console.log("invalid latlng coordinates for "+countryname+" "+e.message)
        }
    }

}

function weatherFun(newurl,countryname){
    var req2=new XMLHttpRequest();
    req2.open("GET",newurl,true);
    req2.send();
    //let temp="Not found";//initialized if not found for perticular lat and lng
    req2.onload=function(){
        //console.log("hello")
        var data2=JSON.parse(this.response);
        temp=data2["main"]["temp"];
        console.log(countryname+" : "+temp)
    }
}