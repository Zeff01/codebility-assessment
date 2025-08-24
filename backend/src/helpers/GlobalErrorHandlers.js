function GlobalErrorHandlers(app) {
  app.use((req, res) => {
    res.status(404).send({
      error: { message: "Endpoint not found!", status: res.statusCode },
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).send({
      error: { message: "Internal Server Error", status: res.statusCode },
    });
  });
}

module.exports = GlobalErrorHandlers;
