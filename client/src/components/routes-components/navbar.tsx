import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Game {
    id: number;
    name: string;
    link_id?: string;
}

const NavBar = () => {
    const games: Game[] = [
        {
            id: 1,
            name: "7SHDHS9SDJ3K",
            link_id: "7SHDHS9SDJ3K",
        },
        {
            id: 2,
            name: "7SHDHS9SDJ3K",
            link_id: "7SHDHS9SDJ3K",
        },
        {
            id: 3,
            name: "7SHDHS9SDJ3K",
            link_id: "7SHDHS9SDJ3K",
        },
        {
            id: 4,
            name: "7SHDHS9SDJ3K",
            link_id: "7SHDHS9SDJ3K",
        },
        {
            id: 5,
            name: "7SHDHS9SDJ3K",
            link_id: "7SHDHS9SDJ3K",
        },
        {
            id: 6,
            name: "7SHDHS9SDJ3K",
            link_id: "7SHDHS9SDJ3K",
        },
    ];

    useEffect(() => {
        document.title = "Lucky Bookings";
    }, []);
    return (
        <nav className="border-r md:p-6 min-h-screen">
            <div className="mb-10 mt-3">
                <Link to="/">
                    <h2 className="font-bold">
                        LuckyBo<span className="text-blue-500">oking.com</span>
                    </h2>
                </Link>
            </div>
            <div>
                <div className="mb-5">
                    <h3 className="text-gray-400 font-black text-sm uppercase">
                        Other Games
                    </h3>
                </div>
                <div className="overflow-y-auto">
                    <ul>
                        {games.map((game: Game, index: number) => (
                            <li className="mb-7" key={index}>
                                <Link
                                    to={`/game/${game.link_id}`}
                                    className="hover:text-blue-700 py-2 text-slate-800 font-bold tracking-wider"
                                >
                                    {game.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
