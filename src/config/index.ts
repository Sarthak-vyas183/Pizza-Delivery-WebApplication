import { config } from "dotenv";
config();
const {PORT,API, Nodenv} = process.env;

export const Config =  {
    PORT, 
    API,
    Nodenv
};