# JobHunt

## Project Overview

JobTrack is an innovative and user-friendly job search platform designed to connect job seekers with a wide range of job opportunities across various companies. The website offers an intuitive interface where users can explore companies, review detailed job listings, and easily apply for positions that match their qualifications. This project aims to streamline the job hunting process and empower users to find their ideal job effortlessly.

## Live Demo

[Live Site URL](https://job-hunt-7328a.web.app)

## Key Features

- **User Authentication**

  - User registration with email and password
  - Login with email/password and Google social login
  - Password validation enforcing uppercase, lowercase, and minimum length criteria
  - Forgot password feature (password reset link redirecting user to Gmail)
  - Logout functionality with dynamic navbar updates

- **Private Routes**

  - Company Details page accessible only by logged-in users
  - My Profile page accessible only by logged-in users

- **Company & Job Listings**

  - Displays multiple companies fetched from a JSON data source
  - Company logos displayed in a responsive grid
  - Clicking a company shows detailed company information and job listings
  - Job detail modal with apply button that opens the company’s website

- **Profile Management**

  - Users can view their profile including name, photo, and email
  - Users can update their profile information (name and photo URL) via a dedicated update page

- **Responsive Design**

  - Fully responsive and mobile-friendly design
  - Works seamlessly on mobile, tablet, and desktop devices

- **Navigation and Layout**

  - Consistent header and footer layout across pages
  - Dynamic page titles based on current route
  - 404 Not Found page for unknown routes
  - Additional custom route relevant to the website theme

- **Animations**
  - Subtle animations for enhanced user experience using [Motion (Framer Motion)](https://www.framer.com/motion/)

## Technologies & Packages Used

- **React** - Frontend UI library
- **React Router DOM** - Client-side routing
- **Firebase Authentication** - User auth backend service
- **Tailwind CSS** - Utility-first CSS framework for styling
- **DaisyUI** - Tailwind CSS component library for UI components
- **Framer Motion** - Animation library for React
- **React Toastify** - Toast notifications for error and success messages
- **Environment Variables** - For securely managing Firebase configuration keys
- **Vite** - Build tool and development server
