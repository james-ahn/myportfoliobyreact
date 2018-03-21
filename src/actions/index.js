export const TOGGLE = 'TOGGLE';
export const SET_TOOLTIP_JS = 'SET_TOOLTIP_JS';
export const SET_TOOLTIP_VUE = 'SET_TOOLTIP_VUE';
export const SET_TOOLTIP_VUETIFY = 'SET_TOOLTIP_VUETIFY';
export const SET_TOOLTIP_HTML = 'SET_TOOLTIP_HTML';
export const SET_TOOLTIP_CSS = 'SET_TOOLTIP_CSS';
export const SET_TOOLTIP_CORDOVA = 'SET_TOOLTIP_CORDOVA';
export const SET_TOOLTIP_GIT = 'SET_TOOLTIP_GIT';
export const SET_SHOW_JOES = 'SET_SHOW_JOES';
export const SET_SHOW_LG = 'SET_SHOW_LG';
export const SET_SHOW_KYUNG = 'SET_SHOW_KYUNG';
export const SET_SHOW_FINGER = 'SET_SHOW_FINGER';



export function toggleMobileMenu() {
    return {
        type: TOGGLE
    };
}

//skills
export function tooltipJs() {
    return {
        type: SET_TOOLTIP_JS
    };
}

export function tooltipVue() {
    return {
        type: SET_TOOLTIP_VUE
    };
}
export function tooltipVuetify() {
    return {
        type: SET_TOOLTIP_VUETIFY
    };
}
export function tooltipHtml() {
    return {
        type: SET_TOOLTIP_HTML
    };
}
export function tooltipCss() {
    return {
        type: SET_TOOLTIP_CSS
    };
}
export function tooltipCordova() {
    return {
        type: SET_TOOLTIP_CORDOVA
    };
}
export function tooltipGit() {
    return {
        type: SET_TOOLTIP_GIT
    };
}

//companies
export function compnayJoes() {
    return {
        type: SET_SHOW_JOES
    };
}
export function compnayLg() {
    return {
        type: SET_SHOW_LG
    };
}
export function compnayKyung() {
    return {
        type: SET_SHOW_KYUNG
    };
}
export function compnayFinger() {
    return {
        type: SET_SHOW_FINGER
    };
}