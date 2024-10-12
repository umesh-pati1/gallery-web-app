# Gallery Web App

A web application for managing and displaying a gallery of images. This project aims to provide a seamless user experience for uploading, viewing, and managing images. Inspired by a YouTube tutorial, it serves as a practical learning project.

## Features

- User authentication
- Image upload and management
- Error handling and analytics
- Database integration
- Rate limiting

## TODO

- [x] Make it deploy (w/ vercel)
- [x] Scaffold basic ui with mock data
- [x] Setup a database (w/ vercel postgress)
- [x] Attach DB to UI
- [x] Add Authentication (w/ Clerk)
- [x] Add Image Upload
- [x] taint (server-only)
- [x] Error management (w/ sentry)
- [x] Parallel Routes
- [ ] Delete button (w/ Server Actions)
- [ ] Analytics (w/ posthog)
- [ ] Rate limiter (w/ Upstash)

Reference: [Theo-t3.gg tutorial](https://www.youtube.com/watch?v=d5x0JCZbAJs&t=3253s)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/gallery-web-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd gallery-web-app
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```

## Usage

1. Start the development server:
   ```sh
   pnpm dev
   ```
2. Open your browser and navigate to `http://localhost:3000`.

## Questions

1. What is drizzle ORM?

2. What is FileRouter

3. What is `satisfies` keyword

# Learn these

### 1. Parallel Routing

### 2. What is createPortal

    createPortal lets you render some children into a different part of the DOM.
