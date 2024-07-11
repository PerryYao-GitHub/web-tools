import React, {Component} from "react";
import Card from "../card";

class NotFoundView extends Component{
    render() {
        return (
            <React.Fragment>
                <Card cardTitle={"404 not found"} />
            </React.Fragment>
        );
    }
}

export default NotFoundView;