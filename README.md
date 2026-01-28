#  ToyTopia – A Local Kids Toy Store Platform

# Overview
**ToyTopia** is a vibrant and playful online marketplace for kids’ toys where families can discover, explore, and support local toy sellers. Users can browse toys, view detailed information, and securely access protected features after authentication.

This project is built as a **Single Page Application (SPA)** with Firebase Authentication and modern React tools, focusing on responsiveness, user experience, and secure authentication.

---

##  Live Website
**Live URL:** https://your-live-site-link.netlify.app  
**GitHub Repository:** https://github.com/your-username/toytopia-client

---

 Project Purpose
- Promote local toy sellers through a modern web platform  
- Provide a fun, engaging, and secure browsing experience  
- Practice real-world React, Firebase Authentication, and routing concepts  

---

##  Key Features

# Authentication
- Email & Password Login/Register
- Google Sign-In
- Password validation (uppercase, lowercase, minimum 6 characters)
- Forgot Password feature with Gmail redirection
- Persistent login using Firebase `onAuthStateChanged`
- Secure profile update using `updateProfile()`

---

# Navigation & Layout
- Responsive Navbar with active route highlighting
- User avatar & name shown when logged in
- Logout functionality
- Footer visible on all pages
- 404 Not Found page for invalid routes

---

# Home Page
- Interactive **Swiper Slider**
- Popular Toys section (JSON-based data)
- Additional custom sections for engagement
- Fully responsive card layout

---

# Toy Management
- JSON-based toy data
- Image hosting via **imgbb / postimages**
- Toy Details page (Protected Route)
- “Try Now” form with success toast message

---

# My Profile (Protected Route)
- View user name, email, and photo
- Edit and update name & photoURL
- Changes saved securely in Firebase

---

# Protected Routes
- Toy Details Page
- My Profile Page
- Extra meaningful private route

---

# Additional Functionality
- Dynamic page titles for each route
- Show/Hide password toggle on registration
- Toast notifications for success & errors
- Loader shown during authentication state check
- SPA reload-safe routing (Netlify/Firebase config)

---

# Responsiveness
✔ Mobile  
✔ Tablet  
✔ Desktop  

Built with responsive layouts to ensure smooth experience across all devices.

---

# Technologies Used

### Frontend
- React
- React Router DOM
- Firebase Authentication
- Tailwind CSS
- DaisyUI

### Packages & Libraries
- **Swiper.js** (Slider)
- **React Toastify**
- **AOS Animation** (if used)

---

# Environment Variables
Firebase configuration keys are securely stored using environment variables:

