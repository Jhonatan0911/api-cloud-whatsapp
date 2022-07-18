import { Document } from 'mongoose';
export interface Request extends Document {
    from: string;
    message: string;
    json: string;
    date: Date;
    status: boolean;
}