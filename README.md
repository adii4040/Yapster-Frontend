# Yapster Frontend

Yapster is a real-time chat web application built with React, Vite, and Tailwind CSS. This repository contains the frontend client for the platform, including authentication, profile management, password recovery, theme customization, and live messaging with attachments.

## Overview

The app connects to a backend API and a Socket.IO server to provide:

- user registration and login
- email verification and verification resend flow
- forgot-password request and password reset flow
- profile viewing and profile updates
- online user presence
- one-to-one real-time messaging
- image, video, and document sharing
- theme selection with persistent local storage

## Tech Stack

- React 19
- Vite
- React Router DOM
- Zustand for client state
- Axios for API requests
- Socket.IO client for real-time updates
- Tailwind CSS with DaisyUI
- React Toastify for notifications
- Lucide React and React Icons for UI icons

## Features

### Authentication

- Sign up with fullname, email, password, and avatar upload
- Sign in with email and password
- Sign out from the navbar
- Protected routes for profile and account update screens

### Account Recovery and Verification

- Request a password reset link from the forgot-password screen
- Reset password using the tokenized reset route
- Verify email addresses through a tokenized verification route
- Resend email verification link from the profile page

### Messaging

- View the contact list and online/offline status
- Filter contacts to show online users only
- Select a user and load the conversation history
- Receive new messages in real time through Socket.IO
- Send plain text messages
- Share images, videos, and common document types
- Auto-scroll to the latest message in an active conversation

### Profile and Appearance

- View profile details and avatar
- Update fullname, email, and avatar
- Switch between many DaisyUI themes
- Persist the selected theme in local storage

## Project Structure

- `src/App.jsx` sets up routes, auth gating, and theme application
- `src/Components/` contains the navbar, chat container, sidebar, message input, and shared UI pieces
- `src/Pages/` contains the main screens for landing, auth, profile, settings, and verification flows
- `src/Store/` contains Zustand stores for auth, chat, and theme state
- `src/lib/axios.js` defines the API client configuration
- `src/lib/constant.js` stores theme names used by the settings page

## Prerequisites

- Node.js 18 or newer
- npm or another compatible package manager
- A running Yapster backend API and Socket.IO server

The frontend expects the API to be available at `http://localhost:8080` in development by default. In production, set `VITE_API_URL` to the deployed backend base URL.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables if your backend is not running locally:

```bash
VITE_API_URL=https://your-backend-domain.com
```

3. Start the development server:

```bash
npm run dev
```

4. Open the app in your browser using the local Vite URL shown in the terminal.

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint across the project

## Routes

The app uses React Router and currently includes these routes:

- `/` landing page for unauthenticated users, chat home for authenticated users
- `/login` sign-in page
- `/signup` registration page
- `/user/settings` theme settings page
- `/user/:userId/profile` profile page
- `/user/:userId/update` profile update page
- `/user/request-forgot-password` forgot-password request page
- `/user/:resetPasswordToken/reset-forgot-password` password reset page
- `/user/:userId/verify-email/:emailVerificationToken` email verification page

## Runtime Notes

- API requests use Axios with `withCredentials: true`, so the backend must allow credentialed requests.
- Live presence and message delivery depend on Socket.IO events from the backend.
- Selected theme values are stored in `localStorage` under `chat-theme`.
- Message attachments currently support images, videos, and document previews such as PDFs.

## Suggested Workflow

1. Start the backend API.
2. Run the frontend with `npm run dev`.
3. Register or sign in.
4. Select a contact from the sidebar and start chatting.

## License

This project is licensed under the MIT License
