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
    start: 'IISER Main Gate',
    notes: 'A short, gentle half-kilometer loop on campus roads, ideal for warming up joints and light activation before a main run.',
    gpx: 'gpx/campus-warmup.gpx',
  },
  {
    name: 'Bonacaud Checkpost Run',
    distance: '5.0 KM',
    climb: '110 M',
    effort: 'Active / Hilly',
    surface: 'Forest road',
    start: 'IISER Main Gate',
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
  { value: '28', label: 'Active Climbers' },
  { value: '163.4 KM', label: 'Moved Together' },
  { value: '2,140 M', label: 'Climbed' },
];

export const consistencyBoard = [
  { name: 'Ananya', days: '4 DAYS' },
  { name: 'Aditya', days: '3 DAYS' },
  { name: 'Nandana', days: '3 DAYS' },
];

export const galleryItems = [
  {
    caption: 'Early light near campus',
    alt: 'ASCENT runners gathering near campus in the early morning',
    image: '',
  },
  {
    caption: 'Post-run chai stop',
    alt: 'ASCENT runners at a post-run chai stop',
    image: '',
  },
  {
    caption: 'Green road out of Vithura',
    alt: 'A green road near Vithura used by ASCENT runners',
    image: '',
  },
  {
    caption: 'Sunday regroup point',
    alt: 'ASCENT runners regrouping during a Sunday run',
    image: '',
  },
];
