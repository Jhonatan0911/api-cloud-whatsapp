import { Document } from 'mongoose';
export interface Response extends Document {
    to: string;
    message: string;
    json: string;
    date: Date;
    status: boolean;
}