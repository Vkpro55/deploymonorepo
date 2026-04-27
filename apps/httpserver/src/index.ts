import express from "express";
import prisma from "@repo/db/client";

const app = express();

app.get("/", (req, res) => {
    res.send("Http server is live...");
});

app.post("/user", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: "vinodrao835@gmail.com",
      name: "Vinod Kumar"
    }
  });

  res.json(user);
});

app.listen(3001);