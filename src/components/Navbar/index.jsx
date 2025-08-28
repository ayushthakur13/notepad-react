import logo from '../../assets/notes-icon.png'

export const Navbar = () => {
    return (
        <header className='flex items-center px-4 py-1 border-b-2 border-gray-300'>
            <div className='w-20 h-20'>
                <img className='w-full h-full' src={logo} alt="logo" />
            </div>
            <h1 className='text-indigo-950 text-4xl font-semibold'>NotePad</h1>
        </header>
    )
}
