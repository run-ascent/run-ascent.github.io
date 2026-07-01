export const siteConfig = {
  nextRun: {
    label: 'NEXT ASCENT',
    day: 'SUNDAY',
    time: '06:30 AM',
    place: 'SAME PLACE',
    note: 'ALL PACES',
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
    description: 'Easy group run · All paces',
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
    when: 'APR 19 / 06:30',
    title: 'Reset Run',
    description: 'A low-pressure exam-season run',
    action: 'See route',
    url: '/routes',
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
  { value: '16', label: 'Active Athletes' },
  { value: '232.7 KM', label: 'Moved Together' },
  { value: '2,148 M', label: 'Climbed' },
];

export const consistencyBoard = [
  { name: 'Karan Singh', days: '26 RUNS' },
  { name: 'Shrayansh Tiwari', days: '12 RUNS' },
  { name: 'Vaibhava KG', days: '5 RUNS' },
  { name: 'Preetam Badagi', days: '3 RUNS' },
  { name: 'Priyanshu Tiwari', days: '3 RUNS' },
  { name: 'A.R.M .', days: '3 RUNS' },
  { name: 'Kushal Agrawal', days: '2 RUNS' },
  { name: 'Abhinav Joshy', days: '2 RUNS' },
  { name: 'Ayush Singh', days: '2 RUNS' },
  { name: 'Rudra Patel', days: '1 RUN' },
  { name: 'Sanjay B', days: '1 RUN' },
  { name: 'Adrija Misra', days: '1 RUN' },
  { name: 'Ashish .', days: '1 RUN' },
  { name: 'BHUVI 027', days: '1 RUN' },
  { name: 'Gowri Vinod', days: '1 RUN' },
  { name: 'Naman Agarwal', days: '1 RUN' },
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
