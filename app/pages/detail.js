import { connect } from "react-redux";
import React from "react";

const Detail = props => (
  <ul>
    {props.list.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

function mapStateToProps(state) {
  console.log(state, 111);
  return { ...state.detail }
}

export default connect(mapStateToProps)(Detail)
