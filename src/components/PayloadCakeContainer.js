import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";

function PayloadCakeContainer(props) {
    const [number, setNumber] = React.useState(1)
    return (
        <div>
            <h3>Number of Cakes {props.numberOfCakes}</h3>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(Number(number))}>Buy {number} cakes</button>
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
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayloadCakeContainer)