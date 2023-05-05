import jwt from "jsonwebtoken";

export default defineEventHandler(async (event) => {
  const { res } = event;

  // Generate a fake JWT token for testing purposes
  const jwtGenerated = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    role: "user",
    username: "JohnDoe",
  }, "mysecret");

  return res.end(JSON.stringify({
    token: jwtGenerated,
  }));
});