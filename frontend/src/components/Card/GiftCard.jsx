
import EssoImg from '../../assets/images/esso.jpg'
import AmazonImg from '../../assets/images/amazon.jpg'
import DoordashImg from '../../assets/images/doordash.jpg'
import StarbucksImg from '../../assets/images/starbucks.png'
import PetImg from '../../assets/images/pet.jpg'
import WalmartImg from '../../assets/images/walmart.png'

const GiftCard = () => {
    const data = [
        {
            id: 1,
            img: EssoImg,
            title: ' Esso™ and Mobil...',
            subTitle: 'Buy Now And Get',
            percentage: '1% More',
        },
        {
            id: 1,
            img: AmazonImg,
            title: ' Amazon.ca',
            subTitle: '',
            percentage: '',
        },
        {
            id: 1,
            img: DoordashImg,
            title: ' DoorDash',
            subTitle: 'Buy Now And Get',
            percentage: ' 1.5% More',
        },
        {
            id: 1,
            img: StarbucksImg,
            title: '  Starbucks',
            subTitle: '',
            percentage: '',
        },
        {
            id: 1,
            img: PetImg,
            title: '   Petsmart',
            subTitle: 'Buy Now And Get',
            percentage: ' 6% More',
        },
        {
            id: 1,
            img: WalmartImg,
            title: '    Walmart Canada',
            subTitle: 'Buy Now And Get',
            percentage: ' 1% More',
        },
    ]
    return (
        <>
            <div className="row align-items-stretch justify-content-center g-3 g-md-4">
                {data.map((item) => (
                    <div key={item.id} className="col-6 col-md-4 col-lg-2 d-flex">

                        {/* Wrapper that scales */}
                        <div className="scale-anim w-100 d-flex flex-column">
                            <div className="card bg-secondary h-100 w-100 d-flex flex-column rounded-4 overflow-hidden">

                                <div className='text-center p-3 p-md-4'>
                                    <img src={item.img} alt="..." className='rounded-4' />
                                </div>

                                <div className="card-body bg-white">
                                    <h5 className="title">{item.title}</h5>
                                    <p className="sub-title mb-0">{item.subTitle ?? '_'}</p>
                                    <div className={`percentage fw-bold ${item.percentage ? "" : "opacity-0"}`}>
                                        <p className='mb-0'>{item.percentage}</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </>
    )
}

export default GiftCard
