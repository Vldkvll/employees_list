import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo } from "react";
import { apiActionsCreator } from "../redux/actions/actions";
import camelCase from "camelcase";
import { selectApiState } from "components/selector/selector";

const useFetch = (endpoint) => {
    const dispatch = useDispatch();
    const apiState = useSelector(selectApiState);

    const performFetch = useCallback(
        (data) => dispatch(apiActionsCreator.fetch(endpoint, data)),
        [endpoint, dispatch]
    );

    const response = useMemo(() => apiState[camelCase(endpoint)], [
        apiState,
        endpoint,
    ]);
    // debugger
    return {
        response,
        performFetch,
    };
};

export default useFetch;
