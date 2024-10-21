//create database
use ("Codetribe");

//create documents
 db.createCollection("Facilitators");

 db.createCollection("Trainees");

db.createCollection("Projects");


//create documents
db.Facilitators.insertOne({
 Name: "John Doe",
 Location: "Johannesburg",
  Course: "Full Stack Development"
 })



 db.Facilitators.insertOne({ 
    Name: "Vukona Mnisi", 
    Location: "Pretoria", 
    Course: "React Native" }
 )

 db.Trainees.insertOne({ 
    Name: "Khensani Lebese",
     Location: "Pretoria", 
     Facilitator: "Vukona mnisi" } )


//read the database
 db.Facilitators.find().pretty();

 cddb.Trainees.find().pretty();
 db.Projects.find().pretty();
