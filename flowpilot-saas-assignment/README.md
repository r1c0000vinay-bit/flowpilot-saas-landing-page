# FlowPilot — SaaS Landing Page

A responsive SaaS product landing page built with **HTML, CSS and JavaScript** for the internship assignment.

## 1. Run the project

1. Download and extract `flowpilot-saas-assignment.zip`.
2. Open the extracted folder in VS Code.
3. Open `index.html` in your browser. You can also use the VS Code Live Server extension.

No package installation or backend is required.

## 2. Project files

- `index.html` — page structure and content (navigation, hero, features, workflow, pricing, enquiry form and footer).
- `style.css` — visual design, dashboard illustration, layout, responsive breakpoints and reduced-motion support.
- `script.js` — mobile navigation and enquiry form validation/success message.

## 3. How the interactions work

- Navigation links use section IDs such as `#features` and `#pricing` to scroll to the correct section.
- The mobile menu opens and closes with the menu button.
- The enquiry form uses built-in HTML validation (`required`, `type="email"`, and `minlength`) plus JavaScript to show a success message.
- The form is a front-end demo only. It does not send or store data on a server, as the assignment does not require a backend.

## 4. Design and responsiveness

The layout uses CSS Grid and Flexbox. A media query changes the navigation, cards, hero, pricing and contact sections for smaller screens. The visual dashboard is made with HTML and CSS, so no image assets are required.

## 5. Before submission

- Replace the demo email `hello@flowpilot.example` if you have a real contact address.
- Test the page at desktop and mobile widths.
- Test navigation and submit the form with both invalid and valid values.
- Be ready to explain the three files and the JavaScript event listeners.
