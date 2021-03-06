import { combineReducers } from 'redux';
import initialData from 'json/data.js';
import localStorage from 'utilities/localStorage';

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
        timeUnit: 'all_time',
        activeMenu: 'dashboard',
    },
    data,
}

function changeData(state = initialState.data, action) {
    switch (action.type) {
        case 'changeBotsOrder':
            const { addedIndex, removedIndex } = action.data;

            const bots = [ ...initialState.data.bots];
            const temporarySaved = bots[addedIndex];

            bots[addedIndex] = bots[removedIndex];
            bots[removedIndex] = temporarySaved;

            return { ...state, bots };
    }

    return state;
}

function changeConfig(state = initialState.currentConfig, action) {
    switch (action.type) {
        case 'changeRange':
            const newRangeConfig = { ...state, timeUnit: action.data};
            localStorage.save('currentConfig', newRangeConfig)
            return newRangeConfig;

        case 'switchMenu':
            const newSwitchConfig = { ...state, activeMenu: action.data};
            localStorage.save('currentConfig', newSwitchConfig)

            return newSwitchConfig;

        case 'setInitialConfig':
            const data = localStorage.get('currentConfig');

            if (data) {
                return data;
            } else {
                return state;
            }
    }

    return state;
}

window.store = initialState
export default combineReducers({
    currentConfig: changeConfig,
    data: changeData,
})
