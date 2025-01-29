import Web from "./app/web.js";
import Logger from "./app/logger.js";

const port = 3000;

Web.listen(port, () => {
    Logger.info(`server running on http://localhost:${port}`)
});