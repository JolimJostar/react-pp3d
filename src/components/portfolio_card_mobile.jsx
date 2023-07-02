import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function PortfolioCardMobile(props) {
    return (
        <div className="w-384 portfolio-card-mobile">
            <div className='pv-32 ph-24 h-782 portfolio-card-content-mobile'>
                <div>
                    <div className="h-8"></div>
                    <div className='protfolio-card-carousel-mobile'>
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
                    <div className="h-25"></div>
                    {props.bigPoints.map(e => <div>
                        <div className='flex flex-column'>
                            <h6 className='big-point'>•&nbsp;</h6>
                            <h6 className='big-point'>{e}</h6>
                        </div>
                        <br />
                    </div>)}
                    {props.smallPoints.map(e => <div>
                        <div className='flex flex-column'>
                            <h6 className='small-point'>•&nbsp;</h6>
                            <p className='small-point'>{e}</p>
                        </div>
                        <br />
                    </div>)}
                </div>
                <div className='h-6'></div>
                <div className='flex column centered-alingment'>
                    <h3 className='size-25'>{props.price} ₽</h3>
                    <div className="h-16"></div>
                    <button className='size-20 ph-16 pv-8'>Открыть в редакторе</button>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCardMobile;