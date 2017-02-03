export interface ISitesList {
    value: ISitesListItem[];
}

export interface ISitesListItem {
    Id: number;
    Title: string;
    SiteId: string;
    Url: string;
    favourite: boolean;
}
