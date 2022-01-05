
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
 
          <tr>
          <td>${list.reminder}</td>
          <td>${list.due}</td>
          <td>${list.details}</td>
          <td>${list.done} </td>
            

            `;
        });

        //Show On Our Screen All Data
        document.getElementById('reminders').innerHTML = output;

    });

    
  /* Writing to a jason file
  
  let obj = {
    reminder: 'Test',
    due: '12/12/2021',
    details: 'TEste adding',
    done: false,
  };

  let fs = require('fs'), jasonData = JSON.stringify(obj);

  fs.writeFile('../new.jason', jasonData, function(err) {
      if(err){
          console.log(err);
      }else{
          console.log('ok');
      }
  });


  */ 

function addReminder(name,due,details){


    let movies = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addMovie = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let movie = {
                id: Date.now(),
                title: document.getElementById('title').value,
                year: document.getElementById('yr').value
            }
            movies.push(movie);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            console.warn('added' , {movies} );
            let pre = document.querySelector('#msg pre');
            pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);

            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(movies) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', addMovie);
        });


}

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