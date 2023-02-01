# Sendit

Sendit is a polished, marketing website template for SvelteKit. Browse through a [live demo](https://pleasant-worm.cloudvent.net/).

![Sendit template screenshot](/static/images/_screenshot.png)

[![Deploy to CloudCannon](https://buttons.cloudcannon.com/deploy.svg)](https://app.cloudcannon.com/register#sites/connect/github/CloudCannon/sendit-sveltekit-template)

## Features

- Pre-built pages
- Pre-styled components
- Blog with pagination and category pages
- Configurable navigation and footer
- Multiple hero options
- Optimised for editing in CloudCannon

## Prerequisites
Requires:
- node: `^16.24.0`
- npm: `^8.3.1`


## Setup
Run `npm install` to install the required packages.
### Developing

If you are working locally, you can run the following command to start a development server:

```bash
npm run dev
```
By default the site will be at `http://localhost:5173/`.
### Building

If you are working locally, you can run the following command to build a production version of this site:

```bash
npm run build
```
> The above command is run when building this site in CloudCannon (unless configured otherwise).

You can preview the production build with `npm run preview`. This will serve the site at `http://localhost:4173/`.

## Editing

Sendit is set up for adding, updating and removing pages, components, posts, navigation and footer elements in [CloudCannon](https://app.cloudcannon.com/).

### Nav/footer details

* Reused around the site to save multiple editing locations.
* Set in the *Data* section with respective names

### SEO details and favicon

* Favicon and site SEO details are set in the *Data* / *Site* section
* SEO details can also be set in pages for page specific details
