import React from "react";

function HeaderLink(props) {
    return (
        <>
            <a href={props.path} className="header-link">{props.title}</a>
        </>
    );
}

export default HeaderLink;
