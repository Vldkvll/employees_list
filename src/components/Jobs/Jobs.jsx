import { JOBS } from "components/modules/api/endpoints";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Jobs = () => {
    const { response, performFetch } = useFetch(JOBS);

    useEffect(() => {
        performFetch();
    }, [performFetch]);

    console.log("response");
    console.log(response);

    return <div>Jobs Component</div>;
};

export default Jobs;
