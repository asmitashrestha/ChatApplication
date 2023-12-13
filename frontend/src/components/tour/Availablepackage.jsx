import img1 from '../../assets/img1.jpg'
import { BiLocationPlus } from 'react-icons/bi'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Availablepackage = () => {
    return (
        <>
         <h1 className=' mt-9 text-2xl bold font-serif justify-center text-center text-blue-800'>Special Packages</h1>
            <div className="contains lg:ml-6  lg:mt-12 grid grid-cols-1 lg:grid lg:grid-cols-3 lg:gap-1">
                <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                    <div className="box p-3">
                        <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                        <div className="mt-7 relative left-3 ">
                            <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                            <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                            <div className="flex justify-between">
                                <Link to='/package' className='bg-blue-900 rounded-md px-3 py-2 mt-4 text-white'>View Details</Link>
                                <p className='mr-7 mt-6'>$120.00</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                    <div className="box p-3">
                        <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                        <div className="mt-7 relative left-3 ">
                            <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                            <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                            <div className="flex justify-between">
                                <Link to='/package' className='bg-blue-900 rounded-md px-3 py-2 mt-4 text-white'>View Details</Link>
                                <p className='mr-7 mt-6'>$120.00</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                    <div className="box p-3">
                        <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                        <div className="mt-7 relative left-3 ">
                            <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                            <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                            <div className="flex justify-between">
                                <Link to='/package' className='bg-blue-900 rounded-md px-3 py-2 mt-4 text-white'>View Details</Link>
                                <p className='mr-7 mt-6'>$120.00</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                    <div className="box p-3">
                        <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                        <div className="mt-7 relative left-3 ">
                            <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                            <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                            <div className="flex justify-between">
                                <Link to='/package' className='bg-blue-900 rounded-md px-3 py-2 mt-4 text-white'>View Details</Link>
                                <p className='mr-7 mt-6'>$120.00</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                    <div className="box p-3">
                        <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                        <div className="mt-7 relative left-3 ">
                            <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                            <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                            <div className="flex justify-between">
                                <Link to='/package' className='bg-blue-900 rounded-md px-3 py-2 mt-4 text-white'>View Details</Link>
                                <p className='mr-7 mt-6'>$120.00</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='container bg-slate-300 relative  right-1 mb-2 rounded-lg  border-black h-30 lg:relative lg:left-5 '>
                    <div className="box p-3">
                        <img src={img1} alt="img" className='w-80 relative top-2 left-2 cursor-pointer filter grayscale-0 hover:grayscale max-w-lg transition-all duration-300' />
                        <div className="mt-7 relative left-3 ">
                            <p className='flex '> <span className='mt-1'><BiLocationPlus /> </span> Lumbini,kapilvastu</p>
                            <p className='flex'> <span className='mt-1'><BsStarFill /></span> 7 days package</p>
                            <div className="flex justify-between">
                                <Link to='/package' className='bg-blue-900 rounded-md px-3 py-2 mt-4 text-white '>View Details</Link>
                                <p className='mr-7 mt-6'>$120.00</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>




    )
}

export default Availablepackage