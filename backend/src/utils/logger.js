const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(({ timestamp, level, message, ...meta }) => {
      const metaString = Object.keys(meta).length ? JSON.stringify(meta) : "";
      return `${timestamp} [${level.toUpperCase()}]: ${message} ${metaString}`;
    })
  ),

  // Transports: where logs go (console, file, etc.)
  transports: [new transports.Console()],
});

module.exports = logger;