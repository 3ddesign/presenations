import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// todo write normal model for data
export interface News {
}
export interface NewsAssets {
    categories: any;
}

@Injectable({
  providedIn: 'root'
})

export class NewsService {
    constructor(private http: HttpClient) { }
    getPressProof(countryCode: string, category: string, querySearch: string) {
        const publicKey = '554d9aa5103d42e6a2360610deca0601';
        const templateUrl = 'https://newsapi.org/v2/top-headlines';
        const newsUrl = `${templateUrl}?country=${countryCode}&category=${category}${querySearch}&apiKey=${publicKey}`;
        return this.http.get(newsUrl);
    }
    getNewsAssets() {
        return this.http.get('assets/newsAssets.json');
    }
}
