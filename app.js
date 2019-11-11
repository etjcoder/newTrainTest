// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyDS0nsPGirJ6SEqIXQKznPTWugv-_okKF8",
    authDomain: "fir-test1-7cabc.firebaseapp.com",
    databaseURL: "https://fir-test1-7cabc.firebaseio.com",
    projectId: "fir-test1-7cabc",
    storageBucket: "fir-test1-7cabc.appspot.com",
  }
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var destinationName = $("#destination-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
    var nextArrival = $("#arrival-input").val().trim()
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      trainName,
      destinationName,
      frequency,
      nextArrival
    };
  
    // Uploads employee data to the database
    database.ref("/trains").push(newTrain);
  
    // Logs everything to console
    console.log(newTrain)
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#arrival-input").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref("/trains").on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destinationName;
    var frequency = childSnapshot.val().frequency;
    var nextArrival = childSnapshot.val().nextArrival;
  
    // Employee Info
    console.log(trainName);
    console.log(destination);
    console.log(frequency);
    console.log(nextArrival);
  
    // Prettify the employee start
    // var nextArrivalPretty = moment.unix(nextArrival).format("MM/DD/YYYY");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    // var empMonths = moment().diff(moment(empStart, "X"), "months");
    // console.log(empMonths);
  
    // // Calculate the total billed rate
    // var empBilled = empMonths * empRate;
    // console.log(empBilled);



    // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(destination),
      $("<td>").text(frequency),
      $("<td>").text(nextArrival)
    );
  
    // Append the new row to the table
    $("#table-body-1").append(newRow)
  });
  
  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
  