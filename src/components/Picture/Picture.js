import React from 'react';
import './Picture.css'


class Picture extends React.Component{

    state={
        hover:false
    }

    mouseOver = () => {
        this.setState({hover: true});
        console.log(this.state);
    }
    mouseOut() {
        this.setState({hover: false});
        console.log(this.state)
    }
    render () {
            return (
                <div className="Picture" onMouseOver={() => this.mouseOver()} onMouseOut={() => this.mouseOut()}>
                    <img className="Img" src="https://assets.webn.mobi/hearthstone/3953c5ca2f58247cec8036b6d531f25a69b533ff7b5c1a7f7348452c99570d3d.png" alt="HS Card" />
                    {this.state.hover ? (<img className="Preview" src="https://assets.webn.mobi/hearthstone/3953c5ca2f58247cec8036b6d531f25a69b533ff7b5c1a7f7348452c99570d3d.png" alt="HS Card"/>) : null}  
                </div>
            )
    }
}

export default Picture;