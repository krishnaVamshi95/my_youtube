const nouns = [
  "bird",
  "clock",
  "boy",
  "plastic",
  "duck",
  "teacher",
  "old lady",
  "professor",
  "hamster",
  "dog",
];
const verbs = [
  "kicked",
  "ran",
  "flew",
  "dodged",
  "sliced",
  "rolled",
  "died",
  "breathed",
  "slept",
  "killed",
];
const adjectives = [
  "beautiful",
  "lazy",
  "professional",
  "lovely",
  "dumb",
  "rough",
  "soft",
  "hot",
  "vibrating",
  "slimy",
];
const adverbs = [
  "slowly",
  "elegantly",
  "precisely",
  "quickly",
  "sadly",
  "humbly",
  "proudly",
  "shockingly",
  "calmly",
  "passionately",
];
const preposition = [
  "down",
  "into",
  "up",
  "on",
  "upon",
  "below",
  "above",
  "through",
  "across",
  "towards",
];

const names = [
  "Alekhya Nitya",
  "Amolika",
  "Aaghnya",
  "Bethina",
  "Brishti",
  "Cauvery",
  "Dayanita",
  "Elavarasi",
  "Garvita",
  "Kshyanika",
  "Lokini",
  "Lithiksha",
  "Mythri",
  "Mriganayani",
  "Naomi",
  "Odathi",
  "Oeshi",
  "Prushti",
  "Rajisha",
  "Rency",
  "Ramyadevi",
  "Rajshree",
  "Rethushana",
  "Rupeshwari",
  "Revanthi",
  "Rukumani",
  "Tritiya",
  "Tejshri",
  "Utalika",
  "Vrusti",
  "Arjun",
"Aum",
"Ishan",
"Krish",
"Moksh",
"Nitin",
"Parin",
"Rishi",
"Shankar",
"Veer",
"Aaditya",
"Aarav",
"Ajay",
"Akash",
"Akhil",
"Akshay",
"Anand",
"Anil",
"Aravind",
"Ari",
"Arian",
"Arjun",
"Armaan",
"Arun",
"Ashok",
"Asim",
"Ashok",
"Ashwin",
"Aum",
"Avi",
"Ayaan",
"Baldev",
"Barun",
"Bhaskar",
"Bhavatu",
"Bhavin",
"Bodhi",
"Brijesh",
"Chandra",
"Charun",
"Chetan",
"Chitaksh",
"Daivey",
"Daksh",
"Deepak",
"Dev",
"Deval",
"Devyan",
"Devesh",
"Dharma",
"Dhairya",
"Dilip",
"Dinesh",
"Divit",
"Dushyant",
"Edhas",
"Ekansh",
"Elil",
"Eshaan",
"Gaman",
"Hari",
"Haroon",
"Harsh",
"Hira",
"Hredhan",
"Hrithik",
"Hunar",
"Ijay",
"Illesh",
"Ishan",
"Ishir",
"Jahan",
"Jagannath",
"Jaiden",
"Jairaj",
"Jay",
"Jaya",
"Jayesh",
"Jitendra",
"Jiyan",
"Kabir",
"Kahan",
"Kailash",
"Kairav",
"Kalidas",
"Kaiyen",
"Kalpen",
"Kamal",
"Karam",
"Karthik",
"Kavish",
"Kiaan",
"Kiran",
"Krish",
"Kriyan",
"Laksh",
"Lal",
"Madhukar",
"Mahavir",
"Mahendra",
"Manav",
"Manish",
"Manoj",
"Manu",
"Mayan",
"Milan",
"Mitra",
"Mivan",
"Mohan",
"Moksh",
"Mukul",
"Naman",
"Nayan",
"Neeraj",
"Nikhil",
"Niket",
"Nilam",
"Nirmay",
"Nishan",
"Nitin",
"Niyam",
"Ohas",
"Ohm",
"Onkar",
"Ovi",
"Panna",
"Parin",
"Parth",
"Parv",
"Pavan",
"Prabhakar",
"Pran",
"Prem",
"Pranav",
"Pravin",
"Priyam",
"Raghav",
"Rahul",
"Rajesh",
"Rajiv",
"Rajveer",
"Rakesh",
"Ranbir",
"Ranveer",
"Ravi",
"Rayan",
"Revan",
'Reyansh',
"Ridhan",
"Rishi",
"Rithvik",
"Riyan",
"Rohan",
"Rohit",
"Roshan",
"Rudra",
"Sachin",
"Sachiv",
"Sahil",
"Sai",
"Sajan",
"Samardh",
"Samay",
'Samesh',
'Samit',
'Sanjay',
'Sanjit',
"Sarvesh",
"Sayan",
'Shaan',
'Shankar',
'Sharma',
'Shikhar',
"Siddh",
"Siddharth",
"Sohum",
"Suman",
"Sumit",
"Sundar",
"Suraj",
"Suresh",
"Surya",
"Swapnil",
"Tala",
"Taral",
"Tanmay",
"Tavish",
"Tej",
"Tejas",
"Tushar",
"Uttar",
"Vardan",
"Vasu",
"Vedant",
"Veer",
"Vihan",
"Vijay",
"Vikram",
"Vimal",
"Vipin",
"Vipul",
"Viraj",
"Vishal",
"Vivan",
"Vivek",
"Yash",
"Yug",
"Zayn",
"Zeeshan",
"Zian"
].sort()

export const generateSentence = () => {
  var rand1 = Math.floor(Math.random() * 10);
  var rand2 = Math.floor(Math.random() * 10);
  var rand3 = Math.floor(Math.random() * 10);
  var rand4 = Math.floor(Math.random() * 10);
  var rand5 = Math.floor(Math.random() * 10);
  var rand6 = Math.floor(Math.random() * 10);
  return (
    "The " +
    adjectives[rand1] +
    " " +
    nouns[rand2] +
    " " +
    adverbs[rand3] +
    " " +
    verbs[rand4] +
    " because some " +
    nouns[rand1] +
    " " +
    adverbs[rand1] +
    " " +
    verbs[rand1] +
    " " +
    preposition[rand1] +
    " a " +
    adjectives[rand2] +
    " " +
    nouns[rand5] +
    " which, became a " +
    adjectives[rand3] +
    ", " +
    adjectives[rand4] +
    " " +
    nouns[rand6] +
    "."
  );
};

export const generateName = ()=>{
    return names[(Math.floor(Math.random() * names.length))]
}
