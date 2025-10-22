
export type Themes = {
    id: number;
    name: string;
};

export type Sets = {
    last_modified_dt: string;
    name: string;
    set_name: string;
    num_parts: number;
    set_img_url: string;
    set_num: string;
    set_url: string;
    theme_id: number;
    year: number;
};

export type PartsFromSearch = {
    name: string;
    part_cat_id: number
    part_img_url: string;
    part_num: string;
    part_url: string;
    year_from: number;
    year_to: number;
};

export type PartsFromTheme = {
    part: PartsFromSearch;
};

export type Parts = PartsFromSearch | PartsFromTheme;