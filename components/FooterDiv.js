import React from 'react';
import Link from 'next/link';



export default function FooterDiv(props) {
    return (
        <React.Fragment>
           
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{borderColor: '#3E3E4E !important'}}>
                <div className="row">
                    
                    <div className="col-lg-12 text-center text-md-center">
                        <p className="m-0 text-white">2025&copy; disegno.gr. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

