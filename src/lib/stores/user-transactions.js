import { writable } from "svelte/store";

export const transactionsStore = writable([
  { type: "Spend", desc: "Applied grunge effect to one image", date: "Oct 30, 2025", coins: -5 },
  { type: "Purchase", desc: "Purchase of Test Pack", date: "Oct 30, 2025", coins: +50 },
  { type: "Spend", desc: "Fai Asynchronous Submission", date: "Oct 19, 2025", coins: -0.1 },
  { type: "Spend", desc: "Fai Asynchronous Submission", date: "Oct 19, 2025", coins: -0.1 },
  { type: "Spend", desc: "Fai Asynchronous Submission", date: "Oct 19, 2025", coins: -0.1 },
  { type: "Spend", desc: "Fai Asynchronous Submission", date: "Oct 19, 2025", coins: -0.1 },
  { type: "Spend", desc: "Fai Asynchronous Submission", date: "Oct 19, 2025", coins: -0.1 },

  // --- More sample transactions ---
  { type: "Spend", desc: "Generated 4K cinematic image", date: "Oct 18, 2025", coins: -3 },
  { type: "Spend", desc: "Enhanced audio track (AI noise removal)", date: "Oct 17, 2025", coins: -1 },
  { type: "Spend", desc: "Checked plagiarism for a 2k-word document", date: "Oct 16, 2025", coins: -2 },
  { type: "Purchase", desc: "Purchase of 1000 Token Pack", date: "Oct 15, 2025", coins: +20 },
  { type: "Spend", desc: "Generated AI video loop", date: "Oct 14, 2025", coins: -7 },
  { type: "Spend", desc: "Ultra HD image upscale", date: "Oct 13, 2025", coins: -1.5 },
  { type: "Spend", desc: "Sound Enhancer – Vocal Clarity Boost", date: "Oct 12, 2025", coins: -0.5 },
  { type: "Spend", desc: "Copy Checker for blog post", date: "Oct 11, 2025", coins: -0.2 },
  { type: "Spend", desc: "Chat AI – Extended reasoning request", date: "Oct 10, 2025", coins: -0.3 },
  { type: "Spend", desc: "AI Model Booster Run", date: "Oct 09, 2025", coins: -2.2 },

  // More filler for scroll realism
  { type: "Spend", desc: "Batch image generation", date: "Oct 08, 2025", coins: -4 },
  { type: "Spend", desc: "Text-to-speech conversion", date: "Oct 07, 2025", coins: -0.4 },
  { type: "Spend", desc: "AI coding assistant request", date: "Oct 06, 2025", coins: -0.3 },
  { type: "Purchase", desc: "Purchased Booster Bundle", date: "Oct 05, 2025", coins: +30 },
  { type: "Spend", desc: "Image color correction", date: "Oct 05, 2025", coins: -0.8 },
  { type: "Spend", desc: "AI character generation", date: "Oct 04, 2025", coins: -3.5 },
  { type: "Spend", desc: "Generated story outline", date: "Oct 03, 2025", coins: -0.6 },
  { type: "Spend", desc: "Soundmaster AI – Echo Cleanup", date: "Oct 02, 2025", coins: -1 },
  { type: "Spend", desc: "Copy Checker – Rewrite Suggestions", date: "Oct 01, 2025", coins: -0.4 },
  { type: "Spend", desc: "Chat AI Duo conversation", date: "Sep 30, 2025", coins: -0.9 },
  { type: "Spend", desc: "Video to GIF conversion", date: "Sep 29, 2025", coins: -1.5 },
  { type: "Purchase", desc: "Extra monthly tokens", date: "Sep 28, 2025", coins: +15 },
  { type: "Spend", desc: "AI speech clone request", date: "Sep 27, 2025", coins: -5 },
  { type: "Spend", desc: "Motion graphics enhancement", date: "Sep 26, 2025", coins: -2.5 },
  { type: "Spend", desc: "HD portrait generation", date: "Sep 25, 2025", coins: -1.2 },
  { type: "Spend", desc: "AI music generation", date: "Sep 24, 2025", coins: -4 },
  { type: "Spend", desc: "AI book chapter generation", date: "Sep 23, 2025", coins: -6 },
]);
