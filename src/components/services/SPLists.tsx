export interface ISitesList {
    value: ISitesListItem[];
}

export interface ISitesListItem {
    Title: string;
    Url: string;
    favourite: boolean;
}
