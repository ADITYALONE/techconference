# TechConference

CS571 web project. A conference registration site built with React.

## Running locally

```
npm install
npm run dev
```

Then open http://localhost:5173

## Pages

- Home - hero section, live countdown to the event, featured speakers
- Speakers - grid of speaker cards, filterable by track
- Schedule - tabs for Web Dev / AI/ML / Open Source sessions
- Register - 3 step form (pick ticket tier, enter info, confirmation)
- My Registration - look up a saved registration by confirmation number, edit it, or cancel it
- FAQ - accordion of common questions
- Venue - location and travel info

## Components

- Navbar
- Footer
- Button
- Badge
- TicketTierCard
- SpeakerCard
- SessionCard
- FaqItem
- Home, Speakers, Schedule, Register, MyRegistration, FAQ, Venue (page components)

## Features

- Multi step registration form with email validation, saved to localStorage
- My Registration page can edit or cancel an existing registration
- FAQ accordion expands/collapses on click
- Schedule page filters sessions by track using tabs
- Speakers page filters by track
- Responsive layout (mobile hamburger menu, grid collapses on smaller screens)
- Live countdown timer on the home page

## Data

All speaker/session/ticket/FAQ data lives in `src/data/data.js`. Registrations are stored in `localStorage` through the helpers in `src/utils/registrationStore.js`.
