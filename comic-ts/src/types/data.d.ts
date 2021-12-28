declare module A {
    export interface Restrict {
        value: number
        display: string
    }

    export interface Comic {
        name: string
        uuid: string
        path_word: string
        restrict: Restrict
    }

    export interface Content {
        uuid: string
        url: string
    }

    export interface Chapter {
        index: number
        uuid: string
        count: number
        ordered: number
        size: number
        name: string
        comic_id: string
        comic_path_word: string
        group_id?: any
        group_path_word: string
        type: number
        img_type: number
        datetime_created: string
        prev?: any
        next: string
        contents: Content[]
        words: number[]
        is_long: boolean
    }

    export interface Results {
        show_app: boolean
        is_lock: boolean
        is_login: boolean
        is_mobile_bind: boolean
        is_vip: boolean
        comic: Comic
        chapter: Chapter
    }

    export interface RootObject {
        code: number
        message: string
        results: Results
    }
}
