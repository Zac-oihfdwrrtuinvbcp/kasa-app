# Kasa - Accommodation Rental Platform

![Kasa Logo](/src/assets/LOGO.svg)

## Overview

Kasa is a modern accommodation rental platform built with React. This project implements the front-end interface for a vacation rental booking service similar to Airbnb, focusing on a clean and responsive design.

## Features

- **Home Page**: Browse through available rentals with a card-based layout
- **Property Details**: View comprehensive information about each property including:
  - Image gallery with navigation
  - Detailed property information
  - Host information
  - Rating system
  - Amenities list
- **About Page**: Learn more about Kasa's values and services
- **Responsive Design**: Fully responsive layout that works on mobile, and desktop
- **Route-Based Navigation**: Seamless navigation between pages

## Tech Stack

- **React**
- **React Router**
- **Sass/SCSS**
- **Vite**

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/kasa-app.git
   cd kasa-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
kasa-app/
├── public/             # Static assets
│   └── Icons.svg       # SVG icons used throughout the app
├── src/                # Source code
│   ├── assets/         # Images and static resources
│   ├── components/     # Reusable UI components
│   │   ├── Banner/     # Hero banner component
│   │   ├── Card/       # Property card component
│   │   ├── Dropdown/   # Collapsible dropdown component
│   │   ├── Footer/     # Footer component
│   │   ├── Gallery/    # Image gallery component
│   │   ├── Header/     # Header/navigation component
│   │   ├── Rating/     # Star rating component
│   │   ├── Tags/       # Tags component
│   │   └── User/       # User profile component
│   ├── data/           # Mock API data
│   │   └── logements.json  # Property listings data
│   ├── pages/          # Page components
│   │   ├── About/      # About page
│   │   ├── Home/       # Home page
│   │   ├── Logement/   # Property details page
│   │   └── NotFound/   # 404 page
│   ├── styles/         # Global styles
│   │   ├── _variables.scss  # Sass variables
│   │   └── main.scss   # Main stylesheet
│   ├── App.css         # App-specific styles
│   ├── index.css       # Base styles
│   └── main.jsx        # Entry point
├── .gitattributes
├── .gitignore
├── eslint.config.js    # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
└── vite.config.js      # Vite configuration
```