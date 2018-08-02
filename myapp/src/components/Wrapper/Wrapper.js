import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className= {props.shakeWrapper ? props.shakeWrapper : "wrapper"}>{props.pictures}</div>;



export default Wrapper;