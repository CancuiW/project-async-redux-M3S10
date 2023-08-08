import React from "react";
import Gif from './Gif';
import { connect } from "react-redux";
const GifList=props=>{
    const {gifs}=props;
    return (
        <div>
            {
                gifs.map(gif=>{
                    return(<Gif key={gif.id} gif={gif} />)
                })
            }
        </div>
    )
}
const mapStateToProps=state=>{
    return {
        gifs:state.gifs
    }
}

export default connect(mapStateToProps)(GifList);