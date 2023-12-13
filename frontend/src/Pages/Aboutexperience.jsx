import My from '../assets/img4.jpg'
import Me from '../assets/img3.jpg'

const Aboutexperience = () => {
    return (
        <div className='aboutexp  lg:flex lg:space-between lg:mt-14 '>
            <div className="experience">
                <p className='font-serif font-cursive font-thin text-xl bg-blue-900 w-28 h-14 hover:bg-white hover:text-blue-600 justify-center pt-3 text-center rounded-xl p-1 text-white '>Experience</p>
                <h1 className='font-bold text-2xl mt-5 text-zinc-700 justify-center '>With our all expeirence we <br />  will serve you the best</h1>
                <p className='mt-2 text-sm text-zinc-700 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />  tenetur  voluptatum! Corrupti numquam iure sed.</p>
                <div className="minexp mt-7 ">
                    <div className="exp mr-3">
                        <h2 className='heads lg:ml-5 lg:text-white'>3k+</h2>
                        <p className='lg:ml-2 lg:mt-2 lg:text-sm text-center justify-center text-zinc-700'>Successful trip</p>
                    </div>
                    <div className="exp mr-3 ">
                        <h2 className='heads lg:ml-5 text-white'>1k+</h2>
                        <p className='lg:ml-2 lg:mt-2 lg:text-sm text-center justify-center text-zinc-700'>Regular clients</p>
                    </div>
                    <div className="exp">
                        <h2 className='heads ml-5 text-white'>3+</h2>
                        <p className='lg:ml-2 lg:-2 lg:text-sm text-center justify-center text-zinc-700'>Years Experience</p>
                    </div>
                </div>
            </div>
            <div className="experience exps ml-96">
                <p className='rara'>Asmita Shrestha</p>
                <img src={My} alt="" height={100} width={300} className='imges'/>
                <img src={Me} alt="" height={70} width={130} className='imgs'/>
            </div>

        </div>
    )
}

export default Aboutexperience