import { Schema } from 'mongoose';
export const RequestSchema = new Schema({
    from: String,
    message: String,
    json: String,
    date: Date, 
    status: Boolean
});