import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Offer {
    id: bigint;
    title: string;
    contactName: string;
    link: string;
    createdAt: Time;
    description: string;
    imageUrl: string;
}
export type Time = bigint;
export interface backendInterface {
    getOffers(): Promise<Array<Offer>>;
    postOffer(title: string, description: string, imageUrl: string, link: string, contactName: string): Promise<void>;
}
