import { Schema } from 'mongoose';
export const ResponseSchema = new Schema({
    to: String,
    message: String,
    json: String,
    date: Date, 
    status: Boolean
});