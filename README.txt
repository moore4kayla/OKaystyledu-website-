OKAYSTYLEDU OWNER DASHBOARD
============================

Included:
- index.html — client-facing booking website
- admin.html — owner dashboard
- content.json — editable site content
- styles.css / site.js
- images/ — original uploaded logo and reference photos, copied without edits

IMPORTANT:
The owner dashboard saves drafts in the browser and can export an updated content.json.
A static dashboard cannot securely publish changes to the live site by itself. To make
the Publish button truly update the live client website, connect this folder to a Git
repository (such as GitHub) and enable Netlify continuous deployment, or connect a CMS.

CURRENT NETLIFY SITE:
https://okaystyledu-booking.netlify.app

BOOKING:
The booking form is configured for Netlify Forms using the form name:
okaystyledu-booking

For the safest owner setup, do not put Netlify API tokens or passwords into the
dashboard. Use Netlify/GitHub account authorization instead.
