export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const NETFLIX_BACKGROUND_IMG = "https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/caf60945-04bd-4265-9ab8-597eeb533007/AU-en-20240820-TRIFECTA-perspective_WEB_7706c7c3-81b5-49a6-996b-a65494adb4e0_medium.jpg";
export const PHOTO_URL = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY
        }
}

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [{identifier:"en",language:"English"},{identifier:"telugu",language:"Telugu"},{identifier:"spanish",language:"Spanish"}];

export const OPEN_AI_KEY = process.env.OPEN_AI_KEY;
