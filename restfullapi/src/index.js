import web from "./app/web.js";

const port = 3000;

web.listen(port, () => {
    console.log(`Server running on port ${port}`);
});