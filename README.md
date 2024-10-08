﻿# FilterPixel-image-processing
Steps to Build the Full-Stack Image Processing Web Application:
Set Up Backend (Node.js + Express + Sharp):

Initialize a new Node.js project:
Install required packages: express, sharp, multer, and cors.
Create a folder structure with routes and controllers to handle image uploads and processing.
Use multer for file uploads and sharp for image processing tasks like resizing, rotation, brightness, contrast, and format conversion.
Implement API endpoints to handle image upload and manipulation.
Set up logic to send a low-quality preview after each operation for real-time updates.
Frontend (React + Context API):

Create a React app with components for uploading and manipulating images.
Use useState and useContext to manage image and settings (brightness, contrast, rotation) across components.
Implement controls (sliders) for real-time image adjustments and send requests to the backend to get updated previews.
Connect Frontend to Backend:

Use fetch API in React to send requests to backend API endpoints and handle the response.
Display the updated image in a preview component after every manipulation.
Allow the user to download the final high-quality processed image.
Run the Application:

Run the backend and frontend servers concurrently.
Upload images, manipulate them with real-time previews, and download the final result.
This project uses Node.js for server-side processing and React for the frontend, integrating image uploads and manipulation in real-time.
