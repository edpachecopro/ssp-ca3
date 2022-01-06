
loadData();

function loadData(){

fetch('../reminder.json')

    .then(res => res.json())
    .then(data => {
      

        let author = data.results;
      

        //Get Data Value
        let output = "";

        author.forEach(function (list) {
            console.log(list.reminder);
            output += `
 
          <tr>
          <td>${list.reminder}</td>
          <td>${list.due}</td>
          <td>${list.details}</td>
          <td>${list.priority} </td>
            

            `;
        });

        //Show On Our Screen All Data
        document.getElementById('reminders').innerHTML = output;

    });

}

  let newReminder = [];


  const addReminder = (ev)=>{
      ev.preventDefault();  //to stop the form submitting
      const reminder = {
         
          reminder: document.getElementById('reminder').value,
          due: document.getElementById('due').value,
          details: document.getElementById('details').value,
          Priority: document.querySelector('input[name="priority"]:checked').value
      }

      newReminder.push(reminder);

      document.forms[0].reset(); // to clear the form for the next entries
    

      //for display purposes only
      console.warn('added' , {newReminder} );
      const pre = document.querySelector('#msg pre');
      pre.textContent = '\n' + JSON.stringify(newReminder, '\t', 2);

      //saving to localStorage
      localStorage.setItem('Reminder', JSON.stringify(newReminder) );

      // TESTING ADD JASON

      const fs = require('fs');

      function addReminder(reminder) {
          const finished = (error) => {
              if (error) {
                  console.error(error);
                  return;
              } else {
                  console.log('Reminder added');
              }
          };

          console.log('dado:');
          const jsonData = JSON.stringify(reminder, null, 2);
          fs.writeFile('new.json', jsonData, finished);
      }

      addReminder(reminder);

      // TESTING ADD JASON



  }
  document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('btn').addEventListener('click', addReminder);
  });

