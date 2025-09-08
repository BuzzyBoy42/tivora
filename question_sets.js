/* Edit/expand these sets freely. Keep structure: { id, name, questions[] } */
window.TIVORA_SETS = [
  {
    id: "demo-math",
    name: "Quick Math",
    questions: [
      { q: "2 + 2 = ?", choices: ["3", "4", "5"], correct: 1 },
      { q: "5 × 3 = ?", choices: ["8", "15", "10"], correct: 1 },
      { q: "9 − 4 = ?", choices: ["4", "5", "6"], correct: 1 },
      { q: "7 + 6 = ?", choices: ["12", "13", "14"], correct: 1 }
    ]
  },
  {
    id: "demo-sci",
    name: "Basics of Science",
    questions: [
      { q: "H₂O is…", choices: ["Oxygen", "Water", "Hydrogen"], correct: 1 },
      { q: "Earth is the ___ planet from the Sun.", choices: ["2nd", "3rd", "4th"], correct: 1 },
      { q: "Humans breathe in…", choices: ["CO₂", "N₂", "O₂"], correct: 2 }
    ]
  }
];
