import {Config} from './config/index'
import app from './app';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => {
            console.log(`Server is listing on port ${PORT}......`)
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

startServer()