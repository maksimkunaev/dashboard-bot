import { combineReducers } from 'redux';

import initialData from 'json/data.js';

const sortedBots = [
    { name: 'orange_bot', title: 'attack', color: 'orange' },
    { name: 'white_bot', title: 'place bot here', color: 'white' },
    { name: 'blue_bot', title: 'balance', color: 'blue' },
    { name: 'green_bot', title: 'defence', color: 'green' },
    { name: 'yellow_bot', title: 'megabot', color: 'yellow' },
    { name: 'red_bot', title: 'attack', color: 'red' },
];

const data = { ...initialData };

data.bots = sortedBots.map(sortedBot => {
    const foundBot = initialData.bots.find(bot => bot.name === sortedBot.name);

    return {
        ...foundBot,
        title: sortedBot.title,
        color: sortedBot.color,
    }
})

const initialState = {
    currentConfig: {
        date_from: '',
        date_to: '',
        indicator: 'average_time',
    },
    data,
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
