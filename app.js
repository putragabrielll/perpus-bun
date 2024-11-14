import { Router } from "mg-bun-router";
import pino from 'pino';


const router = new Router();

// Create a Pino logger
const logger = pino({
    level: 'info', // Adjust the log level as needed
    transport: {
      target: 'pino-pretty', // For pretty-printed logs
      options: {
        colorize: true
      },
    },
});


router.get("/", (req) => {
  return Response.json({
      success: true,
      message: 'Backend is running well!'
  });
});


// Send all request to file Router
router.useQoper8("/", require('./src/routers/index'))


Bun.serve({
    port: process.env.PORT,
    async fetch(req) {
        logger.info({ url: req.url }, `Received request ${req.method}`);
        return await router.useRoutes(req);
    }
});
console.log("Hello this app is running in bun and PORT", process.env.PORT);
