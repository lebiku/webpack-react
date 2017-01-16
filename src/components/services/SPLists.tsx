export interface ISitesList {
    value: ISitesListItem[];
}

export interface ISitesListItem {
    Id: number;
    Title: string;
    Url: string;
    favourite: boolean;
}
