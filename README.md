# EcoSort AI – Smart Waste Classification & Sustainability Assistant

## 1. Project Overview
EcoSort AI is an educational AI-for-sustainability web application that helps users understand how common waste items should be handled. A lightweight transparent AI classification layer predicts the waste category and provides a disposal recommendation.

The project supports:
- SDG 11 – Sustainable Cities and Communities
- SDG 12 – Responsible Consumption and Production
- SDG 13 – Climate Action

## 2. Problem Statement
Incorrect waste segregation reduces recycling efficiency, increases landfill use, and can expose people and the environment to avoidable risks. Many users are unsure whether an item belongs to organic waste, recycling, e-waste, or general waste.

## 3. Proposed Solution
EcoSort AI accepts a natural-language description such as "plastic bottle" or "old phone". Its local knowledge model identifies sustainability keywords, predicts a category, provides a confidence estimate, and recommends an appropriate disposal action.

## 4. AI Logic
The default demo uses a transparent lightweight classification model:
1. Convert input to lowercase.
2. Compare the text with category-specific sustainability keywords.
3. Select the category with the strongest keyword match.
4. Return a confidence value and recommendation.
5. Award educational eco points.

This design is intentionally API-free so the project can run without paid services or secret keys. For a future version, the classifier can be replaced or enhanced with an LLM such as IBM Granite.

## 5. Features
- Responsive frontend
- Waste classification
- Confidence score
- Disposal recommendations
- Eco-point system
- Recyclable-rate dashboard
- SDG mapping
- No API key required

## 6. Tech Stack
- HTML5
- CSS3
- JavaScript
- Rule-based AI / NLP-style keyword classification
- GitHub Pages or Vercel for deployment

## 7. Run Locally
No build tools are required.

1. Download or clone the repository.
2. Open `index.html` in a browser.
3. Enter a waste item.
4. Click **Analyze with AI**.

For a local server, use VS Code Live Server or:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## 8. GitHub Deployment
1. Create a GitHub repository named `EcoSort-AI`.
2. Upload `index.html`, `style.css`, `app.js`, and `README.md`.
3. Go to Settings → Pages.
4. Select the main branch and root folder.
5. Save and wait for GitHub Pages to publish the site.
6. Copy the generated website URL and submit it as the project link.

## 9. Vercel Deployment
1. Push the project to GitHub.
2. Sign in to Vercel.
3. Import the `EcoSort-AI` repository.
4. Keep the default settings because this is a static site.
5. Deploy.
6. Copy the generated `.vercel.app` URL.

## 10. Future Scope
- Image-based waste recognition using computer vision
- IBM Granite/LLM integration
- Location-aware recycling-center suggestions
- User accounts and history
- Carbon-footprint estimation using verified lifecycle datasets
- Multilingual support

## 11. Disclaimer
This is an educational prototype. Local waste-management rules differ by city and country. Users should follow their local authority's disposal guidance, especially for hazardous and electronic waste.

## 12. Author
**Raviraj Kumar Mahto**
B.Tech CSE – AI for Sustainability Virtual Internship Project
