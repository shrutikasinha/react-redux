import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "./redux/icecream/icecreamAction";

function HookIcecreamContainer() {
    const numberOfIcecreams = useSelector(state => state.icecream.numberOfIcecream)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>Number of Icecreams {numberOfIcecreams}</h3>
            <button onClick={() => dispatch(buyIcecream())}>Buy cake</button>
        </div>
    )
}

export default HookIcecreamContainer

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