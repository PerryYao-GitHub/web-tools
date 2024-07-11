import React, {Component} from "react";
import {connect} from "react-redux";
import ACTIONS from "../../redux/actions";

class DigitBtn extends Component {
    render() {
        return (
            <button onClick={()=>this.props.addDigit(this.props.digit)}>
                {this.props.digit}
            </button>
        )
    }
}

const mapDispatchToProps = {
    addDigit: (digit) => {
        return {
            type: ACTIONS.ADD_DIGIT,
            digit: digit,
        }
    }
}

export default connect(null, mapDispatchToProps)(DigitBtn);