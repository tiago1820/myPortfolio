import curriculumPDF from "../../public/tiago-cv.pdf";

export const Home = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = curriculumPDF;
        link.download = "tiago-cv.pdf";
        link.click();
    };

    return (
        <>
            <div>
                {/* Portfolio Section*/}
                <section className="page-section portfolio" id="portfolio">
                    <div className="container">
                        {/* Portfolio Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                        </div>
                        {/* Portfolio Grid Items*/}
                        <div className="row justify-content-center">
                            {/* Portfolio Item 1*/}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/flappy-eggman.png" alt="..." />
                                </div>
                            </div>
                            {/* Portfolio Item 2*/}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/rickandmorty.png" alt="..." />
                                </div>
                            </div>
                            {/* Portfolio Item 3*/}
                            <div className="col-md-6 col-lg-4 mb-5">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/pokemon.png" alt="..." />
                                </div>
                            </div>
                            {/* Portfolio Item 4*/}
                            {/* <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/game.png" alt="..." />
                                </div>
                            </div> */}
                            {/* Portfolio Item 5*/}
                            {/* <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/safe.png" alt="..." />
                                </div>
                            </div> */}
                            {/* Portfolio Item 6*/}
                            {/* <div className="col-md-6 col-lg-4">
                                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                                    </div>
                                    <img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="..." />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* About Section*/}
                <section className="page-section bg-primary text-white mb-0" id="about">
                    <div className="container">
                        {/* About Section Heading*/}
                        <h2 className="page-section-heading text-center text-uppercase text-white">Sobre Mí</h2>
                        {/* Icon Divider*/}
                        <div className="divider-custom divider-light">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                        </div>
                        {/* About Section Content*/}
                        <div className="row">
                            <div className="col-lg-4 ms-auto"><p className="lead">Soy un Desarrollador Full Stack con sólida experiencia en proyectos freelance utilizando HTML, CSS, JavaScript y React.JS.</p></div>
                            <div className="col-lg-4 me-auto"><p className="lead">Especializado en tecnologías como React, Node.JS, y PostgreSQL, con una formación integral en Full Stack Development de Henry Bootcamp y habilidades multilingües en español, portugués e inglés (B1).</p></div>
                        </div>
                        {/* About Section Button*/}
                        <div className="text-center mt-4">
                            <a
                                className="btn btn-xl btn-outline-light"
                                onClick={handleDownload}
                            >
                                <i className="fas fa-download me-2" />
                                Descargar CV
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}