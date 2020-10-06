 import React from 'react';

function PortfolioImage(props) {
    return (
        
        <div className="col-lg-4">
            <img src={props.image}
                className="GM" alt={props.title} width="300" height="300" />
        </div>
        
    )
};

export default PortfolioImage;