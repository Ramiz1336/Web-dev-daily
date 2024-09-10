const express = require("express");
const app = express();
const port = 3000;

const users = [
  {
    name: "Samy",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const kidneys = users[0].kidneys;
  const numberofkidneys = kidneys.length;

  const numberofhealthykidneys = kidneys.filter(
    (kidney) => kidney.healthy
  ).length;

  const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;

  res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.query.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "Done",
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }

  res.json({});
});

app.delete("/", function (req, res) {
  users[0].kidneys = users[0].kidneys.filter((kidney) => kidney.healthy);

  res.send("DELETE request received");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
