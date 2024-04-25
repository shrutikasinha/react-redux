import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";

function HookCakeContainer() {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>Number of Cakes {numberOfCakes}</h3>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HookCakeContainer

// const mapStateToProps = state => {
//     return {
//         numberOfCakes: state.numberOfCakes
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)