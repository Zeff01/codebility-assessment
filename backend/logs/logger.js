// logs/logger.js
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'app.log');

function logRequest(req, res, next) {
  const line = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
  fs.appendFile(logFile, line, err => {
    if (err) console.error('Failed to write log:', err);
  });
  next();
}

module.exports = logRequest;
