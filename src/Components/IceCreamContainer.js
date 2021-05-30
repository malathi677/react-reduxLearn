import React from "react";
import { connect } from "react-redux";
import buyIceCream from "../redux/iceCream/iceCreamActions";

function IceCreamContainer(props) {
  return (
    <div>
      <center>
        <h1>No of ice creams-{props.noOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>Buy Icecream</button>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIceCreams: state.ice.noOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
