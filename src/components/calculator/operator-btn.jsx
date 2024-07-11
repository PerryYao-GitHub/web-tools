import React, {Component} from "react";
import {connect} from "react-redux";
import ACTIONS from "../../redux/actions";

class OperatorBtn extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={() => { this.props.chooseOperator(this.props.operator) }}>{this.props.operator}</button>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {
    chooseOperator: (operator)=> {
        return {
            type: ACTIONS.CHOOSE_OPERATION,
            operator: operator,
        }
    }
}

export default connect(null, mapDispatchToProps)(OperatorBtn);