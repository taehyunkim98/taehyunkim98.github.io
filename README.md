# Taehyun Kim — Robotics Research Portfolio

Static research portfolio prepared for GitHub Pages.

## GitHub Pages deployment

1. Create a GitHub repository named exactly:

   `<YOUR_GITHUB_USERNAME>.github.io`

2. Upload the contents of this folder to the repository root. `index.html` must remain at the root.

3. In GitHub, open:

   `Settings → Pages → Build and deployment`

4. Set:

   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/(root)`

5. Save. The site will be available at:

   `https://<YOUR_GITHUB_USERNAME>.github.io`

## Local structure

```text
.
├── index.html
├── styles.css
├── script.js
├── .nojekyll
├── assets/
│   ├── images/
│   └── videos/
└── README.md
```

## Adding research videos

Place short MP4 clips in `assets/videos/`, for example:

```text
assets/videos/g1_heel_to_toe.mp4
assets/videos/twipr_mppi.mp4
```

Then embed a clip in HTML with:

```html
<video autoplay muted loop playsinline preload="metadata">
  <source src="assets/videos/g1_heel_to_toe.mp4" type="video/mp4">
</video>
```

For long/high-resolution videos, YouTube embedding is preferable to storing large binaries in the Git repository.

## Main profile

- Taehyun Kim
- Ph.D. Student
- Department of Electrical Engineering, Korea University
- Control & Mechatronics Lab
- KIST Humanoid Lab
- Research: Humanoid Robotics, Wheel-Legged Robotics, Whole-Body Control, Trajectory Optimization, MPC/MPPI, Reinforcement Learning
