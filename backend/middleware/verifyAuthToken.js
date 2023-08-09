const jwt = require("jsonwebtoken");

const verifyIsLoggedIn = (req, res, next) => {
  next();
  return; //sutvarkius userius istrinti

  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).send("Invalid authorization token");
    }
  } catch (error) {
    next(error);
  }
};

const verifyIsAdmin = (req, res, next) => {
  next();
  return; //sutvarkius userius istrinti

  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).send("Unauthorized. Admin rights required");
  }
};

module.exports = { verifyIsLoggedIn, verifyIsAdmin };
