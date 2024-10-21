<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

    
</head>
<body>

  <h1>Task 18 - MongoDB Project ReadMe File</h1>

  <h2>Objective</h2>
  <p>This project demonstrates the basics and key concepts of MongoDB by creating a database named <strong>Codetribe</strong> and inserting documents into three collections: <strong>Facilitators</strong>, <strong>Trainees</strong>, and <strong>Projects</strong>.</p>

  <h2>Prerequisites</h2>
  <ul>
    <li><strong>MongoDB Community Server</strong> – Download it from <a href="https://www.mongodb.com/try/download/community">MongoDB Download Center</a>.</li>
    <li><strong>Mongosh</strong> (MongoDB Shell) – Installed with MongoDB Server.</li>
    <li>MongoDB Server running on your local machine or cloud service (like MongoDB Atlas).</li>
  </ul>

  <h2>Getting Started with MongoDB and Mongosh</h2>
  <h3>Starting MongoDB Server (Local Installation)</h3>
  <pre><code>mongod</code></pre>
  <p>In a new terminal window, open the MongoDB shell:</p>
  <pre><code>mongosh</code></pre>

  <h2>Creating the Database and Collections</h2>
  <h3>1. Create a Database Named <code>Codetribe</code></h3>
  <pre><code>use Codetribe</code></pre>

  <h3>2. Create the Facilitators Collection and Insert Data</h3>
  <pre><code>db.Facilitators.insertOne({
  Name: "Vukona Mnisi",
  Location: "Pretoria",
  Course: "Full Stack Development"
})</code></pre>

  <h3>3. Create the Trainees Collection and Insert Data</h3>
  <pre><code>db.Trainees.insertOne({
  Name: "Khensani ",
  Location: "Pretoria",
  Facilitator: "Vukona Mnisi"
})</code></pre>

  <h3>4. Create the Projects Collection and Insert Data</h3>
  <pre><code>db.Projects.insertOne({
  Name: "Weather App",
  Course: "Full Stack Development",
  Lesson: "React and APIs"
})</code></pre>

  <h2>Verifying the Data Insertion</h2>
  <p>Use the following commands to confirm that the documents have been inserted successfully:</p>

  <ul>
    <li><strong>Facilitators Collection:</strong></li>
    <pre><code>db.Facilitators.find().pretty()</code></pre>

    <li><strong>Trainees Collection:</strong></li>
    <pre><code>db.Trainees.find().pretty()</code></pre>

    <li><strong>Projects Collection:</strong></li>
    <pre><code>db.Projects.find().pretty()</code></pre>
  </ul>

  <h2>Summary of MongoDB Commands Used</h2>
  <table>
    <thead>
      <tr>
        <th>Command</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>use &lt;database&gt;</code></td>
        <td>Switch to or create a new database.</td>
      </tr>
      <tr>
        <td><code>db.createCollection("&lt;collection&gt;")</code></td>
        <td>Create a new collection.</td>
      </tr>
      <tr>
        <td><code>db.&lt;collection&gt;.insertOne(&lt;document&gt;)</code></td>
        <td>Insert a document into a collection.</td>
      </tr>
      <tr>
        <td><code>db.&lt;collection&gt;.find().pretty()</code></td>
        <td>Retrieve and display documents in readable format.</td>
      </tr>
    </tbody>
  </table>

  <h2>Troubleshooting</h2>
  <ul>
    <li><strong>Command Not Found Error:</strong> Ensure MongoDB is installed correctly and added to the PATH.</li>
    <li><strong>Server Connection Issues:</strong> Make sure the MongoDB server is running with <code>mongod</code>.</li>
    <li><strong>If collections are not showing up:</strong> Use <code>show collections</code>.</li>
  </ul>

  <h2>Pushing to github</h2>
  <ol>
    <li>Push the project to your GitHub repository:
      <pre><code>git add .
git commit -m "Initial commit - MongoDB project"
git push origin main</code></pre>
    </li>

  </ol>


</body>
</html>
