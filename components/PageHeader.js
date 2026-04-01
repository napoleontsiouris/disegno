

const PageHeader = ({ title, image }) => {
    return (
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            className="img-height-fluid img-fluid width100"
                            src={image}
                            alt={title}
                            style={{ objectFit: 'cover', width: '100%' }}
                        />
                        <div className="carousel-caption d-flex">
                            <div className="p-5 carousel-text-container" style={{ width: '100%', maxWidth: '1200px' }}>
                                <h1 className="text-white display-4">{title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;