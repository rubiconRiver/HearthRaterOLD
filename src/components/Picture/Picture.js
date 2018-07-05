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
                    <img className="Img" src="https://assets.webn.mobi/hearthstone/0934a8fed42e35594392610cb9f22987983cd39ea9630ff85b091a7f91ec2a7a.png" alt="HS Card" />
                    {this.state.hover ? (<img className="Preview" src="https://assets.webn.mobi/hearthstone/0934a8fed42e35594392610cb9f22987983cd39ea9630ff85b091a7f91ec2a7a.png" alt="HS Card"/>) : null}  
                </div>
            )
    }
}

export default Picture;