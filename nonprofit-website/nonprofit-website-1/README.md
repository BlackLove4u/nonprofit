# Nonprofit Website

## Overview

This project is a comprehensive nonprofit website that includes a backend API for managing blog posts, podcasts, an online store, and user accounts. The frontend is built using React and provides a user-friendly interface for visitors to interact with the content.

## Project Structure

```
nonprofit-website
├── backend
│   ├── app.py                # Entry point for the backend application
│   ├── api
│   │   ├── blog.py           # API endpoints for blog posts
│   │   ├── podcast.py        # API endpoints for podcasts
│   │   ├── store.py          # API endpoints for the online store
│   │   └── user.py           # API endpoints for user management
│   ├── models
│   │   ├── blog.py           # Data model for blog articles
│   │   ├── podcast.py        # Data model for podcast episodes
│   │   ├── product.py        # Data model for products in the store
│   │   └── user.py           # Data model for users
│   ├── scripts
│   │   └── post_to_blogger.py # Script to automate posting to Blogger
│   └── requirements.txt      # Python dependencies for the backend
├── frontend
│   ├── public                # Static assets for the frontend
│   ├── src
│   │   ├── App.js            # Main component of the React application
│   │   ├── index.js          # Entry point for the React application
│   │   ├── pages
│   │   │   ├── Home.js       # Home page component
│   │   │   ├── Blog.js       # Blog page component
│   │   │   ├── Podcast.js     # Podcast page component
│   │   │   ├── Store.js      # Store page component
│   │   │   └── Contact.js     # Contact page component
│   │   └── components
│   │       ├── Navbar.js     # Navbar component
│   │       └── Footer.js     # Footer component
│   └── package.json          # Configuration file for the frontend application
└── README.md                 # Documentation for the project
```

## Getting Started

### Prerequisites

- Python 3.x
- Node.js and npm
- A Google account for Blogger API access

### Backend Setup

1. Navigate to the `backend` directory.
2. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```
3. Set up your Blogger API credentials in `backend/scripts/post_to_blogger.py`.
4. Run the backend application:
   ```
   python app.py
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.
2. Install the required Node.js packages:
   ```
   npm install
   ```
3. Start the frontend application:
   ```
   npm start
   ```

## Features

- **Blog Management**: Create, read, update, and delete blog posts.
- **Podcast Management**: Manage podcast episodes with audio files.
- **Online Store**: List products and manage user interactions.
- **User Management**: Handle user registration, login, and profiles.
- **Automated Posting**: Automatically post blog articles to your Blogger account.

## Future Enhancements

- Add user authentication and authorization.
- Implement payment processing for the online store.
- Expand the podcast section with additional features like ratings and comments.
- Enhance the frontend with more interactive elements and educational games.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.