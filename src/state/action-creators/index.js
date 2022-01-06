export const depositMoney = (amount) => {
    console.log("action-creators/index.js->depositMoney: ", amount);
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    };
};

export const withdrawMoney = (amount) => {
    console.log("action-creators/index.js->withdrawMoney: ", amount);
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    };
};
