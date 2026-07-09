# ASCENT

The digital home of the student-led running community surrounding the foothills of Vithura and IISER TVM. Built to showcase loops, track consistency without pace pressure, and log captain journals.

Live Website: [run-ascent.github.io](https://run-ascent.github.io)

---

## Credits

* **Logo Design**: Abhinav Joshy
* **Website Development**: Shrayansh

---

## Technical Architecture

* **Frontend**: React + Vite (Single Page Application)
* **Styling**: Pure Vanilla CSS for premium, optimized layouts (`src/styles.css`)
* **GPX Mapping**: Leaflet.js with Map tiles (CartoDB Voyager) and Satellite toggles (Esri World Imagery)
* **Build Tool**: Vite (`vite.config.js`)
* **Deployments**: Automated deployment via GitHub Pages

---

## Developer Guide: How to Update Content

Most website updates (stories, routes, schedule, and standings) are managed in a single, configuration-driven file:
📁 **[`src/data/site.jsx`](file:///Users/tshrayansh/run-ascent/src/data/site.jsx)**

### 1. Updating the Weekly Activity Board (Pulse Standings)
To update the weekly consistency standings (from Strava screenshots or logs):
1. Open **[`src/data/site.jsx`](file:///Users/tshrayansh/run-ascent/src/data/site.jsx#L91)**.
2. Locate the `consistencyBoard` array.
3. Update the list items with this structure:
   ```javascript
   {
     rank: 1,
     name: "Athlete Name",
     distance: "78.4 km",
     runs: 15,
     longest: "18.0 km", // Optional detail
     pace: "4:45 /km",   // Optional detail
     elevation: "820 m"  // Conquered elevation
   }
   ```
4. Update the combined community totals (Runners, Combined Distance, and Combined Elevation) inside the `pulseStats` array at line 85 of the same file.

---

### 2. Updating the Weekly Run Schedule
To edit the schedules on the homepage or adjust Strava registration links:
1. Open **[`src/data/site.jsx`](file:///Users/tshrayansh/run-ascent/src/data/site.jsx#L18)**.
2. Inside the `events` array, update details for the Sunday Ascent, mid-week jogs, or buddy runs:
   ```javascript
   {
     when: 'SUN / 06:30 AM',
     title: 'Sunday Ascent',
     description: 'Easy group run · Run, walk, or jog',
     action: 'Join this run',
     url: 'https://strava.com/clubs/...' // Link to the Strava Club Group Event page
   }
   ```

---

### 3. Adding or Updating GPX Routes
The website uses an interactive viewer that automatically parses elevation and maps path coordinate loops directly from a standard GPX file.
1. Place your new `.gpx` file inside the public assets folder:
   📁 **`public/gpx/`**
2. Open **[`src/data/site.jsx`](file:///Users/tshrayansh/run-ascent/src/data/site.jsx#L42)**.
3. Add or update the route object in the `routes` array:
   ```javascript
   {
     name: 'Route Title',
     distance: '10.0 KM',      // Will be verified by GPX parsing
     climb: '180 M',           // Will be verified by GPX parsing
     effort: 'Endurance',      // Difficulty level description
     surface: 'Road / Trail',
     start: 'IISER Main Gate', // Starting landmark
     notes: 'Description of winding turns and path loops.',
     gpx: 'gpx/your-file-name.gpx' // Path relative to public folder
   }
   ```

---

### 4. Publishing Blog Logs & Stories
To publish a new running journal, race report, or captain's log:
1. Save your featured blog header image inside:
   📁 **`public/images/`** (Downscale to a maximum width of `1200px` at `75%` quality for faster loading).
2. Open **[`src/data/site.jsx`](file:///Users/tshrayansh/run-ascent/src/data/site.jsx#L127)**.
3. Append a new blog object to the `storiesList` array:
   ```javascript
   {
     id: 'unique-story-slug', // Used for routing, e.g. /stories/unique-story-slug
     category: 'RACE REPORT', // Tag label
     title: 'Stories Title Here',
     date: 'Month Year',
     readTime: '3 MIN READ',
     author: {
       name: 'Author Name',
       role: 'Community Role',
       avatarColor: 'var(--orange)', // CSS theme color variable
       initials: 'AN'                // 2-letter avatar initials
     },
     image: 'images/your-photo.jpeg',
     description: 'Short preview description shown on stories catalog card.',
     content: (
       <>
         <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
           First paragraph of your blog text goes here.
         </p>
         <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
           Second paragraph of your blog text goes here.
         </p>
       </>
     )
   }
   ```

---

### 5. Adding Photos to the Moments Gallery
To add moments to the gallery shown under the "Ascent in Motion" section:
1. Save the photography file inside:
   📁 **`public/images/`**
2. Open **[`src/data/site.jsx`](file:///Users/tshrayansh/run-ascent/src/data/site.jsx#L104)**.
3. Add a new object to the `galleryItems` array:
   ```javascript
   {
     caption: 'A catchy moment name',
     alt: 'A detailed image accessibility description.',
     image: 'images/your-moment.jpeg'
   }
   ```

---

## Instagram Launch Post Exporter

To design features promo cards, routes, pulse standings, and schedules slides:
1. Double-click the file **`instagram_posts.html`** in the root directory to open it in your browser.
2. Review the slide cards rendered in standard `4:5` portrait aspect ratio.
3. Click **`EXPORT PNG`** under any slide to render it at high-resolution Retina quality (**2160x2700px**) and download it to your folder.

---

## Local Development & Installation

Ensure you have [Node.js](https://nodejs.org) installed.

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the local site.

3. **Build for Production Deployment**:
   ```bash
   npm run build
   ```
   *Note: Deployments build to `/dist` and are served statically via GitHub Pages.*
