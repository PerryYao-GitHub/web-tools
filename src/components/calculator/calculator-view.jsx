import React, {Component} from "react";
import {connect} from "react-redux";
import Card from "../card";
import DigitBtn from "./digit-btn";
import OperatorBtn from "./operator-btn";
import ACTIONS from "../../redux/actions";

class CalculatorView extends Component {
    state = {
        formater: Intl.NumberFormat("en-US"),
    }

    render() {
        return (
            <React.Fragment>
                <Card cardTitle={"Web Calculator"} cardSubtitle={"--- self-making web calculator"}>
                    <div className={"calculator"}>
                        <div className={"output"}>
                            <div className={"last-output"}>
                                {this.state.formater.format(this.props.lastOperand)} {this.props.operator}
                            </div>
                            <div className={"current-output"}>
                                {this.state.formater.format(this.props.currentOperand)}
                            </div>
                        </div>

                        <div className={"operations"}>
                            <button onClick={this.props.clear}>AC</button>
                            <button onClick={this.props.deleteDigit}>Del</button>
                            <button>x^2</button>
                            <OperatorBtn operator={"/"} />
                            <DigitBtn digit={"7"} />
                            <DigitBtn digit={"8"} />
                            <DigitBtn digit={"9"} />
                            <OperatorBtn operator={"*"} />
                            <DigitBtn digit={"4"} />
                            <DigitBtn digit={"5"} />
                            <DigitBtn digit={"6"} />
                            <OperatorBtn operator={"-"} />
                            <DigitBtn digit={"1"} />
                            <DigitBtn digit={"2"} />
                            <DigitBtn digit={"3"} />
                            <OperatorBtn operator={"+"} />
                            <button>+/-</button>
                            <DigitBtn digit={"0"} />
                            <DigitBtn digit={"."} />
                            <button onClick={this.props.evaluate}>=</button>
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        currentOperand: state.currentOperand,
        lastOperand: state.lastOperand,
        operator: state.operator,
    }
}

const mapDispatchToProps = {
    deleteDigit: ()=> {
        return {
            type: ACTIONS.DELETE_DIGIT,
        }
    },

    clear: () => {
        return {
            type: ACTIONS.CLEAR,
        }
    },

    evaluate: () => {
        return {
            type: ACTIONS.EVALUATE,
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorView)