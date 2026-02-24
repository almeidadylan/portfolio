function Header () {
    return (
        <header className="w-[100%] h-[72px] bg-(--grey-0) flex flex-row justify-around items-center">
            <h2 className="text-[22px] font-bold">Dylan</h2>
            <ul className="flex flex-row flex-around">
                <li className="text-base text-(--grey-2) font-medium m-[10px] cursor-pointer hover:text-[#FFF]">Home</li>
                <li className="text-base text-(--grey-2) font-medium m-[10px] cursor-pointer hover:text-[#FFF]">Projects</li>
                <li className="text-base text-(--grey-2) font-medium m-[10px] cursor-pointer hover:text-[#FFF]">Contatos</li>
                <li className="text-base text-(--grey-2) font-medium m-[10px] cursor-pointer hover:text-[#FFF]">Midias Digitais</li>
            </ul>
        </header>
    );
}

export default Header;