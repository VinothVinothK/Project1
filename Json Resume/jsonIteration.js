var json = [{
    "name" : "Jack", 
    "age"   : "27",
    "city" : "Chennai",
},
{
    "name" : "Bruce", 
    "age"   : "28",
    "city" : "Salem",
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var data = json[i];

    console.log(data);
    console.log(data.name);
    console.log(data.age);
    console.log(data.city);

}
//for Each
json.forEach(function(data) { 
    console.log(data); 
    console.log(data.name);
    console.log(data.age);
    console.log(data.city);

});

//for In
for (var key in json) {
  console.log(json[key]);
  console.log(json[key].name);
  console.log(json[key].age);
  console.log(json[key].city);

}
//for Of

for (let data of json) {
    console.log(data); 
    console.log(data.name);
    console.log(data.age);
    console.log(data.city);
}
