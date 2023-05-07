import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Link } from "react-router-dom";

function PortfolioCard(props) {


    return (
        <div className="portfolio-card">
            <div className='ph-32 portfolio-card-content'>
                <div className='min-w-336'>
                    <h3 style={{ textAlign: 'center' }}><b>{props.title}</b></h3>
                    <div className="h-40"></div>
                    {props.bigPoints.map(e => (
                        <div>
                            <div className='flex'>
                                <h4 style={{ fontWeight: '700' }}>•&#160;</h4>
                                <h4 style={{ fontWeight: '700' }}>{e}</h4>
                            </div>
                            <div className="h-24 phone-hidden"></div>
                            <div className="h-12 pc-hidden"></div>
                        </div>
                    ))}

                    {props.smallPoints.map(e => (
                        <div>
                            <div className='flex'>
                                <h4 className='small-point'>•&#160;</h4>
                                <h4 className='small-point'>{e}</h4>
                            </div>
                            <div className="h-24 phone-hidden"></div>
                            <div className="h-12 pc-hidden"></div>
                        </div>
                    ))}
                    <div className="h-8 phone-hidden"></div>
                    <div className="h-12 pc-hidden"></div>
                    <div className='flex column centered-alingment'>
                        <h3><b>{props.price} ₽</b></h3>
                        <div className="h-30 phone-hidden"></div>
                        <div className="h-25 pc-hidden"></div>
                        <button className='portfoli-card-button ph-24 pv-8'><Link to={'/redactor'} style={{ textDecoration: 'inherit', color: 'inherit' }}>Открыть в редакторе</Link></button>
                    </div>
                </div>
                <div className='protfolio-card-carousel'>
                    <CarouselProvider
                        naturalSlideWidth={400}
                        naturalSlideHeight={270}
                        totalSlides={props.images.length}
                        hasMasterSpinner={true}
                        infinite={true}
                    >
                        <Slider >
                            {
                                props.images.map((e, index) =>
                                    <Slide index={index}>
                                        <Image src={e} alt="" />
                                    </Slide>)
                            }
                        </Slider>
                        <DotGroup className='carousel-dots' showAsSelectedForCurrentSlideOnly={true} disableActiveDots={false} />
                    </CarouselProvider>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;