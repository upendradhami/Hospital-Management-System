import { Request,Response } from "express";


const handleLogin = async(req: Request,res: Response) : Promise<void> => {
    res.send("handling users login");
}


export default handleLogin;