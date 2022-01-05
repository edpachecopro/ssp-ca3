
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

fetch('../reminder.jason')

    .then(res => res.json())
    .then(data => {
      

        let author = data.results;
      

        //Get Data Value
        let output = "";

        author.forEach(function (list) {
            console.log(list.reminder);
            output += `
        
 
       
        
          <td>${list.reminder}</td>
          <td>${list.due}</td>
          <td>${list.details}</td>
          <td></td>
            
       


       
            `;
        });

        //Show On Our Screen All Data
        document.getElementById('reminders').innerHTML = output;

    });

    