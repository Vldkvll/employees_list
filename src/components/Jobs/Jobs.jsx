import api from "components/modules/api/api";
import { JOBS } from "components/modules/api/endpoints";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActionsCreator } from "redux/actions/actions";

const Jobs = () => {
    const state = useSelector((state) => state.api[JOBS]);
    const dispatch = useDispatch();

    useEffect(async () => {
        try {
            dispatch(apiActionsCreator.fetch(JOBS));

            const data = await api.fetch(JOBS);
            //   console.log("data");
            //         console.log(data);
            dispatch(apiActionsCreator.fetchSuccess(JOBS, data));
        } catch (error) {
            dispatch(apiActionsCreator.fetchSuccess(JOBS, error));
        }
    }, []);

    console.log("state");
    console.log(state);

    return <div>Jobs Component</div>;
};

export default Jobs;
