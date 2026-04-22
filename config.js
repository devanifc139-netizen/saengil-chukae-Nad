/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Uri Nad",
  photo: "./img/Nad.jpeg",       // Place your photo in the img/ folder
  music: "./music/hbd.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Anyeong!",
      subtitle: "Nih buat kmu!",
    },
    {
      type: "countdown",
      from: 3,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "Saeng-il Chukha-hae, chinguya! Hansang haengbokhago, uri oraedore hamkkehaja!",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday to my favorite person!! Wishing you a lifetime of happiness, and may our friendship stay strong until Jannah",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "Terima kasih sudah lahir dan menjadi sahabat aku dan zahra",
        "aku selalu happy",
        "bisa ketemu orang <strong>special</strong> 
        kayak kamu",
        "SEMOGA",
        "kamu terus dikelilingi dengan orang baik <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "Friendship is a single soul dwelling in two bodies",
      author: "Aristotle",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "Bismillah semua harapanmu terwujud dan diberikan kesehatan selalu",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "I hope u like it, walaupun cuman kayak gini, next kita ketemu rayain bareng bertiga yaa!",
      replayText: "Click if you want to watch it again.",
    },
  ],
};
