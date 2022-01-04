
//let myRequest = new Request("../reminder.jason")
"use strict";

fetch("../reminder.jason")
    .then(function(resp){
        return resp.jason();

    })
    .then(function(data){
        console.log(data.reminder);
    });



//Getting data from jason 
/*
const fs = require('fs');

fs.readFile('../reminder.jason', 'utf-8', (err, jasonString)=> {
    if(err){
        console.log(err);
    }else{
        const data = JSON.parse(jasonString);
        console.log(data.reminder);
    }

}

);
*/

//const fs = require('fs');
//const reminderFile = fs.readFileSync('../reminder.json', 'utf8');
//const reminders = JSON.parse(reminderFile);
/*
fetch('https://www.edgardpacheco.com/SSP-CA3/reminder.jason')

    .then(res => res.json())
    .then(data => {
      

        let author = data.results;
      

        //Get Data Value
        let output = "";

        author.forEach(function (list) {
            output += `
            <h1>TESTE: ${list.reminder} </h1>
            
       
            `;
        });

        //Show On Our Screen All Data
        document.getElementById('reminders').innerHTML = output;

    });

    */