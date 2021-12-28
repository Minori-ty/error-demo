export declare var data: {
    code: number;
    message: string;
    results: {
        show_app: boolean;
        is_lock: boolean;
        is_login: boolean;
        is_mobile_bind: boolean;
        is_vip: boolean;
        comic: {
            name: string;
            uuid: string;
            path_word: string;
            restrict: {
                value: number;
                display: string;
            };
        };
        chapter: {
            index: number;
            uuid: string;
            count: number;
            ordered: number;
            size: number;
            name: string;
            comic_id: string;
            comic_path_word: string;
            group_id: null;
            group_path_word: string;
            type: number;
            img_type: number;
            datetime_created: string;
            prev: null;
            next: string;
            contents: {
                uuid: string;
                url: string;
            }[];
            words: number[];
            is_long: boolean;
        };
    };
};
