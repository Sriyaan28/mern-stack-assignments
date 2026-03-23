
function Navbar()
{
    return(
        <div className="px-20 py-5 flex justify-between bg-gray-300/50 items-center">
            <span className=" size-12 border-2 overflow-hidden rounded-full"><img src="https://p7.hiclipart.com/preview/598/963/723/computer-icons-web-page-world-wide-web.jpg" alt=""/></span>
            <span className="flex justify-around w-xl font-bold">
                <span className=" hover:scale-105">Home</span>
                <span className=" hover:scale-105">Sign up</span>
                <span className=" hover:scale-105">Login</span>
            </span>
        </div>
    )
}

export default Navbar;