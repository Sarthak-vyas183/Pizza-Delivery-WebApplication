import {Config} from './config/index'
import app from './app';
import logger from './logger';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            logger.warn("testing warn......")
            logger.error("testing error.....")
            logger.debug("debug testing......")
            logger.info(`Server is listing on port ${PORT}......`);
        })
    } catch (error) {
        logger.error("connection failed...", error)
        process.exit(1)
    }
}

startServer()