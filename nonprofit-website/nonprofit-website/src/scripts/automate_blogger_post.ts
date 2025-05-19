import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env file
require('dotenv').config();

const blogger = google.blogger('v3');

async function authenticate() {
    const auth = new google.auth.OAuth2(
        process.env.BLOGGER_CLIENT_ID,
        process.env.BLOGGER_CLIENT_SECRET,
        process.env.REDIRECT_URI
    );

    auth.setCredentials({
        refresh_token: process.env.BLOGGER_REFRESH_TOKEN,
    });

    return auth;
}

async function postToBlogger(title: string, content: string, blogId: string) {
    const auth = await authenticate();

    const response = await blogger.posts.insert({
        auth,
        blogId,
        requestBody: {
            title,
            content,
            status: 'published', // Change to 'draft' if you want to save as draft
        },
    });

    console.log(`Post published: ${response.data.url}`);
}

async function main() {
    const articlesDir = path.join(__dirname, '../blog/articles');
    const files = fs.readdirSync(articlesDir);

    for (const file of files) {
        const filePath = path.join(articlesDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        const title = content.split('\n')[1].replace('title: "', '').replace('"', '');
        await postToBlogger(title, content, process.env.BLOG_ID);
    }
}

main().catch(console.error);