function User() {
    // state
    const users = [
        {
            name: "Aarav Sharma",
            email: "aarav.sharma@example.com",
            image: "https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            name: "Vivaan Patel",
            email: "vivaan.patel@example.com",
            image: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        {
            name: "Aditya Singh",
            email: "aditya.singh@example.com",
            image: "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            name: "Sai Kumar",
            email: "sai.kumar@example.com",
            image: "https://randomuser.me/api/portraits/men/14.jpg"
        },
        {
            name: "Rohan Reddy",
            email: "rohan.reddy@example.com",
            image: "https://randomuser.me/api/portraits/men/15.jpg"
        },
        {
            name: "Ananya Gupta",
            email: "ananya.gupta@example.com",
            image: "https://randomuser.me/api/portraits/women/11.jpg"
        },
        {
            name: "Isha Verma",
            email: "isha.verma@example.com",
            image: "https://randomuser.me/api/portraits/women/12.jpg"
        },
        {
            name: "Priya Nair",
            email: "priya.nair@example.com",
            image: "https://randomuser.me/api/portraits/women/13.jpg"
        },
        {
            name: "Sneha Das",
            email: "sneha.das@example.com",
            image: "https://randomuser.me/api/portraits/women/14.jpg"
        },
        {
            name: "Kavya Iyer",
            email: "kavya.iyer@example.com",
            image: "https://randomuser.me/api/portraits/women/15.jpg"
        }
    ];
    // return
    return (
        <div className="mx-35 my-5 text-white">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {users.map((user)=>{
                    return (
                    <div className="border-2 bg-gradient-to-r from-blue-950 to-black border-blue-950 rounded-2xl shadow-xl shadow-gray-700 grid place-content-center p-5">
                        <img className=" block mx-auto rounded-full p-1 border-2 my-3" src={user.image} alt="User image" />
                        <p className="mx-auto">{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                )
                })}
            </div>
        </div>
    )
}
export default User;