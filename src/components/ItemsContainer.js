import React from "react";
import { connect } from "react-redux";
import { buyCake } from "./redux/cake/cakeActions";
import { buyIcecream } from "./redux/icecream/icecreamAction";

function ItemsContainer(props) {
  return (
    <div>
      <h3>Number of Items {props.item}</h3>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    item: ownProps.cake
      ? state.cake.numberOfCakes
      : state.icecream.numberOfIcecream,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const functn = ownProps.cake ? { buyCake: () => dispatch(buyCake()) } : { buyIcecream: () => dispatch(buyIcecream()) }
  return {
   functn
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
