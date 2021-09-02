import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const Revoke = (prisma: PrismaClient) => {
  const router = Router();

  router.post("/", async (req, res) => {
    try {
      await prisma.tokenPair.delete({
        where: { accessToken: req.query.accessToken?.toString() ?? "" },
      });
      res.json({ success: true });
    } catch (err) {
      res.json({ error: "Could not revoke token pair." });
    }
  });

  router.post("/all", async (req, res) => {
    try {
      const pair = await prisma.tokenPair.findUnique({
        where: { accessToken: req.query.accessToken?.toString() ?? "" },
      });
      if (!pair)
        return res.status(404).json({ error: "Could not find token pair." });

      await prisma.tokenPair.deleteMany({
        where: { userId: pair.userId },
      });
      return res.json({ success: true });
    } catch (err) {
      return res.json({ error: "Could not revoke token pair." });
    }
  });

  return router;
};

export default Revoke;
