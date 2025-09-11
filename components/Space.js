import React from 'react'
const Space = () => {
    const description = `<h4>Ο χώρος μας</h4><p>Στο φροντιστήριο σχεδίου Disegno, ο χώρος μας έχει σχεδιαστεί με γνώμονα την άνεση και τη δημιουργικότητα των μαθητών μας. Βρίσκεται σε μια ήσυχη γειτονιά, προσφέροντας ένα περιβάλλον ιδανικό για συγκέντρωση και έμπνευση.</p>`;
    return (
        <React.Fragment>
            <div id="xwros" className="container-fluid blog ">
                <div className="row g-4 justify-content-center" >
                    <div className="blog-item">
                        <div className="row">
                            <div className="col-md-6 col-lg-6 col-xl-6 no-padding">
                                <div className="blog-img">
                                    <img src={`/img/elefthero.jpg`} className="img-fluid w-100" alt="" />
                                
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6 align-self-center">
                                <div className="blog-content rounded-bottom p-4">
                                    {/* <a href="#" className="h4 d-inline-block mb-3">{project.attributes.title}</a> */}
                                    <div  dangerouslySetInnerHTML={{ __html: description }} ></div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Space