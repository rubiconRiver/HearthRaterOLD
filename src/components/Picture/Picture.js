import React from 'react';
import './Picture.css'


class Picture extends React.Component{

    state={
        hover:false
    }

    mouseOver = () => {
        this.setState({hover: true});
    }
    mouseOut() {
        this.setState({hover: false});
    }
    render () {
            return (
                <div className="Picture">
                    <img className="Img" src="https://assets.webn.mobi/hearthstone/0934a8fed42e35594392610cb9f22987983cd39ea9630ff85b091a7f91ec2a7a.png" alt="HS Card" />
                </div>
            )
    }
}

export default Picture;