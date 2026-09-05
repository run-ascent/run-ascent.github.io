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
    url: 'https://itenrunnersclub.org/events/trivandrum-heritage-run-2026',
  },
  {
    date: 'SEP 13, 2026',
    title: 'Kovalam Beach Marathon',
    description: 'Scenic run along Kovalam Beach supporting mental health awareness.',
    distance: '42.2K / 21.1K / 10K / 5K',
    action: 'Register',
    url: 'https://kovalammarathon.com/',
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

export const weeklyArchive = [
  {
    id: '2026-w35',
    dateLabel: '24 August – 30 August',
    isCurrent: true,
    stats: [
      { value: '75+', label: 'Club Runners' },
      { value: '436.6 KM', label: 'Moved Together' },
      { value: '4,627 M', label: 'Climbed' },
    ],
    board: [
      { rank: 1, name: 'Karan Beast', distance: '102.3 km', runs: 21, longest: '20.0 km', pace: '4:50 /km', elevation: '1,018 m' },
      { rank: 2, name: 'Bindusar Sahoo', distance: '60.7 km', runs: 4, longest: '30.0 km', pace: '6:15 /km', elevation: '857 m' },
      { rank: 3, name: 'Pranav Nedungome', distance: '43.9 km', runs: 5, longest: '15.3 km', pace: '6:19 /km', elevation: '364 m' },
      { rank: 4, name: 'Shrayansh Tiwari', distance: '30.2 km', runs: 4, longest: '14.0 km', pace: '6:12 /km', elevation: '326 m' },
      { rank: 5, name: 'Preetam Badagi', distance: '20.2 km', runs: 2, longest: '14.1 km', pace: '6:11 /km', elevation: '190 m' },
      { rank: 6, name: 'Abhinav Joshy', distance: '19.0 km', runs: 2, longest: '14.0 km', pace: '6:38 /km', elevation: '211 m' },
      { rank: 7, name: 'Kushal Agrawal', distance: '18.5 km', runs: 4, longest: '7.2 km', pace: '5:41 /km', elevation: '176 m' },
      { rank: 8, name: 'Aleena Sabu Koshy', distance: '15.7 km', runs: 2, longest: '9.6 km', pace: '7:27 /km', elevation: '153 m' },
      { rank: 9, name: 'SAROJ MEENA', distance: '15.0 km', runs: 1, longest: '15.0 km', pace: '5:27 /km', elevation: '152 m' },
      { rank: 10, name: 'Pradeep Kumar', distance: '14.6 km', runs: 2, longest: '7.3 km', pace: '5:35 /km', elevation: '146 m' },
      { rank: 11, name: 'Rohit Mathew Titus', distance: '10.2 km', runs: 1, longest: '10.2 km', pace: '7:01 /km', elevation: '102 m' },
      { rank: 12, name: 'Rudra Patel', distance: '9.6 km', runs: 2, longest: '7.1 km', pace: '5:31 /km', elevation: '49 m' },
      { rank: 13, name: 'Dhruv T', distance: '8.4 km', runs: 2, longest: '5.3 km', pace: '5:27 /km', elevation: '178 m' },
      { rank: 14, name: 'Mayuri Datta', distance: '7.6 km', runs: 3, longest: '5.0 km', pace: '8:34 /km', elevation: '31 m' },
      { rank: 15, name: 'Debojit K', distance: '7.0 km', runs: 2, longest: '5.5 km', pace: '6:16 /km', elevation: '124 m' },
      { rank: 16, name: 'PRIYANSHU TIWARI', distance: '7.0 km', runs: 2, longest: '4.4 km', pace: '7:50 /km', elevation: '0 m' },
      { rank: 17, name: 'Gouri M', distance: '6.0 km', runs: 1, longest: '6.0 km', pace: '7:56 /km', elevation: '61 m' },
      { rank: 18, name: 'Vyshnavi Chamarty', distance: '6.0 km', runs: 1, longest: '6.0 km', pace: '6:53 /km', elevation: '95 m' },
      { rank: 19, name: 'Anzil Muhammed K', distance: '5.5 km', runs: 1, longest: '5.5 km', pace: '5:40 /km', elevation: '56 m' },
      { rank: 20, name: 'Aditya Chavan', distance: '5.5 km', runs: 1, longest: '5.5 km', pace: '6:14 /km', elevation: '90 m' },
      { rank: 21, name: 'Keerthan Adiga', distance: '5.1 km', runs: 1, longest: '5.1 km', pace: '5:33 /km', elevation: '58 m' },
      { rank: 22, name: 'Aashish Chandrawat', distance: '5.1 km', runs: 2, longest: '3.8 km', pace: '5:23 /km', elevation: '51 m' },
      { rank: 23, name: 'Ashish Kujur', distance: '5.0 km', runs: 1, longest: '5.0 km', pace: '6:22 /km', elevation: '50 m' },
      { rank: 24, name: 'Naman Agarwal', distance: '4.0 km', runs: 4, longest: '2.0 km', pace: '6:06 /km', elevation: '42 m' },
      { rank: 25, name: 'Adrija Misra', distance: '3.0 km', runs: 1, longest: '3.0 km', pace: '8:42 /km', elevation: '33 m' },
      { rank: 26, name: 'Vardhan Rathod', distance: '1.5 km', runs: 1, longest: '1.5 km', pace: '6:47 /km', elevation: '14 m' }
    ]
  },
  {
    id: '2026-w34',
    dateLabel: '17 August – 23 August',
    isCurrent: false,
    stats: [
      { value: '75+', label: 'Club Runners' },
      { value: '400.8 KM', label: 'Moved Together' },
      { value: '3,892 M', label: 'Climbed' },
    ],
    board: [
      { rank: 1, name: 'Jobal Joseph', distance: '52.5 km', runs: 3, longest: '30.0 km', pace: '6:05 /km', elevation: '160 m' },
      { rank: 2, name: 'Karan Beast', distance: '42.8 km', runs: 9, longest: '20.0 km', pace: '4:19 /km', elevation: '302 m' },
      { rank: 3, name: 'Preetam Badagi', distance: '34.8 km', runs: 4, longest: '14.1 km', pace: '6:42 /km', elevation: '411 m' },
      { rank: 4, name: 'Pranav Nedungome', distance: '33.7 km', runs: 5, longest: '14.4 km', pace: '6:16 /km', elevation: '389 m' },
      { rank: 5, name: 'Shrayansh Tiwari', distance: '31.3 km', runs: 4, longest: '14.0 km', pace: '6:57 /km', elevation: '353 m' },
      { rank: 6, name: 'Keerthan Adiga', distance: '30.1 km', runs: 3, longest: '14.0 km', pace: '6:09 /km', elevation: '309 m' },
      { rank: 7, name: 'Rudra Patel', distance: '26.3 km', runs: 2, longest: '22.0 km', pace: '5:57 /km', elevation: '140 m' },
      { rank: 8, name: 'Bindusar Sahoo', distance: '25.4 km', runs: 4, longest: '10.2 km', pace: '6:21 /km', elevation: '621 m' },
      { rank: 9, name: 'BHUVI 027', distance: '22.1 km', runs: 3, longest: '10.0 km', pace: '6:01 /km', elevation: '243 m' },
      { rank: 10, name: 'SAROJ MEENA', distance: '15.0 km', runs: 1, longest: '15.0 km', pace: '6:08 /km', elevation: '155 m' },
      { rank: 11, name: 'Dhruv T', distance: '12.2 km', runs: 4, longest: '4.0 km', pace: '5:20 /km', elevation: '5 m' },
      { rank: 12, name: 'Aleena Sabu Koshy', distance: '11.2 km', runs: 2, longest: '6.0 km', pace: '6:57 /km', elevation: '108 m' },
      { rank: 13, name: 'Abhinav Joshy', distance: '10.2 km', runs: 2, longest: '6.3 km', pace: '6:10 /km', elevation: '75 m' },
      { rank: 14, name: 'Gouri M', distance: '8.4 km', runs: 2, longest: '5.0 km', pace: '7:43 /km', elevation: '82 m' },
      { rank: 15, name: 'Nigam Jyoti Panigrahi', distance: '7.1 km', runs: 1, longest: '7.1 km', pace: '6:34 /km', elevation: '77 m' },
      { rank: 16, name: 'Rohit Mathew Titus', distance: '7.0 km', runs: 1, longest: '7.0 km', pace: '6:25 /km', elevation: '59 m' },
      { rank: 17, name: 'sanjay b', distance: '6.0 km', runs: 1, longest: '6.0 km', pace: '6:19 /km', elevation: '73 m' },
      { rank: 18, name: 'Vyshnavi Chamarty', distance: '6.0 km', runs: 1, longest: '6.0 km', pace: '7:22 /km', elevation: '93 m' },
      { rank: 19, name: 'YUVARAJ M', distance: '5.0 km', runs: 1, longest: '5.0 km', pace: '7:34 /km', elevation: '78 m' },
      { rank: 20, name: 'K HITHAISH SAI', distance: '4.9 km', runs: 1, longest: '4.9 km', pace: '7:37 /km', elevation: '87 m' },
      { rank: 21, name: 'Rajvee R S', distance: '4.7 km', runs: 1, longest: '4.7 km', pace: '6:59 /km', elevation: '51 m' },
      { rank: 22, name: 'Mayuri Datta', distance: '2.0 km', runs: 1, longest: '2.0 km', pace: '7:35 /km', elevation: '0 m' },
      { rank: 23, name: 'Vardhan Rathod', distance: '2.0 km', runs: 1, longest: '2.0 km', pace: '7:15 /km', elevation: '21 m' },
      { rank: 24, name: 'RAJIV CHAUHAN', distance: '0.1 km', runs: 1, longest: '0.1 km', pace: '8:07 /km', elevation: '0 m' }
    ]
  },
  {
    id: '2026-w33',
    dateLabel: '10 August – 16 August',
    isCurrent: false,
    stats: [
      { value: '75+', label: 'Club Runners' },
      { value: '368.7 KM', label: 'Moved Together' },
      { value: '3,480 M', label: 'Climbed' },
    ],
    board: [
      { rank: 1, name: 'Karan Beast', distance: '53.6 km', runs: 15, longest: '10.0 km', pace: '4:56 /km', elevation: '280 m' },
      { rank: 2, name: 'Jobal Joseph', distance: '53.4 km', runs: 4, longest: '21.8 km', pace: '6:27 /km', elevation: '185 m' },
      { rank: 3, name: 'Bindusar Sahoo', distance: '40.0 km', runs: 5, longest: '15.2 km', pace: '6:05 /km', elevation: '655 m' },
      { rank: 4, name: 'Pranav Nedungome', distance: '32.5 km', runs: 4, longest: '15.0 km', pace: '6:47 /km', elevation: '325 m' },
      { rank: 5, name: 'Shrayansh Tiwari', distance: '29.6 km', runs: 5, longest: '15.1 km', pace: '6:35 /km', elevation: '314 m' },
      { rank: 6, name: 'Abhinav Joshy', distance: '20.1 km', runs: 4, longest: '9.7 km', pace: '5:45 /km', elevation: '204 m' },
      { rank: 7, name: 'Keerthan Adiga', distance: '15.2 km', runs: 3, longest: '7.0 km', pace: '6:06 /km', elevation: '189 m' },
      { rank: 8, name: 'Hrithik Kumar', distance: '14.3 km', runs: 3, longest: '6.1 km', pace: '6:39 /km', elevation: '193 m' },
      { rank: 9, name: 'Rohit Mathew Titus', distance: '11.0 km', runs: 2, longest: '6.0 km', pace: '7:22 /km', elevation: '102 m' },
      { rank: 10, name: 'Aswin Das', distance: '10.2 km', runs: 2, longest: '5.5 km', pace: '5:33 /km', elevation: '124 m' },
      { rank: 11, name: 'A.R.M .', distance: '10.0 km', runs: 1, longest: '10.0 km', pace: '4:57 /km', elevation: '74 m' },
      { rank: 12, name: 'Rudra Patel', distance: '10.0 km', runs: 1, longest: '10.0 km', pace: '5:44 /km', elevation: '68 m' },
      { rank: 13, name: 'Abhinav Hatwar', distance: '10.0 km', runs: 1, longest: '10.0 km', pace: '8:10 /km', elevation: '57 m' },
      { rank: 14, name: 'Anzil Muhammed K', distance: '10.0 km', runs: 1, longest: '10.0 km', pace: '5:36 /km', elevation: '103 m' },
      { rank: 15, name: 'sanjay b', distance: '9.1 km', runs: 2, longest: '6.0 km', pace: '6:38 /km', elevation: '94 m' },
      { rank: 16, name: 'Naman Agarwal', distance: '7.5 km', runs: 2, longest: '5.5 km', pace: '6:18 /km', elevation: '79 m' },
      { rank: 17, name: 'Pradeep Kumar', distance: '5.5 km', runs: 1, longest: '5.5 km', pace: '5:08 /km', elevation: '169 m' },
      { rank: 18, name: 'Vyshnavi Chamarty', distance: '5.0 km', runs: 1, longest: '5.0 km', pace: '8:01 /km', elevation: '77 m' },
      { rank: 19, name: 'SAROJ MEENA', distance: '5.0 km', runs: 1, longest: '5.0 km', pace: '4:56 /km', elevation: '52 m' },
      { rank: 20, name: 'Aleena Sabu Koshy', distance: '5.0 km', runs: 1, longest: '5.0 km', pace: '8:13 /km', elevation: '48 m' },
      { rank: 21, name: 'Mayuri Datta', distance: '4.3 km', runs: 2, longest: '2.2 km', pace: '7:27 /km', elevation: '20 m' },
      { rank: 22, name: 'PRIYANSHU TIWARI', distance: '2.2 km', runs: 2, longest: '1.7 km', pace: '7:05 /km', elevation: '26 m' },
      { rank: 23, name: 'Vardhan Rathod', distance: '2.1 km', runs: 1, longest: '2.1 km', pace: '6:42 /km', elevation: '4 m' },
      { rank: 24, name: 'Kushal Agrawal', distance: '2.1 km', runs: 1, longest: '2.1 km', pace: '4:59 /km', elevation: '26 m' },
      { rank: 25, name: 'Ayush Singh', distance: '1.0 km', runs: 1, longest: '1.0 km', pace: '4:51 /km', elevation: '12 m' }
    ]
  },
  {
    id: '2026-w32',
    dateLabel: '03 August – 09 August',
    isCurrent: false,
    stats: [
      { value: '75+', label: 'Club Runners' },
      { value: '453.6 KM', label: 'Moved Together' },
      { value: '3,914 M', label: 'Climbed' },
    ],
    board: [
      { rank: 1, name: 'Karan Beast', distance: '59.7 km', runs: 21, longest: '10.0 km', pace: '4:27 /km', elevation: '207 m' },
      { rank: 2, name: 'Jobal Joseph', distance: '39.8 km', runs: 6, longest: '11.3 km', pace: '5:50 /km', elevation: '314 m' },
      { rank: 3, name: 'Preetam Badagi', distance: '34.4 km', runs: 9, longest: '10.1 km', pace: '5:49 /km', elevation: '410 m' },
      { rank: 4, name: 'Bindusar Sahoo', distance: '33.3 km', runs: 5, longest: '10.0 km', pace: '5:22 /km', elevation: '429 m' },
      { rank: 5, name: 'Ayush Singh', distance: '31.8 km', runs: 4, longest: '10.5 km', pace: '6:26 /km', elevation: '270 m' },
      { rank: 6, name: 'Shrayansh Tiwari', distance: '20.9 km', runs: 6, longest: '10.3 km', pace: '5:34 /km', elevation: '192 m' },
      { rank: 7, name: 'Nigam Jyoti Panigrahi', distance: '20.6 km', runs: 3, longest: '11.0 km', pace: '6:08 /km', elevation: '214 m' },
      { rank: 8, name: 'Keerthan Adiga', distance: '20.6 km', runs: 6, longest: '5.1 km', pace: '5:44 /km', elevation: '253 m' },
      { rank: 9, name: 'PRIYANSHU TIWARI', distance: '17.5 km', runs: 4, longest: '10.2 km', pace: '7:02 /km', elevation: '136 m' },
      { rank: 10, name: 'Sanjay B', distance: '17.3 km', runs: 3, longest: '10.2 km', pace: '6:09 /km', elevation: '154 m' },
      { rank: 11, name: 'HRIDYA HAREESH', distance: '16.3 km', runs: 2, longest: '10.3 km', pace: '7:14 /km', elevation: '140 m' },
      { rank: 12, name: 'Rohit Mathew Titus', distance: '16.0 km', runs: 2, longest: '10.0 km', pace: '5:46 /km', elevation: '130 m' },
      { rank: 13, name: 'Aleena Sabu Koshy', distance: '15.3 km', runs: 2, longest: '10.2 km', pace: '6:50 /km', elevation: '125 m' },
      { rank: 14, name: 'Rajvee R S', distance: '13.4 km', runs: 2, longest: '10.3 km', pace: '7:22 /km', elevation: '98 m' },
      { rank: 15, name: 'gowri vinod', distance: '10.4 km', runs: 1, longest: '10.4 km', pace: '7:28 /km', elevation: '82 m' },
      { rank: 16, name: 'Gouri M', distance: '10.3 km', runs: 1, longest: '10.3 km', pace: '7:48 /km', elevation: '58 m' },
      { rank: 17, name: 'Vaibhava KG', distance: '10.3 km', runs: 1, longest: '10.3 km', pace: '7:27 /km', elevation: '58 m' },
      { rank: 18, name: 'BHUVI 027', distance: '10.1 km', runs: 1, longest: '10.1 km', pace: '5:13 /km', elevation: '58 m' },
      { rank: 19, name: 'Vartika S', distance: '10.1 km', runs: 1, longest: '10.1 km', pace: '9:05 /km', elevation: '73 m' },
      { rank: 20, name: 'Hrithik Kumar', distance: '10.0 km', runs: 1, longest: '10.0 km', pace: '5:33 /km', elevation: '58 m' },
      { rank: 21, name: 'Rudra Patel', distance: '8.0 km', runs: 1, longest: '8.0 km', pace: '5:58 /km', elevation: '41 m' },
      { rank: 22, name: 'Pradeep Kumar', distance: '7.0 km', runs: 2, longest: '5.0 km', pace: '5:27 /km', elevation: '61 m' },
      { rank: 23, name: 'Riswan .', distance: '6.8 km', runs: 1, longest: '6.8 km', pace: '6:47 /km', elevation: '187 m' },
      { rank: 24, name: 'Abhinav Joshy', distance: '5.6 km', runs: 3, longest: '5.0 km', pace: '5:32 /km', elevation: '60 m' },
      { rank: 25, name: 'Tushar Sharma', distance: '4.0 km', runs: 1, longest: '4.0 km', pace: '6:01 /km', elevation: '44 m' },
      { rank: 26, name: 'A.R.M .', distance: '2.1 km', runs: 2, longest: '1.1 km', pace: '3:43 /km', elevation: '22 m' },
      { rank: 27, name: 'Adrija Misra', distance: '2.0 km', runs: 1, longest: '2.0 km', pace: '7:28 /km', elevation: '40 m' }
    ]
  },
  {
    id: '2026-w31',
    dateLabel: '27 July – 02 August',
    isCurrent: false,
    stats: [
      { value: '75+', label: 'Club Runners' },
      { value: '261.5 KM', label: 'Moved Together' },
      { value: '2,741 M', label: 'Climbed' },
    ],
    board: [
      { rank: 1, name: 'Karan Beast', distance: '99.6 km', runs: 21, longest: '20.1 km', pace: '4:23 /km', elevation: '721 m' },
      { rank: 2, name: 'Bindusar Sahoo', distance: '37.3 km', runs: 4, longest: '10.0 km', pace: '5:58 /km', elevation: '663 m' },
      { rank: 3, name: 'Rudra Patel', distance: '18.0 km', runs: 1, longest: '18.0 km', pace: '6:20 /km', elevation: '115 m' },
      { rank: 4, name: 'Pradeep Kumar', distance: '16.0 km', runs: 2, longest: '8.0 km', pace: '5:18 /km', elevation: '222 m' },
      { rank: 5, name: 'Preetam Badagi', distance: '13.7 km', runs: 3, longest: '5.5 km', pace: '6:44 /km', elevation: '168 m' },
      { rank: 6, name: 'Rohit Mathew Titus', distance: '11.7 km', runs: 2, longest: '6.7 km', pace: '6:28 /km', elevation: '114 m' },
      { rank: 7, name: 'Abhinav Hatwar', distance: '10.0 km', runs: 1, longest: '10.0 km', pace: '6:59 /km', elevation: '20 m' },
      { rank: 8, name: 'Ayush Singh', distance: '9.1 km', runs: 3, longest: '6.4 km', pace: '6:14 /km', elevation: '90 m' },
      { rank: 9, name: 'Keerthan Adiga', distance: '5.8 km', runs: 1, longest: '5.8 km', pace: '6:26 /km', elevation: '90 m' },
      { rank: 10, name: 'Laxman Reddy', distance: '5.8 km', runs: 1, longest: '5.8 km', pace: '6:26 /km', elevation: '90 m' },
      { rank: 11, name: 'Sanjay B', distance: '5.5 km', runs: 1, longest: '5.5 km', pace: '6:42 /km', elevation: '87 m' },
      { rank: 12, name: 'Abhinav Joshy', distance: '5.4 km', runs: 1, longest: '5.4 km', pace: '6:51 /km', elevation: '83 m' },
      { rank: 13, name: 'Shrayansh Tiwari', distance: '5.4 km', runs: 1, longest: '5.4 km', pace: '8:05 /km', elevation: '83 m' },
      { rank: 14, name: 'NIKHIL VERMA', distance: '5.0 km', runs: 2, longest: '2.9 km', pace: '6:22 /km', elevation: '49 m' },
      { rank: 15, name: 'Rajvee R S', distance: '5.0 km', runs: 1, longest: '5.0 km', pace: '8:09 /km', elevation: '72 m' },
      { rank: 16, name: 'A.R.M .', distance: '4.2 km', runs: 4, longest: '1.0 km', pace: '3:46 /km', elevation: '43 m' },
      { rank: 17, name: 'Naman Agarwal', distance: '3.0 km', runs: 1, longest: '3.0 km', pace: '6:15 /km', elevation: '27 m' },
      { rank: 18, name: 'RAJIV CHAUHAN', distance: '1.0 km', runs: 2, longest: '0.5 km', pace: '5:08 /km', elevation: '4 m' }
    ]
  },
  {
    id: '2026-w29',
    dateLabel: '13 July – 19 July',
    isCurrent: false,
    stats: [
      { value: '75+', label: 'Club Runners' },
      { value: '166.6 KM', label: 'Moved Together' },
      { value: '1,727 M', label: 'Climbed' },
    ],
    board: [
      { rank: 1, name: 'Karan Beast', distance: '41.5 km', runs: 7, longest: '12.1 km', pace: '4:22 /km', elevation: '415 m' },
      { rank: 2, name: 'Bindusar Sahoo', distance: '30.6 km', runs: 3, longest: '13.2 km', pace: '6:03 /km', elevation: '471 m' },
      { rank: 3, name: 'Riju Yo', distance: '22.5 km', runs: 3, longest: '11.1 km', pace: '9:55 /km', elevation: '0 m' },
      { rank: 4, name: 'Rudra Patel', distance: '18.0 km', runs: 2, longest: '10.0 km', pace: '5:29 /km', elevation: '111 m' },
      { rank: 5, name: 'Shrayansh Tiwari', distance: '16.0 km', runs: 3, longest: '7.0 km', pace: '6:26 /km', elevation: '94 m' },
      { rank: 6, name: 'Aleena Sabu Koshy', distance: '8.0 km', runs: 1, longest: '8.0 km', pace: '7:19 /km', elevation: '77 m' },
      { rank: 7, name: 'Gouri M', distance: '8.0 km', runs: 1, longest: '8.0 km', pace: '8:21 /km', elevation: '75 m' },
      { rank: 8, name: 'Vaibhava KG', distance: '6.8 km', runs: 3, longest: '3.0 km', pace: '7:12 /km', elevation: '73 m' },
      { rank: 9, name: 'Tushar Sharma', distance: '6.0 km', runs: 1, longest: '6.0 km', pace: '5:45 /km', elevation: '199 m' },
      { rank: 10, name: 'Naman Mishra', distance: '4.0 km', runs: 2, longest: '2.0 km', pace: '5:52 /km', elevation: '169 m' },
      { rank: 11, name: 'Ashish Kujur', distance: '2.7 km', runs: 1, longest: '2.7 km', pace: '5:51 /km', elevation: '32 m' },
      { rank: 12, name: 'Sanjay B', distance: '1.3 km', runs: 3, longest: '1.0 km', pace: '5:08 /km', elevation: '11 m' },
      { rank: 13, name: 'Adrija Misra', distance: '1.2 km', runs: 1, longest: '1.2 km', pace: '7:56 /km', elevation: '0 m' }
    ]
  },
  {
    id: '2026-w28',
    dateLabel: '06 July – 12 July',
    isCurrent: false,
    stats: [
      { value: '75+', label: 'Club Runners' },
      { value: '233.8 KM', label: 'Moved Together' },
      { value: '1,581 M', label: 'Climbed' },
    ],
    board: [
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
    ]
  }
];

export const pulseStats = weeklyArchive[0].stats;
export const consistencyBoard = weeklyArchive[0].board;


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
    description: 'How a simple mid-week warmup run sparked a student-led community of 75+ active runners moving and climbing the Western Ghats foothills together.',
    content: (
      <>
        <p style={{ marginBottom: '16px', fontSize: '1.05rem', lineHeight: '1.8' }}>
          What started as a few friends coordinating to meet for a sunrise run outside Anamudi Hostel has grown into a structured, active group of 75+ runners.
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

export const trainingPlaylistUrl = 'https://youtube.com/playlist?list=PLnAKD1Q8PRQ-lo2fMXbYdLyaJUHznbfvG';

export const trainingLectures = [
  {
    id: 'veAQ73OJdwY',
    title: 'Easy Running Benefits',
    category: 'EASY RUNNING',
    tag: 'Zone 2 / Aerobic Base',
    intensity: '65–79% HR Max',
    summary: 'Build your capillary density, mitochondrial function, and heart stroke volume with zero cellular stress.'
  },
  {
    id: 'dxJVtPT6rHo',
    title: 'Threshold Training',
    category: 'THRESHOLD',
    tag: 'Lactate Threshold / Tempo',
    intensity: '88–92% HR Max',
    summary: 'Improve your body ability to clear lactate at sustained comfortably hard paces during tempo runs.'
  },
  {
    id: '7dQEwJhHWXk',
    title: 'Interval Training',
    category: 'INTERVAL',
    tag: 'VO2 Max / Aerobic Power',
    intensity: '98–100% HR Max',
    summary: '3 to 5-minute hard repeats designed to expand your aerobic ceiling and maximum oxygen uptake.'
  },
  {
    id: 'BGQKlSU4HQM',
    title: 'Repetition Training',
    category: 'REPETITION',
    tag: 'Speed & Economy',
    intensity: 'Fast & Relaxed',
    summary: 'Short fast work with long rest periods to refine stride mechanics, turn-over, and neuromuscular efficiency.'
  },
  {
    id: '5TWzC0KA6uo',
    title: 'Rest & Recovery Days',
    category: 'RECOVERY',
    tag: 'Adaptation Phase',
    intensity: 'Zero Effort',
    summary: 'Why muscle repair and physiological adaptation happen on rest days—not during the workout itself.'
  },
  {
    id: 'yHJd2e5qbFo',
    title: 'Easy Pace Pacing',
    category: 'PACING',
    tag: 'Discipline & Pacing',
    intensity: 'Conversational Pace',
    summary: 'Why running too fast on easy days ruins your recovery and degrades performance on hard workout days.'
  }
];

export const strengthPillars = [
  {
    title: 'Running Economy (+2% to +8%)',
    subtitle: 'Sports Science (ACSM / BJSM)',
    description: 'Systematic research shows 6–14 weeks of heavy resistance and plyometric training improves running economy by up to 8% without adding unwanted mass.'
  },
  {
    title: 'Tendon Stiffness & Injury Prevention',
    subtitle: 'Tissue Capacity',
    description: 'Strengthening the kinetic chain (glutes, hips, quads, calves) increases tendon stiffness and bone density to absorb impact forces on hilly Vithura terrain.'
  },
  {
    title: 'Compound Strength Protocol',
    subtitle: 'Key Exercises',
    description: 'Focus on multi-joint movements: Squats, Romanian Deadlifts, Bulgarian Split Squats, Single-Leg Calf Raises, and Core anti-rotation.'
  },
  {
    title: 'Frequency & Programming',
    subtitle: '2–3 Sessions / Week',
    description: 'ACSM guidelines recommend 2–3 short, focused strength sessions per week, scheduled after key run workouts or on cross-training days.'
  }
];

export const nutritionPillars = [
  {
    title: 'Energy Availability',
    subtitle: 'Fueling Expenditure',
    description: 'Matching caloric intake to daily running volume prevents Low Energy Availability (LEA), chronic fatigue, and stress fractures.'
  },
  {
    title: 'Carbohydrate Periodization',
    subtitle: 'Primary Muscle Fuel',
    description: 'Carbs replenish glycogen stores. Periodize intake—lower on easy recovery days, higher before hard intervals and long weekend runs.'
  },
  {
    title: 'Protein Timing & Dose',
    subtitle: '0.25–0.55 g/kg per Dose',
    description: 'Distribute 20–40g of protein across 3–4 daily meals to maximize muscle tissue repair and muscle protein synthesis.'
  },
  {
    title: 'Hydration & Electrolytes',
    subtitle: 'Fluid Balance in Heat',
    description: 'Water is ideal for short runs. For efforts over 60 mins in tropical climate, consume electrolytes (sodium & potassium) to maintain fluid balance.'
  }
];


