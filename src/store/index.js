import { combineReducers } from 'redux';

import data from 'json/data.js';
const sorteDbots = ['orange_bot', 'white_bot', 'blue_bot', 'green_bot', 'yellow_bot', 'red_bot']

const initialState = {
    currentConfig: {
        date_from: '',
        date_to: '',
        indicator: 'average_time',
    },
    data: data,
    loadingStatus: 'fetching',
}

function getData(state = initialState.data, action) {
    switch (action.type) {
        case 'getData':
            return { ...state, table: { ...action.data, objects: action.data.objects.filter(src => src.utm_sourcemedium) }};
    }

    switch (action.type) {
        case 'getChartsData':
            return { ...state, charts: action.data };
    }

    return state;
}

function getLoadingState(state = initialState.loadingStatus, action) {
    switch (action.type) {
        case 'loading':
            return action.loadingStatus;
    }

    return state;
}

function changeConfig(state = initialState.currentConfig, action) {
    // switch (action.type) {
    //     case 'loading':
    //         return action.loadingStatus;
    // }

    return state;
}
window.store = initialState
export default combineReducers({
    currentConfig: changeConfig,
    data: getData,
    loadingStatus: getLoadingState,
})
