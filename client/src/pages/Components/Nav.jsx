import {useState} from 'react'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-20 flex justify-between items-center">
      <div className='w-30 -ml-2 flex justify-center items-center'>
        <img src="src/assets/LOGO.png" alt="" className='h-full object-fill'/>
      </div>
      <div className='flex flex-col justify-center items-center gap-2 relative'>
        <div className='bg-gray-200 flex justify-center items-center text-3xl p-2 rounded-full cursorpointer hover:bg-gray-300 transition-all duration-300' onClick={() => setIsOpen(!isOpen)}>
            <ion-icon name="menu-outline"></ion-icon>
        </div>
        <div className={`absolute top-14 -left-48 bg-white shadow-lg rounded-lg py-3 w-58 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className='flex flex-col gap-1'>
                <li className='hover:bg-slate-100 cursor-pointer p-2 px-4 flex items-center justify-start gap-2'>
                    <div className='flex justify-center items-center text-2xl'>
                        <ion-icon name="help-circle-outline"></ion-icon>
                    </div>
                    <p>Help Centre</p>
                    </li>
                <div className='w-full h-[0.05rem] bg-slate-200'></div>
                <li className='hover:bg-slate-100 cursor-pointer p-1 px-4'>
                    <p>Become a host</p>
                    <p className='text-sm text-gray-500'>It's easy to start hosting and earning extra income.</p>
                </li>
                <div className='w-full h-[0.05rem] bg-slate-200'></div>
                <li className='hover:bg-slate-100 cursor-pointer p-1 px-4'>Stays</li>
                <li className='hover:bg-slate-100 cursor-pointer p-1 px-4'>Bookings</li>
                <div className='w-full h-[0.05rem] bg-slate-200'></div>
                <li className='hover:bg-slate-100 cursor-pointer p-1 px-4'><a href="/signup">Log in or Sign Up</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav