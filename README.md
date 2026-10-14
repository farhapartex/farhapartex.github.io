# farhapartex.github.io

Personal blog built with Jekyll and deployed to GitHub Pages via GitHub Actions.

## Editing

| What | Where |
| --- | --- |
| Home page (bio, expertise, work domain, experience) | `_data/profile.yml` |
| Top menu | `_data/navigation.yml` |
| Site title, URL, social links | `_config.yml` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Post images | `assets/img/posts/` |

## Writing a post

```markdown
---
title: My Post Title
date: 2026-10-14 10:00:00 +0600
categories: [Backend]        # Backend | Web3 | System Design | Cloud
tags: [django, api]
description: Optional one-line summary shown in post lists.
---

Text, `code`, and images: ![alt](/assets/img/posts/diagram.png)
```

The category must exactly match a menu title so the post shows up on that page.

To add a new category: add it to `_data/navigation.yml` and create a page like `backend.md`.

## Local preview (Docker)

```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/site -w /site ruby:3.4 \
  bash -c "bundle install && bundle exec jekyll serve -H 0.0.0.0"
```

Then open http://localhost:4000.
