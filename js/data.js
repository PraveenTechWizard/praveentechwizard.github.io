/* ===========================================================
   EDIT YOUR CONTENT HERE. No other file needs to change.
   Anything starting with "TODO" shows in orange on the page.
   =========================================================== */

const SITE = {
  email: "jothiramanpraveen007@gmail.com",
  github: "https://github.com/PraveenTechWizard",
  itch: "https://praveen-kumar007.itch.io/",
  linkedin: "https://www.linkedin.com/in/praveen-kumar-j-1bb832hx/",
  resume: "resume/Praveen-Kumar-Resume.pdf",       // replace these two files to update your resume
  resumeDocx: "resume/Praveen-Kumar-Resume.docx"
};

/* One entry per game. Copy a block to add a new game.
   video / poster / shots are paths inside the assets/ folder.
   repo: "" = no button, "TODO" = orange reminder, "https://..." = button. */
const PROJECTS = [
  {
    title: "Shapino",
    type: "Mobile hypercasual game · Android",
    status: "Team project",
    accent: "#ef8fb0",
    desc: "A mobile hypercasual game for Android, built in Unity.",
    contribution: "I worked on this as part of a team. I contributed to the gameplay mechanics and the Unity implementation, and I was responsible for UI placement.",
    mechanics: [],
    tech: ["Unity", "C#", "Android"],
    repo: "",
    video: "assets/video/shapino.mp4",
    poster: "assets/img/shapino-poster.jpg",
    shots: ["assets/img/shapino-1.jpg", "assets/img/shapino-2.jpg", "assets/img/shapino-3.jpg", "assets/img/shapino-4.jpg"]
  },
  {
    title: "Crown Jump",
    type: "PC game · One-button platformer",
    status: "Solo project",
    accent: "#7ed3c4",
    desc: "A platformer built around a single jump button. You guide a small crown through levels to reach the throne.",
    contribution: "I developed the whole game on my own: the gameplay mechanics, the player controller and the pixel art for the player character. Environment assets are from itch.io.",
    mechanics: ["One-button jump (Space or left mouse)", "Wall jump", "Level-based progression"],
    tech: ["Unity", "C#"],
    repo: "",
    play: "https://praveen-kumar007.itch.io/crown-jump",   // shows a "Play on itch.io" button
    video: "assets/video/crow-jump.mp4",
    poster: "assets/img/crow-jump-poster.jpg",
    shots: ["assets/img/crow-jump-1.jpg", "assets/img/crow-jump-2.jpg", "assets/img/crow-jump-3.jpg", "assets/img/crow-jump-4.jpg"]
  },
  {
    title: "Flappy Bird",
    type: "2D game · Open-source learning project",
    status: "Open-source project",
    accent: "#f2b366",
    desc: "An open-source Flappy Bird-inspired project I used to practise 2D gameplay programming. I did not create the original game.",
    contribution: "I extended the project by adding a score system, and I improved the gameplay and polish.",
    mechanics: ["Score system"],
    tech: ["Unity 2D", "C#"],
    repo: "https://github.com/PraveenTechWizard/Flappy-Bird-Unity",
    video: "assets/video/flappy-bird.mp4",
    poster: "assets/img/flappy-bird-poster.jpg",
    shots: ["assets/img/flappy-bird-1.jpg", "assets/img/flappy-bird-2.jpg", "assets/img/flappy-bird-3.jpg", "assets/img/flappy-bird-4.jpg"]
  },
  {
    title: "2D Action Platformer",
    type: "Prototype · 2D action platformer",
    status: "In development",
    accent: "#9db4f2",
    desc: "A prototype that is still in development. I am using it to learn how state machines organise player and enemy behaviour.",
    contribution: "I am building responsive movement and implementing player combat and enemy behaviour using a state machine.",
    mechanics: ["Sprint, wall jump and dash", "Player combat", "Enemy patrol and attack", "State machine for player and enemy behaviour"],
    tech: ["Unity", "C#"],
    repo: "",
    video: "assets/video/action-platformer.mp4",
    poster: "assets/img/action-platformer-poster.jpg",
    shots: ["assets/img/action-platformer-1.jpg", "assets/img/action-platformer-2.jpg", "assets/img/action-platformer-3.jpg", "assets/img/action-platformer-4.jpg"]
  }
];

const SKILLS = [
  ["Game Development", ["Unity", "C#", "2D & 3D Gameplay"]],
  ["Programming", ["OOP", "Data Structures & Algorithms", "Game Mechanics"]],
  ["Multiplayer", ["Photon PUN", "RPC", "Network Synchronization"]],
  ["Tools", ["Git & GitHub", "JetBrains Rider"]]
];

/* Small prototypes shown in the slider. Copy a block to add one.
   They are mechanics, not finished games. Edit the text to match what each one really does. */
const MECHANICS = [
  {
    title: "Snake Eater",
    accent: "#7ed3c4",
    desc: "A snake mechanic inside a bordered arena. The snake moves around, eats the square pickups and grows longer. The background colour shifts between light and dark while you play.",
    points: ["Snake movement and growth", "Pickups inside an arena", "Changing background colour"],
    tech: ["Unity", "C#"],
    video: "assets/mech/snake-eater.mp4",
    poster: "assets/mech/snake-eater-poster.jpg"
  },
  {
    title: "Bubble Mechanic",
    accent: "#ef8fb0",
    desc: "A prototype built around green bars that move and rotate on screen. It has a cooldown counter, a number that counts down, a triangle with its own counter at the bottom, and bubbles.",
    points: ["Cooldown system", "Counters and countdown", "Moving and rotating bars"],
    tech: ["Unity", "C#"],
    video: "assets/mech/bubble-mechanic.mp4",
    poster: "assets/mech/bubble-mechanic-poster.jpg"
  },
  {
    title: "Idle Clicker",
    accent: "#f2b366",
    desc: "A clicker prototype. Each click on the MONEY button adds to the total in rupees. Three upgrades are for sale: Increase Click Amount, Passive Income and Fast Clicker. A Reset button clears the total.",
    points: ["Click to earn", "Three purchasable upgrades", "Reset button"],
    tech: ["Unity", "C#", "UI"],
    video: "assets/mech/idle-clicker.mp4",
    poster: "assets/mech/idle-clicker-poster.jpg"
  },
  {
    title: "Pong",
    accent: "#9db4f2",
    desc: "A Pong recreation with a main menu. You can pick PvP or PvAI, and each side has its own score above the court.",
    points: ["PvP and PvAI modes", "Paddles, ball and scoring", "Main menu"],
    tech: ["Unity", "C#", "UI"],
    video: "assets/mech/pong.mp4",
    poster: "assets/mech/pong-poster.jpg"
  }
];
