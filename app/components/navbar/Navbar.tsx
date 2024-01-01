'use client'

import { SafeUser } from "@/app/types";
import Container from '../Container'
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';
import getCurrentUser from '@/app/actions/getCurrentUser';
import Categories from "./Categories";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    
    if (currentUser === null){
        console.log('Not found')
    }
    else{
        console.log({ currentUser });
    }
    return (
        <div className="fixed w-full bg-[#232323] z-10 shadow-sm">
            <div className="
                py-4 
            "
            >
            <Container>
                <div
                    className='
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    '
                >
                    <Logo/>
                    <Search />
                    <UserMenu currentUser={currentUser} />
                </div>
            </Container>

            </div>
            <Categories/>
        </div>
    );
}

export default Navbar;