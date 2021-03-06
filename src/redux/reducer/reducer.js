import { ENDPOINTS } from "components/modules/api/endpoints";
import { API_ACTIONS } from "redux/actions/actions";
import camelCase from "camelcase";

function initApiState() {
    return Object.keys(ENDPOINTS).reduce((acc, next) => {
        const inner = {
            data: null,
            loading: false,
            error: null,
        };

        acc[camelCase(next)] = inner;

        return acc;
    }, {});
}

const INITIAL_STATE = initApiState();

export const apiReducer = (state = INITIAL_STATE, action) => {
    // debugger
    switch (true) {
        case action.type.startsWith(API_ACTIONS.FETCH_START):
            const innerStart = camelCase(
                action.type.replace(API_ACTIONS.FETCH_START, "")
            );
            return {
                ...state,
                [innerStart]: {
                    ...state[innerStart],
                    loading: true,
                    error: null,
                },
            };

        case action.type.startsWith(API_ACTIONS.FETCH_SUCCESS):
            const innerSuccess = camelCase(
                action.type.replace(API_ACTIONS.FETCH_SUCCESS, "")
            );

            return {
                ...state,
                [innerSuccess]: {
                    ...state[innerSuccess],
                    data: action.payload,
                    loading: false,
                    error: null,
                },
            };

        case action.type.startsWith(API_ACTIONS.FETCH_FAILURE):
            const innerFailure = camelCase(
                action.type.replace(API_ACTIONS.FETCH_FAILURE, "")
            );

            return {
                ...state,
                [innerFailure]: {
                    ...state[innerFailure],
                    loading: false,
                    error: action.payload,
                },
            };

        default:
            return {
                ...state,
            };
    }
};

export default apiReducer;
