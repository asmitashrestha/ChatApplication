import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { AiOutlineSearch } from 'react-icons/ai'
import NotVerified from '../user/NotVerified';



const Homepage = () => {
      return (
        <>
          <NotVerified />
          <Carousel className="mt-0.5"
            showThumbs={false}
            swipeable={true}
          >
            <div className={`bg-img-1 h-[90vh] bg-cover bg-no-repeat relative`}>
              <p className="para font-serif">Jobs <span className="text-blue-900">fill </span> your pocket, <br /> but <span className="text-blue-900"> adventures</span>  fills <br /> your soul</p>
              <div className="search">
                <input type="text" className="font-serif text-xs" />
                <button className=""><AiOutlineSearch /></button>
              </div>
    
              {/* <img src={img1}  style={styles} width={1350}/> */}
            </div>
            <div className={`bg-img-2 h-[90vh] bg-cover`}>
              <p className="para"> <span className="text-blue-900">Explore the <span className="text-black">world</span>  <br /> rediscover yourself..</span></p>
              <div className="search">
                <input type="text" className="font-serif text-xs" />
                <button className=""><AiOutlineSearch /></button>
              </div>
            </div>
            <div className={`bg-img-3 h-[90vh] bg-cover`}>
              <p className="para">To travel is to <span className="text-blue-900">world</span>  <br /> live</p>
              <div className="search">
                <input type="text" className="font-serif text-xs" />
                <button className=""><AiOutlineSearch /></button>
              </div>
            </div>
          </Carousel>
    
        </>
      )
}

export default Homepage