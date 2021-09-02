import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const Validate = (prisma: PrismaClient) => {
  const router = Router();

  router.post("/", async (req, res) => {
    try {
      const pair = await prisma.tokenPair.findUnique({
        where: {
          accessToken: req.query.accessToken?.toString() ?? "",
        },
      });

      if (!pair)
        return res.status(404).json({ error: "Could not find token pair." });

      return res.json({ success: true });
    } catch (err) {
      return res.status(400).json({
        error: "Could not validate token pair.",
      });
    }
  });

  return router;
};

export default Validate;
