/** @format */

import React from "react";

const NavBar = () => {
    return (
        <header className='bg-gray-900 border-2 border-red-400 text-white w-full py-6 relative'>
            <div className='max-w-7xl flex  justify-between mx-auto'>
                <h1>Colors</h1>
                <nav className='flex gap-8'>
                    <button>Accueil</button>
                    <button>Contact</button>
                    <div className='relative group'>
                        <button>Activites</button>
                        <div className='invisible fixed w-full z-50 bg-gray-900 flex gap-3 right-0 top-20  left-0 py-1 px-6 group-hover:visible'>
                            <div className='flex flex-col gap-2'>
                                <a href=''>Loisir</a>
                                <a href=''>Loisir</a>
                                <a href=''>Loisir</a>
                                <a href=''>Loisir</a>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <a href=''>Loisir</a>
                                <a href=''>Jeu</a>
                                <a href=''>Jue</a>
                                <a href=''>Loisir</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
