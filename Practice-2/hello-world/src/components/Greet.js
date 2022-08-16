import React from "react";

export const Greet = (props) => 
{
    console.log(props.name);
    return <h1>Hello {props.name}</h1>;
}

export const SendOff = () => 
{
    // return (
    //     <div id="send-off" class="send-off-class">
    //         <h1>Bye Dheeraj</h1>
    //     </div>
    // );
    return React.createElement('div', {id:'send-off', className:'send-off-class'}, React.createElement('h1', null, 'Bye Dheeraj'));
}

// export default Greet;