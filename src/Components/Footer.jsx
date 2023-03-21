import React from "react";

function footer()
{
    var today = new Date();
    var currYear = today.getFullYear();

    return (
        <footer>
            <p>CopyRight © {currYear}</p>;
        </footer>
    );
}

export default footer;