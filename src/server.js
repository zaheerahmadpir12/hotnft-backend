import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HOTNFT backend running");
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "hotnft-backend",
    time: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
