import React from "react";

const PageHeader = ({title}) => {
   
    return (
        <div className="container-fluid page_header">
            <div className="container">   
                <h1>{title}</h1>
            </div>
        </div>
  )
};

export default PageHeader;