import "dotenv/config";
// constants for omegal

//development url
const DEV_URL = `http://localhost:${process.env.DEV_PORT}`;
console.log("porcess0,", process.env.DEV_PORT);

export { DEV_URL };
