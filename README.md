# Node-100-Express-Server

For this project, I was given the task of building my first server using the express framework.  The goal was to respond to get 
requests, one for a '/' route and the other for a '/data' route on our local host (excuse my incorrect jargon if so).  We were given a 
file data.json which contained an array of json arrays containing data that we wanted to display for a get request to the '/data'
route.  I did this by building an express server and formatting a response from the server that sends in the data from 
data.json to the browser.  

I also created a response from the server for a '/' route that sends a 200 status and 'ok' to the browser.  

We used morgan to log out the get requests to the terminal.

