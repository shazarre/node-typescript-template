import express from 'express';
import { config } from 'dotenv';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { getHealthCheckHandler } from 'handlers/get-health-check-handler';
import { initLogger } from 'utils/init-logger';

config();
const app = express();

app.use(helmet());
app.use(bodyParser.json({ limit: '1mb' }));
app.set('trust proxy', 1);

app.get('/health/check', getHealthCheckHandler);

process.on('SIGTERM', () => {
    // TODO placeholder for connection closing handler
    process.exit(0);
});

app.listen(process.env.API_PORT, () => {
    initLogger().info(`Server listening at port ${process.env.API_PORT}`);
});
