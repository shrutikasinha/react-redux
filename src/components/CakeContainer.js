import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";

function CakeContainer(props) {
    return (
        <div>
            <h3>Number of Cakes {props.numberOfCakes}</h3>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)