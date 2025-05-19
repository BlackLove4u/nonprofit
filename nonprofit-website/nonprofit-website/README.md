# Nonprofit Website Project

## Overview

This project is a comprehensive nonprofit website designed to support various functionalities including blogs, podcast episodes, an online store, educational activities, and games. The website is built with a scalable architecture that allows for incremental development and growth over time.

## Features

- **Frontend**: Built with React, providing a responsive and user-friendly interface.
- **Backend**: Node.js and Express for handling API requests and database interactions.
- **Database**: Integration with a database to manage users, blog posts, podcast episodes, products, activities, and games.
- **Content Management**: Ability to automate content posting to a Blogger blog page.
- **Media Support**: Support for images, audio, and video content.
- **Educational Activities and Games**: Dedicated sections for educational resources and interactive games.

## Project Structure

```
nonprofit-website
├── README.md
├── package.json
├── tsconfig.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets
│       ├── images
│       ├── audio
│       └── videos
├── src
│   ├── server
│   │   ├── index.ts
│   │   ├── api
│   │   │   ├── index.ts
│   │   │   ├── blog.ts
│   │   │   ├── podcast.ts
│   │   │   ├── store.ts
│   │   │   ├── activities.ts
│   │   │   └── games.ts
│   │   └── db
│   │       ├── index.ts
│   │       └── models
│   │           ├── user.ts
│   │           ├── blog.ts
│   │           ├── podcast.ts
│   │           ├── product.ts
│   │           ├── activity.ts
│   │           └── game.ts
│   ├── client
│   │   ├── index.tsx
│   │   ├── App.tsx
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Blog.tsx
│   │   │   ├── Podcast.tsx
│   │   │   ├── Store.tsx
│   │   │   ├── Activities.tsx
│   │   │   ├── Games.tsx
│   │   │   └── Contact.tsx
│   │   ├── components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   ├── PodcastEpisode.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ActivityCard.tsx
│   │   │   └── GameCard.tsx
│   │   └── styles
│   │       └── main.css
│   ├── scripts
│   │   ├── automate_blogger_post.ts
│   │   └── seed_db.ts
│   └── types
│       └── index.ts
├── blog
│   ├── articles
│   │   └── example-article.md
│   └── assets
│       ├── images
│       └── audio
├── podcast
│   ├── episodes
│   │   └── example-episode.md
│   └── assets
│       └── audio
├── store
│   └── products.json
├── activities
│   └── example-activity.md
├── games
│   └── example-game.md
├── .github
│   └── workflows
│       └── post-to-blogger.yml
```

## Setup Instructions

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd nonprofit-website
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Configure Environment Variables**: 
   Create a `.env` file in the root directory and add necessary environment variables for database connection and API keys.

4. **Run the Development Server**: 
   ```
   npm run dev
   ```

5. **Access the Application**: 
   Open your browser and navigate to `http://localhost:3000`.

## Usage Guidelines

- **Frontend**: The frontend is built using React. You can modify components in the `src/client/components` directory.
- **Backend**: The backend API routes can be found in the `src/server/api` directory. You can add new routes as needed.
- **Database**: Models are defined in the `src/server/db/models` directory. You can create new models for additional data types.
- **Content Posting**: Use the `automate_blogger_post.ts` script to automate posting to your Blogger blog.

## Future Enhancements

- Implement user authentication and authorization.
- Add more educational activities and games.
- Enhance the store functionality with payment processing.
- Improve SEO and accessibility features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.