import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { TokenPair } from "src/resolver-types";
import TokenPairUtil from "../utils/TokenPair";

const Regenerate = (prisma: PrismaClient) => {
  const tokens = new TokenPairUtil();
  const router = Router();

  router.post("/", async (req, res) => {
    const userId = req.query.user_id?.toString();
    const refreshToken = req.query.refreshToken?.toString() ?? "";
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    const existingTokenPair = await prisma.tokenPair.findUnique({
      where: {
        refreshToken,
      },
    });

    if (!existingTokenPair) {
      return res.status(401).json({
        error: "You cannot use another user's id.",
      });
    }

    const result = await tokens.regenerateTokenPair(refreshToken, user);

    if (!result) {
      return res.status(400).json({
        error: "Could not generate new token pair.",
      });
    } else {
      return res.status(200).json(result);
    }
  });

  return router;
};

export default Regenerate;
