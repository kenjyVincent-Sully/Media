import React from "react";

export interface ISearch {
    
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;  
}

export class SearchNormalizer {
    id?: number;
    title: string = '';
    description: string = '';
    image: string = 'https://picsum.photos/200/300';
    date?: Date = undefined;

    constructor(result: ISearch){
        this.id = result.id;
        this.title = result.title ?? result.original_title;
        this.description = result.overview;
        this.image = result.poster_path ?? result.backdrop_path;
        this.date = new Date(result.release_date);
    }
}

class SearchDenormalizer{
    query: string = '';
    constructor(query: string){
        this.query = query;
    }
}

export class SearchList {
    totalItems: number = 0;
    items: SearchNormalizer[] = [];

    constructor(total: number, items: SearchNormalizer[]){
        this.totalItems = total;
        this.items = items;
    }
}