import { NavLink } from "react-router-dom"

export const Sidebar = () => {

    const getStyles = ({isActive}) => {
        const commonStyles = 'flex items-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full'
        return isActive ? `bg-indigo-950 text-gray-100 ${commonStyles}` 
        : `hover:bg-indigo-950 hover:text-gray-100 ${commonStyles}`
    }

    return (
        <aside className="flex flex-col gap-3 w-40 h-screen p-3 border-r-2 border-gray-300">
            <NavLink to='/' className={getStyles}>
                <span className="material-symbols-outlined">home</span>
                <span>Home</span>
            </NavLink>
            <NavLink to='/archive' className={getStyles}>
                <span className="material-symbols-outlined">archive</span>
                <span>Archive</span>
            </NavLink>
            <NavLink to='/important' className={getStyles}>
                <span className="material-symbols-outlined">label_important</span>
                <span>Important</span>
            </NavLink>
            <NavLink to='/bin' className={getStyles}>
                <span className="material-symbols-outlined">delete</span>
                <span>Bin</span>
            </NavLink>
        </aside>
    )
}
