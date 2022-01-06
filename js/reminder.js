
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



  let movies = [];
  // example {id:1592304983049, title: 'Deadpool', year: 2015}

  const addMovie = (ev)=>{
      ev.preventDefault();  //to stop the form submitting
      const movie = {
         
          reminder: document.getElementById('reminder').value,
          due: document.getElementById('due').value,
          details: document.getElementById('details').value,
          Priority: document.querySelector('input[name="priority"]:checked').value
      }
      movies.push(movie);
      document.forms[0].reset(); // to clear the form for the next entries
      //document.querySelector('form').reset();

      //for display purposes only
      console.warn('added' , {movies} );
      const pre = document.querySelector('#msg pre');
      pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

      //saving to localStorage
      localStorage.setItem('MyMovieList', JSON.stringify(movies) );

      // TESTING ADD JASON

      const fs = require('fs')

      const addReminder = (movie) => {
          const finished = (error) =>{
              if(error){
                  console.error(error)
                  return;
              }else{
                  console.log('Reminder added')
              }
          }

          console.log('dado:')
          const jsonData = JSON.stringify(movie, null, 2)
          fs.writeFile('../new.json', jsonData, finished)
      }

      addReminder(movie)

      // TESTING ADD JASON



  }
  document.addEventListener('DOMContentLoaded', ()=>{
      document.getElementById('btn').addEventListener('click', addMovie);
  });



/*
  var fs = requere('fs');

// create a JSON object
const user = {
    "id": 1,
    "name": "John Doe",
    "age": 22
};

// convert JSON object to string
const data = JSON.stringify(user);

// write JSON string to a file
fs.writeFile('user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});*/