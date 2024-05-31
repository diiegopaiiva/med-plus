import { Router } from "express";

const router = Router()

router.get("/test", ()=> console.log("deu bom"))

export {
    router
}