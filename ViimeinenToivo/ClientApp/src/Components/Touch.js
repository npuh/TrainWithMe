import React from "react";
import ReactTouchEvents from "react-touch-events";


class Touch extends React.Components {
    handleTap() {
        console.log("tapped!");
    }
    handleSwipe(direction) {
        switch (direction) {
            case "top":
            case "bottom":
            case "left":
            case "right":

                console.log(`you swiped ${direction}`);
        }
    }
    render() {
        <ReactTouchEvents
            onTap={this.handleTap.bind(this)}
            onSwipe={this.handleSwipe.bind(this)}
        >
            <button>Tap me</button>
        </ReactTouchEvents>;
    }
}