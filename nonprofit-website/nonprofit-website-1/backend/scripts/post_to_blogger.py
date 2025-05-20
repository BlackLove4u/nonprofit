import os
import requests
import json
from datetime import datetime

# Configuration
BLOGGER_API_URL = "https://www.googleapis.com/blogger/v3/blogs/{blog_id}/posts/"
BLOG_ID = os.getenv("BLOG_ID")
CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")
ACCESS_TOKEN = os.getenv("ACCESS_TOKEN")

def post_to_blogger(title, content):
    url = BLOGGER_API_URL.format(blog_id=BLOG_ID)
    headers = {
        "Authorization": f"Bearer {ACCESS_TOKEN}",
        "Content-Type": "application/json"
    }
    
    post_data = {
        "kind": "blogger#post",
        "title": title,
        "content": content,
        "labels": ["automated"],
        "published": datetime.utcnow().isoformat() + "Z"
    }
    
    response = requests.post(url, headers=headers, data=json.dumps(post_data))
    
    if response.status_code == 200:
        print(f"Post '{title}' published successfully.")
    else:
        print(f"Failed to publish post '{title}'. Status code: {response.status_code}, Response: {response.text}")

if __name__ == "__main__":
    # Example usage
    title = "Your Blog Post Title"
    content = "<h1>Your Blog Post Content</h1><p>This is an example of a blog post.</p>"
    post_to_blogger(title, content)