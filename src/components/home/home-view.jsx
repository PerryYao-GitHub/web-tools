import React, {Component} from "react";
import Card from "../card";

class HomeView extends Component {
    render() {
        return (
            <React.Fragment>
                <Card cardTitle={"Main Page"} cardSubtitle={"--- self-making web tools and apps"}>
                    Hi, I' am Peiyou-Yao. I would upload some self-making web tools and apps in this website.
                </Card>
            </React.Fragment>
        );
    }
}

export default HomeView;