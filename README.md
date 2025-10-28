# My Portfolio

Welcome to the **My Portfolio** project! This is a personal portfolio website built with HTML, CSS (Tailwind & PostCSS), and JavaScript. It showcases your skills, projects, resume, and contact information with interactive animations and a modern design.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Key Functions & Animations](#key-functions--animations)
- [How to Run](#how-to-run)
- [Customization](#customization)
- [Assets](#assets)
- [Contact](#contact)

---

## Features

- Responsive design using Tailwind CSS
- Animated navigation bar
- Interactive project cards
- Skills showcase with animations
- Contact form
- Downloadable resume (CV)
- Custom logo and images

## Project Structure

```
404.html
firebase.json
index.html
package.json
playwright.config.js
postcss.config.js
style.css
src/
  input.css
Assets/
  Images/
  logo/
    site.webmanifest
  Resume/
Data/
  projects-data.js
Pages/
  about.html
  contact.html
  CV.html
  projects.html
  skills.html
scripts/
  about.js
  cardAnimations.js
  contect.js
  main.js
  navbar.js
  paratacial.js
  projects.js
  skill.js
  ...
```

## Key Functions & Animations

### JavaScript Files

- **scripts/main.js**: Entry point for global site logic and initialization.
- **scripts/navbar.js**: Handles navigation bar animations and active link highlighting.
- **scripts/cardAnimations.js**: Animates project cards on hover and scroll.
- **scripts/projects.js**: Loads and displays project data from `Data/projects-data.js`.
- **scripts/about.js**: Manages about page interactions and animations.
- **scripts/skill.js**: Animates skill progress bars and icons.
- **scripts/contect.js**: Handles contact form validation and submission.
- **scripts/paratacial.js**: (Likely for parallax or special effects; see file for details.)

### Animations

- **Navigation Bar Animation**: Smooth transitions and active state highlight.
- **Card Hover Animation**: Project cards scale and show details on hover.
- **Scroll Animations**: Elements fade in or animate as you scroll.
- **Skills Animation**: Progress bars animate to show skill levels.
- **Parallax Effects**: (If implemented in `paratacial.js`.)

### Data

- **Data/projects-data.js**: Contains project information displayed on the Projects page.

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/zaid-khan-code/My-Portfoilio.git
   ```
2. Open `index.html` in your browser.
3. For development, install dependencies:
   ```sh
   npm install
   ```
4. To build Tailwind CSS:
   ```sh
   npm run build
   ```

## Customization

- Update images in `Assets/Images/` and `Assets/logo/`.
- Edit your resume in `Assets/Resume/`.
- Modify project data in `Data/projects-data.js`.
- Change styles in `style.css` and `src/input.css`.

## Assets

- **Images**: All site images are in `Assets/Images/`.
- **Logo**: Site logo and manifest in `Assets/logo/`.
- **Resume**: Downloadable CV in `Assets/Resume/`.

## Contact

For questions or feedback, use the contact form on the site or reach out via the information in `Pages/contact.html`.

---

**Made by [Your Name]**
