

const PageHeader = ({ title, image }) => {
    // console.log('image', image)
    // console.log('title', title)
    return (
        <div className="container-fluid p-0">
            <div className="page-header">
                <img className="img-height-fluid img-fluid width100" src={`${image}`} alt="Image" />
                <div className="page-header-caption d-flex justify-content-center">
                    <div className="p-5 page-header-text-container" style={{ width: '100%', maxWidth: '1200px' }}>
                        <h1 className="display-4 text-white ">{title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader;