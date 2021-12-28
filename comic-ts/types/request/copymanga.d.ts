import type { resluts, chapterResults, comicResults, imagesResults } from '../types/copymanga';
export declare const search: (count: number, keywords: string) => Promise<resluts<comicResults>>;
export declare const searchChapter: (path_word: string) => Promise<resluts<chapterResults>>;
export declare const searchImages: (comic_id: string, uuid: string) => Promise<resluts<imagesResults>>;
