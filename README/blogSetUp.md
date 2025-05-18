# nonprofit
# Step-by-Step Guide: Setting Up GitHub to Automate Blogger Posting for Nonprofit Blog Outreach

## Overview

You will:

* Use GitHub to manage your blog content
* Connect GitHub with Google Cloud
* Automatically post articles to your Blogger account

---

## 1. GitHub Setup

### Step 1.1: Use an Existing Repo or New One?

* ✅ Yes, you can use your `nonprofit` repo.
* 🔁 Create a **`/blog` folder** inside it to separate outreach blog code/content.

### Step 1.2: Folder Structure Example

```
/nonprofit
└── blog
    ├── articles
    │   ├── breaking-the-cycle.md
    │   ├── motivation-monday.md
    └── assets
        ├── images
        └── audio
```

---

## 2. Prepare Your Blog Articles

### Step 2.1: Convert Blogger Articles to Markdown or HTML

* ✅ Recommended: Convert manually (copy/paste into `.md` or `.html` files)
* ⚙️ Optional tool: Use [html2markdown](https://codebeautify.org/html-to-markdown-converter)

### Step 2.2: Format Each File

Example `breaking-the-cycle.md`:

```markdown
---
title: "Breaking the Cycle"
date: "2025-05-18"
category: "Healing"
---

## Breaking the Cycle: What You Were Never Taught
We dive deep into...
```

---

## 3. Set Up Google Cloud for Blogger API

### Step 3.1: Create a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (e.g., `nonprofit-blog-posting`)

### Step 3.2: Enable the Blogger API

1. Go to `APIs & Services > Library`
2. Search for **Blogger API v3** and enable it

### Step 3.3: Set Up OAuth Credentials

1. Go to `APIs & Services > Credentials`
2. Click **Create Credentials > OAuth 2.0 Client ID**
3. Choose type: `Web Application`
4. Add `http://localhost` for testing redirect URI
5. Save the `Client ID` and `Client Secret`

---

## 4. Automate with Google Cloud Functions or GitHub Actions

### Option A: Google Cloud Function (Preferred)

#### Step 4.1: Write a Google Cloud Function (Python or Node.js)

* It reads the latest `.md` file
* Converts to HTML
* Uses Blogger API to post

#### Step 4.2: Deploy Function

1. Use Google Cloud Console
2. Upload function zip or use inline editor
3. Add environment variables:

   * `BLOG_ID`, `CLIENT_ID`, `CLIENT_SECRET`, `ACCESS_TOKEN`

### Option B: GitHub Actions (Alternative)

#### Step 4.3: Create `.github/workflows/post-to-blogger.yml`

```yaml
name: Post to Blogger
on:
  push:
    paths:
      - 'blog/articles/**'

jobs:
  post:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Convert and Post Article
      run: |
        python scripts/publish_article.py
      env:
        BLOGGER_CLIENT_ID: ${{ secrets.BLOGGER_CLIENT_ID }}
        BLOGGER_CLIENT_SECRET: ${{ secrets.BLOGGER_CLIENT_SECRET }}
        BLOG_ID: ${{ secrets.BLOG_ID }}
```

#### Step 4.4: Add Your Secrets

* In GitHub repo > Settings > Secrets
* Add: `BLOGGER_CLIENT_ID`, `BLOGGER_CLIENT_SECRET`, `BLOG_ID`, `ACCESS_TOKEN`

---

## 5. Automatically Categorize Articles

1. Tag each article in its YAML frontmatter with a category
2. In your automation script, group articles based on `category:` tag
3. Optional: Create a category index page manually or by script

---

## 6. Final Recommendations

* ✅ Keep all blog content in `/blog/articles/`
* ✅ Use filenames like `2025-05-18-breaking-the-cycle.md`
* ✅ Back up all articles in GitHub
* ✅ Regularly test your automation with draft-only posts first

---

## Questions to Ask Yourself

* Do you want to auto-post or just generate HTML for manual review?
* Should new posts go to `Draft` in Blogger or be published instantly?

---

## Ready to Begin?

Once you're ready:

* Let me know if you want help writing the **Google Cloud Function** or **GitHub Action script**
* I can also help you format your 40 articles in Markdown/HTML

You now have a full system setup guide. Let’s build it together!
