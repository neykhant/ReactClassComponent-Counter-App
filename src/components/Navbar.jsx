//jshint ignore:start
import React from 'react';
const Navbar = (props) => {
    // console.log("Nav",props)
    const {totalCount} = props;
    return ( 
        <div>
            Navbar {totalCount}
        </div>
     );
}
 
export default Navbar;