import React from "react";
import "./Snow.css";
class Snow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="snow-container">
                    <div className="snow foreground"></div>
                    <div className="snow foreground layered"></div>
                    <div className="snow middleground"></div>
                    <div className="snow middleground layered"></div>
                    <div className="snow background"></div>
                    <div className="snow background layered"></div>
                </div>
            </div>
        );
    }
}
export default Snow;