import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function PortfolioCard(props) {
    return (
        <div className="w-384 portfolio-card">
            <div className='pv-32 ph-12 h-782 portfolio-card-content'>
                <div>
                    <h5>{props.title}</h5>
                    <div className="h-8"></div>
                    <div className='protfolio-card-carousel ph-24'>
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
                    <div className="h-16"></div>
                    {props.bigPoints.map(e => <h6>{e}</h6>)}
                    <div className="h-16"></div>
                    {props.smallPoints.map(e => <p className='small-point'>{e}</p>)}
                </div>
                <div className='flex column centered-alingment'>
                    <h3>{props.price} ₽</h3>
                    <div className="h-16"></div>
                    <button className='size-25 ph-24 pv-8'>Открыть в редакторе</button>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard;