import { server } from "./server/index.js";
import "dotenv/config"

server.listen(process.env.SERVER_PORT, ()=> {
    console.log("check")
})