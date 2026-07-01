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
    when: 'MID-WEEK / 06:30 AM',
    title: 'Recovery Run',
    description: 'A relaxed mid-week group jog around the foothills.',
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
  { rank: 1, name: 'Karan Singh', distance: '113.2 km', runs: 26, longest: '22.3 km', pace: '4:35 /km', elevation: '922 m' },
  { rank: 2, name: 'Shrayansh Tiwari', distance: '42.6 km', runs: 12, longest: '6.0 km', pace: '6:12 /km', elevation: '469 m' },
  { rank: 3, name: 'Rudra Patel', distance: '10.0 km', runs: 1, longest: '10.0 km', pace: '5:35 /km', elevation: '86 m' },
  { rank: 4, name: 'Preetam Badagi', distance: '8.7 km', runs: 3, longest: '5.2 km', pace: '5:53 /km', elevation: '39 m' },
  { rank: 5, name: 'Kushal Agrawal', distance: '7.0 km', runs: 2, longest: '5.0 km', pace: '5:38 /km', elevation: '59 m' },
  { rank: 6, name: 'Priyanshu Tiwari', distance: '6.4 km', runs: 3, longest: '4.5 km', pace: '6:46 /km', elevation: '95 m' },
  { rank: 7, name: 'Sanjay B', distance: '5.4 km', runs: 1, longest: '5.4 km', pace: '8:31 /km', elevation: '41 m' },
  { rank: 8, name: 'Adrija Misra', distance: '5.2 km', runs: 1, longest: '5.2 km', pace: '8:17 /km', elevation: '65 m' },
  { rank: 9, name: 'Abhinav Joshy', distance: '5.2 km', runs: 2, longest: '4.6 km', pace: '5:57 /km', elevation: '62 m' },
  { rank: 10, name: 'Ashish .', distance: '5.0 km', runs: 1, longest: '5.0 km', pace: '5:16 /km', elevation: '57 m' },
  { rank: 11, name: 'Ayush Singh', distance: '5.0 km', runs: 2, longest: '4.5 km', pace: '6:56 /km', elevation: '54 m' },
  { rank: 12, name: 'A.R.M .', distance: '4.7 km', runs: 3, longest: '2.0 km', pace: '3:42 /km', elevation: '61 m' },
  { rank: 13, name: 'Vaibhava KG', distance: '4.2 km', runs: 5, longest: '3.0 km', pace: '6:18 /km', elevation: '21 m' },
  { rank: 14, name: 'BHUVI 027', distance: '4.0 km', runs: 1, longest: '4.0 km', pace: '5:56 /km', elevation: '36 m' },
  { rank: 15, name: 'Gowri Vinod', distance: '3.1 km', runs: 1, longest: '3.1 km', pace: '7:55 /km', elevation: '38 m' },
  { rank: 16, name: 'Naman Agarwal', distance: '3.0 km', runs: 1, longest: '3.0 km', pace: '5:36 /km', elevation: '43 m' }
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
