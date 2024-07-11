import ACTIONS from "./actions";

const evaluate = (state) => {
    let res = 0;
    let curVal = state.currentOperand;
    let lastVal = state.lastOperand;
    let opt = state.operator;

    curVal = parseFloat(curVal);
    lastVal = parseFloat(lastVal);
    // console.log(curVal, lastVal, opt);
    switch (opt) {
        case "+":
            res = lastVal + curVal;
            break;

        case "-":
            res = lastVal - curVal;
            break;

        case "*":
            res = lastVal * curVal;
            break;

        case "/":
            res = lastVal / curVal;
            if (curVal === 0) res = "NaN";
            break;
    }

    res.toString();
    return res;
}

const reducer = (
    state = {
        currentOperand: "",
        lastOperand: "",
        operator: "",
    },
    action) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            if ((state.currentOperand === "" && action.digit === ".") || (state.currentOperand === "0" && action.digit !== ".")) return state;
            if (action.digit === '.' && state.currentOperand.includes('.')) return state;

            if (state.currentOperand === "" && state.operator === "" && state.lastOperand !== "") return {
                currentOperand: action.digit,
                lastOperand: "",
            }
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,
            }

        case ACTIONS.DELETE_DIGIT:
            if (state.currentOperand === "") return state;
            return {
                ...state,
                currentOperand: state.currentOperand.slice(0, -1),
            }

        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand !== "" && state.operator !== "" && state.lastOperand !== "") return {  // cur last opt 三者皆有: 算结果
                operator: action.operator,
                currentOperand: "",
                lastOperand: evaluate(state),
            }
            if (state.lastOperand !== "") return {  // cur 无, last 有, opt 有: 换opt
                ...state,
                operator: action.operator,
            }
            if (state.currentOperand === "") return state;  // cur 无, last 有, opt 有: 点击opt无效


            return {  // cur 有, last 无, opt 无
                currentOperand: "",
                operator: action.operator,
                lastOperand: state.currentOperand,
            }

        case ACTIONS.CLEAR:
            return {
                currentOperand: "",
                operator: "",
                lastOperand: "",
            }

        case ACTIONS.EVALUATE:
            if (state.currentOperand !== "" && state.operator ==="") return {
                ...state,
                lastOperand: state.currentOperand,
                currentOperand: "",
            }
            return {
                ...state,
                operator: "",
                currentOperand: "",
                lastOperand: evaluate(state),
            }

        default:
            return state;
    }
}

export default reducer