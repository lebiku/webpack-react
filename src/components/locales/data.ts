declare var _spBodyOnLoadFunctionNames: any;
declare var _spPageContextInfo: any;

export class Translations {

  private static _dict: { [loc: string]: { [res: string]: string}} = {
    "en": {
      "Tabs.All": "All",
      "Tabs.Favourites": "Favourites",
      "Tabs.RecentlyUsed": "Recently Used",
      "Global.ShowAll": "show all",
      "Global.SearchBoxTitle": "Enter search query:"
    },
    "de": {
      "Tabs.All": "Alle",
      "Tabs.Favourites": "Favoriten",
      "Tabs.RecentlyUsed": "Kürzlich verwendet",
      "Global.ShowAll": "alle anzeigen",
      "Global.SearchBoxTitle": "Suchbegriff eingeben:"
    },
    "fr": {
      "Tabs.All": "... Alle ...",
      "Tabs.Favourites": "... Favoriten ...",
      "Tabs.RecentlyUsed": "... Kürzlich verwendet ...",
      "Global.ShowAll": "... alle anzeigen ...",
      "Global.SearchBoxTitle": "... Suchbegriff eingeben: ..."
    },
    "it": {
      "Tabs.All": "... Alle ...",
      "Tabs.Favourites": "... Favoriten ...",
      "Tabs.RecentlyUsed": "... Kürzlich verwendet ...",
      "Global.ShowAll": "... alle anzeigen ...",
      "Global.SearchBoxTitle": "... Suchbegriff eingeben: ..."
    },
  };

  public static getByKey(key: string): string {
    let language = typeof _spBodyOnLoadFunctionNames === "undefined" ? navigator.language : _spPageContextInfo.currentUICultureName;
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

    return this.getByKeyLocale(key, languageWithoutRegionCode);
  }


  public static getByKeyLocale(key: string, language: string): string {
    return Translations._dict[language][key];
  }
}
