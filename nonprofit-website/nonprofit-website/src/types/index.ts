// This file exports TypeScript types and interfaces used throughout the project.

export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface BlogPost {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    category: string;
}

export interface PodcastEpisode {
    id: string;
    title: string;
    description: string;
    audioUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Activity {
    id: string;
    title: string;
    description: string;
    resources: string[];
    createdAt: Date;
    updatedAt: Date;
}

export interface Game {
    id: string;
    title: string;
    description: string;
    resources: string[];
    createdAt: Date;
    updatedAt: Date;
}