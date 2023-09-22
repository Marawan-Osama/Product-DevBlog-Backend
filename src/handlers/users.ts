import { createJWT, hashPassword, comparePassword } from "./../modules/auth";
import prisma from "../db";

export const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
    },
  });
  const token = createJWT(user);
  res.status(201).json({ token });
};

export const signIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  if (!user) {
    return res.status(401).json({ msg: "Wrong username" });
  }
  const isValid = await comparePassword(req.body.password, user.password);

  if (!isValid) {
    return res.status(401).json({ msg: "Wrong password" });
  }
  return res.status(200).json({ token: createJWT(user) });
};
