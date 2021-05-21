import HeaderButton from "./HeaderButton";
import HeaderIcon from "./HeaderIcon";

function Header() {
    var headerIconSize = 50;

    return (
        <div className="z-10 sticky top-0 p-0.5 w-full bg-gradient-to-b h-60 from-yellow-200 via-yellow-100 to-transparent">
            {/** Header */}

            {/** Top Part */}
            <div
                className="flex justify-center m-2
                sm:space-x-1 
                md:space-x-2
                lg:space-x-3
                xl:space-x-4
                space-x-5"
            >
                <HeaderButton Name={"HOME"} Link={"#top"} />
                <HeaderButton Name={"ABOUT"} Link={"#about"} />
                <HeaderButton Name={"TOKENOMICS"} Link={"#tokenomics"} />
            </div>

            {/** Bottom Part */}
            <div
                className="flex justify-center 
                sm:flex-col 
                md:flex-col"
            >
                <div className="flex justify-center">
                    <HeaderIcon
                        Icon={"/../public/assets/twitter.png"}
                        Link={"https://www.twitter.com/"}
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={"/../public/assets/telegram.png"}
                        Link={"https://www.telegram.org/"}
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={"/../public/assets/pancakeswap.png"}
                        Link={"https://pancakeswap.finance/"}
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={"/../public/assets/bscscan.png"}
                        Link={"https://www.bscscan.com/"}
                        Size={headerIconSize}
                    />
                </div>
                <div className="flex justify-center">
                    <HeaderIcon
                        Icon={"/../public/assets/poocoin.png"}
                        Link={"https://poocoin.app/"}
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={"/../public/assets/coingecko.png"}
                        Link={"https://www.coingecko.com/"}
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={"/../public/assets/coinmarketcap.png"}
                        Link={"https://www.coinmarketcap.com/"}
                        Size={headerIconSize}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
