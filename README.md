# Weekend AI Stuff

Community site for Weekend AI Stuff — a learning community for Filipino knowledge workers exploring AI.

## First-Time Setup

### 1. Prerequisites
- Git installed (comes with Linux on Chromebook)
- Node.js 18+ installed
- A GitHub account
- A Vercel account (free tier, sign in with GitHub)

### 2. Create the GitHub repo
```bash
# Go to github.com and create a new repository called "weekend-ai-stuff"
# Then clone it locally:
git clone https://github.com/YOUR_USERNAME/weekend-ai-stuff.git
cd weekend-ai-stuff
```

### 3. Copy the project files
Copy all the files from this project into your cloned repo folder.

### 4. Install dependencies and test locally
```bash
npm install
npm run dev
# Open http://localhost:4321 in your browser
```

### 5. Push to GitHub
```bash
git add .
git commit -m "Initial site setup"
git push origin main
```

### 6. Connect to Vercel
1. Go to vercel.com and sign in with GitHub
2. Click "Add New Project"
3. Import your "weekend-ai-stuff" repository
4. Vercel will auto-detect Astro — just click "Deploy"
5. Your site will be live at `https://weekend-ai-stuff.vercel.app`

That's it. Every future push to GitHub will auto-deploy.

---

## Adding a New Challenge (Weekly Workflow)

This is what you'll do every week. Takes about 2 minutes.

### 1. Create a new markdown file

In `src/content/challenges/`, create a new file. Name it with the date and a short slug:

```
src/content/challenges/2026-03-28-your-challenge-name.md
```

### 2. Add the frontmatter at the top

Every challenge file starts with this block between `---` markers:

```yaml
---
title: "Your Challenge Title"
description: "One sentence about what this challenge does."
date: "2026-03-28"
type: challenge          # Options: challenge, resource, nudge
complexity: Beginner     # Options: Beginner, Moderate, Advanced
quickWin: "Quick win: Under 30 minutes"  # Optional, remove line if not needed
access: "Free — Google account required"
layout: ../../layouts/PostLayout.astro
---
```

### 3. Write the content below the frontmatter

Just write in markdown. Same format we use in the Viber posts:
- `## Step 1: Title` for step headers
- `> *"prompt text"*` for prompt blocks (blockquote + italic)
- `**bold text**` for emphasis
- `---` for horizontal dividers between sections
- Regular paragraphs for everything else

### 4. Push to deploy

```bash
git add .
git commit -m "Add March 28 challenge"
git push
```

Vercel picks it up automatically. Your new challenge appears on the site within a minute.

---

## Project Structure

```
weekend-ai-stuff/
├── src/
│   ├── content/
│   │   ├── config.ts          ← defines the challenge schema
│   │   └── challenges/        ← YOUR CHALLENGE FILES GO HERE
│   │       ├── 2026-03-14-digital-persona.md
│   │       ├── 2026-03-15-prompting-guide.md
│   │       └── 2026-03-21-workflow-discovery.md
│   ├── layouts/
│   │   ├── BaseLayout.astro   ← nav + footer wrapper
│   │   └── PostLayout.astro   ← individual post page
│   ├── pages/
│   │   ├── index.astro        ← landing page
│   │   └── challenges/
│   │       ├── index.astro    ← challenge archive
│   │       └── [slug].astro   ← dynamic post route
│   └── styles/
│       └── global.css         ← all styling
├── public/
│   └── favicon.svg
├── package.json
├── astro.config.mjs
└── README.md                  ← you are here
```

## Quick Reference

| Task | What to do |
|------|-----------|
| Add a challenge | Create `.md` file in `src/content/challenges/`, push |
| Edit a challenge | Edit the `.md` file, push |
| Change landing page copy | Edit `src/pages/index.astro` |
| Change site styling | Edit `src/styles/global.css` |
| Test locally | `npm run dev` → open `localhost:4321` |
| Deploy | `git push` (automatic via Vercel) |

## Custom Domain (Future)

When you're ready for a custom domain:
1. Buy a domain (Namecheap, Google Domains, etc.)
2. In Vercel dashboard → Settings → Domains → Add your domain
3. Update DNS records as Vercel instructs
4. Update `site` in `astro.config.mjs`
