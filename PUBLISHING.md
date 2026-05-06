# 🚀 Publishing Your PM Brain

This vault is designed to be published using **Quartz 4**.

## 🛠️ Initial Setup
1. **Create a GitHub Repo**: Create a new repository named `PM-Brain-` on GitHub.
2. **Push your code**:
   ```bash
   git init
   git remote add origin https://github.com/Yeshprabhu03/PM-Brain-.git
   git add .
   git commit -m "Initial commit: PM Brain Foundation"
   git branch -M main
   git push -u origin main
   ```

## 🔄 Automatic Deployment
The vault is configured to use GitHub Actions. Every time you push to the `main` branch, Quartz will automatically build and deploy the site to GitHub Pages.

## 📝 Writing & Publishing
- **New Notes**: Create notes in the relevant subject folders.
- **Drafts**: Add `status: draft` to the YAML frontmatter to prevent a note from being published.
- **Assets**: Store all images in the `_Assets` folder.

---

> [!IMPORTANT]
> Ensure your GitHub Pages settings are set to deploy from the `gh-pages` branch (which Quartz will create automatically).
