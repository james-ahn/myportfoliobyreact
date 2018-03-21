import {
    SET_SHOW_FINGER,
    SET_SHOW_JOES, SET_SHOW_KYUNG, SET_SHOW_LG,
    SET_TOOLTIP_CORDOVA,
    SET_TOOLTIP_CSS, SET_TOOLTIP_GIT,
    SET_TOOLTIP_HTML,
    SET_TOOLTIP_JS, SET_TOOLTIP_VUE, SET_TOOLTIP_VUETIFY,
    TOGGLE,

} from '../actions';
import { combineReducers } from 'redux'; //combineReducers 는 여러개의 reducer를 한개로 합칠 때 사용 되는 redux 내장 메소드 입니다.

//state
const headerInitialState = {
    collapsed: true
};

const content3State = {
    toolTipJS: false,
    toolTipVue: false,
    toolTipVuetify: false,
    toolTipHtml: false,
    toolTipCss: false,
    toolTipCordova: false,
    toolTipGit: false,
    showJoes:true,
    showLG:false,
    showKyung:false,
    showFinger:false
}

//reducer를 여러개로 분리하여 작성 할 땐, 서로 직접적인 관계가 없어야 합니다.
const header = (state = headerInitialState, action) => {
    switch(action.type) {
        case TOGGLE:
            return Object.assign({}, state, {
                collapsed: !state.collapsed
            });
        default:
            return state;
    }
};

const content3 = (state = content3State, action) => {
    switch(action.type) {
        case SET_TOOLTIP_JS:
            return Object.assign({}, state, {
                toolTipJS: !state.toolTipJS
            });
        case SET_TOOLTIP_VUE:
            return Object.assign({}, state, {
                toolTipVue: !state.toolTipVue
            });
        case SET_TOOLTIP_VUETIFY:
            return Object.assign({}, state, {
                toolTipVuetify: !state.toolTipVuetify
            });
        case SET_TOOLTIP_HTML:
            return Object.assign({}, state, {
                toolTipHtml: !state.toolTipHtml
            });
        case SET_TOOLTIP_CSS:
            return Object.assign({}, state, {
                toolTipCss: !state.toolTipCss
            });
        case SET_TOOLTIP_CORDOVA:
            return Object.assign({}, state, {
                toolTipCordova: !state.toolTipCordova
            });
        case SET_TOOLTIP_GIT:
            return Object.assign({}, state, {
                toolTipGit: !state.toolTipGit
            });
        case SET_SHOW_JOES:
            return Object.assign({}, state, {
                showJoes: true,
                showLG: false,
                showKyung:false,
                showFinger:false
            });
        case SET_SHOW_LG:
            return Object.assign({}, state, {
                showJoes: false,
                showLG: true,
                showKyung:false,
                showFinger:false
            });
        case SET_SHOW_KYUNG:
            return Object.assign({}, state, {
                showJoes: false,
                showLG: false,
                showKyung:true,
                showFinger:false
            });
        case SET_SHOW_FINGER:
            return Object.assign({}, state, {
                showJoes: false,
                showLG: false,
                showKyung:false,
                showFinger:true
            });
        default:
            return state;
    }
};




const portfolioApp = combineReducers({
    header,
    content3
});

export default portfolioApp;