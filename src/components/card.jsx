import React, {Component} from "react";

class Card extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card" style={{marginTop: "20px", backgroundColor: "#FFDD88"}}>
                    <div className="card-body">
                        <h5 className="card-title" style={{color: "#DD8899"}}>{this.props.cardTitle}</h5>
                        <h6 className="card-subtitle mb-2 text-muted" style={{color: "#DD8899"}}>{this.props.cardSubtitle}</h6>
                        {this.props.children}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Card;