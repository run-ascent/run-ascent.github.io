# ASCENT Website Editing Guide

This guide shows where to change the editable parts of the ASCENT website and how to add real photos.

## Quick Map

| What you want to edit | File |
| --- | --- |
| Next run ticker | `src/data/site.js` |
| Strava, WhatsApp, Instagram links | `src/data/site.js` |
| Weekly events | `src/data/site.js` |
| Route cards | `src/data/site.js` |
| Club Pulse numbers | `src/data/site.js` |
| Consistency Board names | `src/data/site.js` |
| Gallery captions and image paths | `src/data/site.js` |
| Page wording and structure | `src/App.jsx` |
| Colors, spacing, layout, hero art | `src/styles.css` |
| GitHub Pages base path | `vite.config.js` |

## Edit Weekly Run Details

Open `src/data/site.js` and edit this block:

```js
nextRun: {
  label: 'NEXT ASCENT',
  day: 'SUNDAY',
  time: '06:30 AM',
  place: 'SAME PLACE',
  note: 'ALL PACES',
},
```

Example:

```js
nextRun: {
  label: 'NEXT ASCENT',
  day: 'SUNDAY',
  time: '06:15 AM',
  place: 'MAIN GATE',
  note: 'ALL PACES',
},
```

## Edit Community Links

In `src/data/site.js`, replace the placeholder URLs:

```js
links: {
  strava: 'https://www.strava.com/clubs/',
  whatsapp: 'https://chat.whatsapp.com/',
  instagram: 'https://www.instagram.com/',
},
```

Use the full link, including `https://`.

## Edit Weekly Events

In `src/data/site.js`, edit the `events` list. Each card uses:

```js
{
  when: 'SUN / 06:30',
  title: 'Sunday Ascent',
  description: 'Easy group run · All paces',
  action: 'Join this run',
}
```

To add another event, copy one full block, paste it inside the square brackets, and change the text. Keep commas between blocks.

## Edit Routes

Route cards are in the `routes` list in `src/data/site.js`.

Each route supports:

```js
{
  name: 'Campus Warmup Loop',
  distance: '2.4 KM',
  climb: '42 M',
  effort: 'Beginner',
  surface: 'Campus road',
  start: 'Main gate',
  notes: 'Short, social, and easy to exit early.',
}
```

## Edit Club Pulse

The placeholder stats are here:

```js
export const pulseStats = [
  { value: '28', label: 'Active Climbers' },
  { value: '163.4 KM', label: 'Moved Together' },
  { value: '2,140 M', label: 'Climbed' },
];
```

The Consistency Board is here:

```js
export const consistencyBoard = [
  { name: 'Ananya', days: '4 DAYS' },
  { name: 'Aditya', days: '3 DAYS' },
  { name: 'Nandana', days: '3 DAYS' },
];
```

## Upload Photos

Put real ASCENT photos inside:

```text
public/images/
```

Recommended names:

```text
public/images/sunday-start.jpg
public/images/vithura-road.jpg
public/images/post-run-chai.jpg
public/images/hill-regroup.jpg
```

Then open `src/data/site.js` and edit `galleryItems`.

Before:

```js
{
  caption: 'Early light near campus',
  alt: 'ASCENT runners gathering near campus in the early morning',
  image: '',
}
```

After:

```js
{
  caption: 'Early light near campus',
  alt: 'ASCENT runners gathering near campus in the early morning',
  image: 'images/sunday-start.jpg',
}
```

Use `images/filename.jpg` rather than `/images/filename.jpg`. The website automatically adds the correct base path for local testing and for GitHub Pages.

## Photo Tips

- Use `.jpg` for normal photos.
- Use `.png` only when the image needs transparency.
- Keep each image below about 500 KB if possible.
- Crop gallery photos vertically, close to a 4:5 ratio.
- Write meaningful `alt` text for accessibility.

## Test Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build Before Publishing

```bash
npm run build
```

If the build succeeds, push the changes to GitHub. The GitHub Actions deploy workflow will publish the `dist` output automatically if GitHub Pages is set to **GitHub Actions**.
