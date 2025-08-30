// const express = require('express');

// const app = express();
// app.use(express.json());

// const conversions = {
//     inches: {
//         meters: value => value * 0.0254,
//         centimeters: value => value * 2.54,
//         feet: value => value / 12,
//         yards: value => value / 36,
//         kilometers: value => value * 0.0000254,
//     },
//     meters: {
//         inches: value => value / 0.0254,
//         centimeters: value => value * 100,
//         feet: value => value * 3.28084,
//         yards: value => value * 1.09361,
//         kilometers: value => value / 1000,
//     },
//     centimeters: {
//         inches: value => value / 2.54,
//         meters: value => value / 100,
//         feet: value => value / 30.48,
//         yards: value => value / 91.44,
//         kilometers: value => value / 100000,
//     },
//     feet: {
//         inches: value => value * 12,
//         meters: value => value * 0.3048,
//         centimeters: value => value * 30.48,
//         yards: value => value / 3,
//         kilometers: value => value * 0.0003048,
//     },
//     yards: {
//         inches: value => value * 36,
//         meters: value => value * 0.9144,
//         centimeters: value => value * 91.44,
//         feet: value => value * 3,
//         kilometers: value => value * 0.0009144,
//     },
//     kilometers: {
//         inches: value => value / 0.0000254,
//         meters: value => value * 1000,
//         centimeters: value => value * 100000,
//         feet: value => value * 3280.84,
//         yards: value => value * 1093.61,
//     }
// };

// app.post('/convert', (req, res) => {
//     const { from, to, value } = req.body;
//     if (
//         !from || !to || typeof value !== 'number' ||
//         !conversions[from] || !conversions[from][to]
//     ) {
//         return res.status(400).json({ error: 'Invalid conversion request.' });
//     }
//     const result = conversions[from][to](value);
//     res.json({ from, to, value, result });
// });

// app.listen(3000, () => {
//     console.log('Converter backend running on port 3000');
// });

import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());

// Conversion logic
const conversions = {
  "inch-to-meter": (v) => v * 0.0254,
  "meter-to-inch": (v) => v / 0.0254,
  "foot-to-meter": (v) => v * 0.3048,
  "meter-to-foot": (v) => v / 0.3048,
  "cm-to-inch": (v) => v * 0.393701,
  "inch-to-cm": (v) => v * 2.54,
};

app.post("/convert", (req, res) => {
  const { value, type } = req.body;

  if (!conversions[type]) {
    return res.status(400).json({ error: "Invalid conversion type" });
  }

  const result = conversions[type](parseFloat(value));
  res.json({ result });
});

app.listen(4000, () => console.log("Backend running on http://localhost:4000"));