import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//createJWT function creates a JWT token for the user
export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

//protect function is a middleware that checks if the user is logged in or not
export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Bearer not found" });
  }
  const token = bearer.split("Bearer ")[1].trim();
  if (!token) {
    return res.status(401).json({ msg: "No token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: "could not verify token" });
  }
};

export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const comparePassword = async (password, hashedPassword) => {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
};
