import React from 'react';
export const siteConfig = {
  nextRun: {
    label: 'NEXT ASCENT',
    day: 'SUNDAY',
    time: '06:30 AM',
    place: 'VIRTUAL',
    note: 'JUST SHOW UP',
  },
  links: {
    strava: 'https://www.strava.com/clubs/ascent-runners-club',
    instagram: 'https://www.instagram.com/runascent/',
    email: 'mailto:ascentrunclub@gmail.com',
    sundayRun: 'https://www.strava.com/clubs/1914011/group_events/3505155653881192768/occurrences/FQIWgIXTgOCf6KRhHBTUHxQMFDgUDBQAFAAAHBaA3ZC64WcAAA==',
  },
};

export const events = [
  {
    when: 'SUN / 06:30',
    title: 'Sunday Ascent',
    description: 'Easy group run · Run, walk, or jog',
    action: 'Join this run',
    url: 'https://www.strava.com/clubs/1914011/group_events/3505155653881192768/occurrences/FQIWgIXTgOCf6KRhHBTUHxQMFDgUDBQAFAAAHBaA3ZC64WcAAA==',
  },
  {
    when: 'WED / OPEN',
    title: 'Find a Run Buddy',
    description: 'Runs, rides, hikes via General Discussion',
    action: 'Ask the group',
    url: 'https://www.strava.com/clubs/ascent-runners-club',
  },
  {
    when: 'MID-WEEK / 06:30 AM',
    title: 'Recovery Run',
    description: 'A relaxed mid-week group jog around the foothills.',
    action: 'See route',
    url: '/routes',
  },
];

export const upcomingRaces = [
  {
    date: 'AUG 09, 2026',
    title: 'Trivandrum Heritage Run',
    description: '10K timed route celebrating the culture of Kerala’s capital.',
    distance: '10K',
    action: 'Register',
    url: 'https://myraceindia.com',
  },
  {
    date: 'SEP 13, 2026',
    title: 'Kovalam Beach Marathon',
    description: 'Scenic run along Kovalam Beach supporting mental health awareness.',
    distance: '42.2K / 21.1K / 10K / 5K',
    action: 'Register',
    url: 'https://townscript.com',
  },
  {
    date: 'NOV 15, 2026',
    title: 'UST Trivandrum Marathon',
    description: 'The premier annual city road race starting from the UST Campus.',
    distance: '42.2K / 21.1K / 10K / 5K',
    action: 'Register',
    url: 'https://trivandrummarathon.com',
  },
];

export const routes = [
  {
    name: 'Campus Warmup Loop',
    distance: '0.5 KM',
    climb: '12 M',
    effort: 'Warmup',
    surface: 'Campus road',
    start: 'Anamudi Hostel',
    notes: 'A short, gentle half-kilometer loop on campus roads, ideal for warming up joints and light activation before a main run.',
    gpx: 'gpx/campus-warmup.gpx',
  },
  {
    name: 'Indoor to Jersey Farm Run',
    distance: '3.0 KM',
    climb: '30 M',
    effort: 'Easy / Recovery',
    surface: 'Road',
    start: 'Indoor Stadium',
    notes: 'An out-and-back route from the campus Indoor Stadium winding through local settlements and residential neighborhoods towards Jersey Farm.',
    gpx: 'gpx/3k-indoor-to-jersey-farm.gpx',
  },
  {
    name: 'Bonacaud Checkpost Run',
    distance: '5.0 KM',
    climb: '110 M',
    effort: 'Active / Hilly',
    surface: 'Forest road',
    start: 'Indoor Stadium',
    notes: 'A stunningly beautiful, lush green route winding through forest foothills up to the Bonacaud forest checkpost / picket station.',
    gpx: 'gpx/campus-to-checkpost-5k.gpx',
  },
  {
    name: 'Vithura Green Roll',
    distance: '10.0 KM',
    climb: '180 M',
    effort: 'Endurance / Long Run',
    surface: 'Road',
    start: 'IISER Main Gate',
    notes: 'A rolling out-and-back route from campus down towards Vithura. Scenic roadside greenery and a steady effort for longer endurance runs.',
    gpx: 'gpx/campus-to-vithura.gpx',
  },
];

export const pulseStats = [
  { value: '60', label: 'Club Runners' },
  { value: '233.8 KM', label: 'Moved Together' },
  { value: '1,581 M', label: 'Climbed' },
];

export const consistencyBoard = [
  { rank: 1, name: 'Karan Beast', distance: '56.7 km', runs: 16, longest: '10.0 km', pace: '4:43 /km', elevation: '276 m' },
  { rank: 2, name: 'Bindusar Sahoo', distance: '43.5 km', runs: 4, longest: '21.1 km', pace: '5:24 /km', elevation: '433 m' },
  { rank: 3, name: 'Sanjay B', distance: '33.2 km', runs: 2, longest: '21.2 km', pace: '8:01 /km', elevation: '177 m' },
  { rank: 4, name: 'Hrithik Kumar', distance: '21.3 km', runs: 1, longest: '21.3 km', pace: '7:16 /km', elevation: '44 m' },
  { rank: 5, name: 'Vartika S', distance: '20.2 km', runs: 1, longest: '20.2 km', pace: '10:28 /km', elevation: '46 m' },
  { rank: 6, name: 'Shrayansh Tiwari', distance: '14.9 km', runs: 4, longest: '6.6 km', pace: '7:01 /km', elevation: '78 m' },
  { rank: 7, name: 'Gouri M', distance: '10.4 km', runs: 2, longest: '6.0 km', pace: '8:57 /km', elevation: '127 m' },
  { rank: 8, name: 'Adrija Misra', distance: '8.0 km', runs: 2, longest: '5.0 km', pace: '8:17 /km', elevation: '59 m' },
  { rank: 9, name: 'Rudra Patel', distance: '6.9 km', runs: 1, longest: '6.9 km', pace: '5:35 /km', elevation: '69 m' },
  { rank: 10, name: 'Aleena Sabu Koshy', distance: '5.4 km', runs: 1, longest: '5.4 km', pace: '7:03 /km', elevation: '41 m' },
  { rank: 11, name: 'Anzil Muhammed K', distance: '5.1 km', runs: 1, longest: '5.1 km', pace: '5:12 /km', elevation: '50 m' },
  { rank: 12, name: 'Tushar Sharma', distance: '5.1 km', runs: 1, longest: '5.1 km', pace: '6:24 /km', elevation: '161 m' },
  { rank: 13, name: 'Preetam Badagi', distance: '3.1 km', runs: 1, longest: '3.1 km', pace: '6:19 /km', elevation: '20 m' }
];

export const galleryItems = [
  {
    caption: 'The Spark: Where it All Began',
    alt: 'The founding crew of ASCENT gathering together for the very first group run, sparking the community.',
    image: 'images/First-Ascent.jpeg',
  },
  {
    caption: 'Sunday Sunrise Gathering',
    alt: 'ASCENT community runners lining up together and smiling before heading out into the hills.',
    image: 'images/Sunday-Ascent.jpeg',
  },
  {
    caption: 'Foothill Canopies of Vithura',
    alt: 'A scenic forest canopy framing the winding asphalt road path on the Vithura route.',
    image: 'images/Scenic-Vithura-Roads.jpeg',
  },
  {
    caption: 'Envirothon: Beyond Campus',
    alt: 'ASCENT members representing the club on the rolling mountain trails during the Vagamon Envirothon.',
    image: 'images/Ascent-Vagamon-Envirothon.jpeg',
  },
];

export const storiesList = [
  {
    id: 'vagamon',
    galleryId: 'envirothon',
    category: 'RACE REPORT',
    title: 'Tackling the Trails: Ascent at Vagamon Envirothon',
    date: 'June 2026',
    readTime: '3 MIN READ',
    author: {
      name: 'Vaibhava',
      role: 'Runner',
      avatarColor: 'var(--orange)',
      initials: 'KG'
    },
    image: 'images/Ascent-Vagamon-Envirothon.jpeg',
    description: 'ASCENT members headed to the high altitudes of Vagamon to take on the rugged trails, misty hill contours, and tea garden paths at the DCSMAT Envirothon.',
    content: (
      <>
        <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          Vagamon welcomed the ASCENT team with mist-laden climbs and temperatures hovering around 18°C. Taking place on the hills of DCSMAT, the trail route wound through muddy estate paths, loose gravel stretches, and steep rolling slopes.
        </p>
        <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          Representing the club, our runners experienced the true nature of Western Ghats trail running. "The climbing was relentless, but the views of the valley through the fog kept us driving forward," shared one of the participants. The event marked a milestone for ASCENT, proving that our training around IISER TVM's steep perimeter prepares us for any mountain.
        </p>
      </>
    )
  },
  {
    id: 'safety',
    galleryId: 'safety',
    category: 'GUIDE',
    title: 'IISER TVM Foothill Running: A Safety & Gear Manual',
    date: 'May 2026',
    readTime: '4 MIN READ',
    author: {
      name: 'Shrayansh Tiwari',
      role: 'Community Founder',
      avatarColor: 'var(--green)',
      initials: 'ST'
    },
    image: 'images/Scenic-Vithura-Roads.jpeg',
    description: "From steep elevation contours around Anamudi to spotting wild fauna on forest roads—here is our checklist for running safely in Vithura's tropical terrain.",
    content: (
      <>
        <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          Running in the Vithura foothills offers incredible views but demands respect for the local ecosystem. Here is our community safety checklist:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px', lineHeight: '1.8', listStyleType: 'square', fontSize: '1.05rem' }}>
          <li style={{ marginBottom: '10px' }}><strong>Visibility is Key:</strong> Forest roads are narrow and frequently shadowed by dense canopy. Wear high-visibility, bright attire.</li>
          <li style={{ marginBottom: '10px' }}><strong>Wildlife Awareness:</strong> The forest sectors surrounding the campus are rich in wildlife. Avoid running alone after dark, and stay alert (no noise-canceling headphones).</li>
          <li style={{ marginBottom: '10px' }}><strong>Hydration & Humidity:</strong> The tropical climate means rapid fluid loss even on cool morning runs. Always carry a handheld flask for runs longer than 5K.</li>
          <li style={{ marginBottom: '10px' }}><strong>Pacing Hills:</strong> IISER TVM's elevation climbs are best handled with a relaxed stride. Walk the steep slopes—it is factually more efficient.</li>
        </ul>
      </>
    )
  },
  {
    id: 'founding',
    galleryId: 'founding',
    category: 'COMMUNITY',
    title: 'Where It All Began: The Founding Story of ASCENT',
    date: 'January 2026',
    readTime: '3 MIN READ',
    author: {
      name: 'Preetam',
      role: 'Route Coordinator',
      avatarColor: 'var(--forest)',
      initials: 'PR'
    },
    image: 'images/First-Ascent.jpeg',
    description: 'How a simple mid-week warmup run sparked a student-led community of 57 active runners moving and climbing the Western Ghats foothills together.',
    content: (
      <>
        <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          What started as a few friends coordinating to meet for a sunrise run outside Anamudi Hostel has grown into a structured, active group of 57 runners.
        </p>
        <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          ASCENT was founded on a simple realization: student life is busy, but showing up together makes consistent training effortless. By eliminating pace pressure and focusing entirely on collective distance and consistency, we have created a space where elite sprinters and beginner joggers run side-by-side. Our goal remains unchanged: keeping our community moving, one ascent at a time.</p>
      </>
    )
  }
];

export const eventGalleries = [
  {
    id: 'envirothon',
    title: 'Vagamon Envirothon',
    date: 'June 2026',
    coverImage: 'images/Ascent-Vagamon-Envirothon.jpeg',
    storyId: 'vagamon',
    images: [
      'images/Ascent-Vagamon-Envirothon.jpeg',
      'images/events/Envirothon/IMG_20260327_113854.jpg',
      'images/events/Envirothon/IMG_20260327_151749.jpg',
      'images/events/Envirothon/IMG_20260327_152215.jpg',
      'images/events/Envirothon/IMG_20260327_154230.jpg',
      'images/events/Envirothon/IMG_20260327_223123.jpg',
    ]
  },
  {
    id: 'safety',
    title: 'Vithura Foothill Running',
    date: 'May 2026',
    coverImage: 'images/Scenic-Vithura-Roads.jpeg',
    storyId: 'safety',
    images: [
      'images/Scenic-Vithura-Roads.jpeg',
      'images/events/Safety/placeholder-2.svg',
      'images/events/Safety/placeholder-3.svg',
      'images/events/Safety/placeholder-4.svg',
      'images/events/Safety/placeholder-5.svg',
      'images/events/Safety/placeholder-6.svg',
    ]
  },
  {
    id: 'founding',
    title: 'The Founding of ASCENT',
    date: 'January 2026',
    coverImage: 'images/First-Ascent.jpeg',
    storyId: 'founding',
    images: [
      'images/First-Ascent.jpeg',
      'images/events/Founding/placeholder-2.svg',
      'images/events/Founding/placeholder-3.svg',
      'images/events/Founding/placeholder-4.svg',
      'images/events/Founding/placeholder-5.svg',
      'images/events/Founding/placeholder-6.svg',
    ]
  }
];

