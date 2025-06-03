import type { FieldValue, Timestamp } from "firebase/firestore";

export interface User {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    createdAt: Timestamp| FieldValue;
    updatedAt:Timestamp| FieldValue;
    imageUrl: string;
}