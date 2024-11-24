const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;

  // Check if there is an Authorization header and it starts with "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract token from Authorization header
      token = req.headers.authorization.split(" ")[1];

      // Verify the token using the secret key
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user data to the request object (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    // If no token is provided in the request
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Admin middleware to check if the user is an admin
exports.admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // Proceed if user is admin
  } else {
    res.status(403).json({ message: "Admin access denied" });
  }
};
