import HeaderButton from "./HeaderButton";
import HeaderIcon from "./HeaderIcon";

import TwitterIcon from "./assets/twitter.png";
import TelegramIcon from "./assets/telegram.png";
import PancakeswapIcon from "./assets/pancakeswap.png";
import BscscanIcon from "./assets/bscscan.png";
import PoocoinIcon from "./assets/poocoin.png";
import CoingeckoIcon from "./assets/coingecko.png";
import CoinmarketcapIcon from "./assets/coinmarketcap.png";

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
                        Icon={TwitterIcon}
                        Link={"https://www.twitter.com/"}
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={TelegramIcon}
                        Link={"https://www.telegram.org/"}
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={PancakeswapIcon}
                        Link={
                            "https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x484511cfce53b15298678794c31be4263ef62be4"
                        }
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={BscscanIcon}
                        Link={
                            "https://bscscan.com/token/0x484511cfce53b15298678794c31be4263ef62be4"
                        }
                        Size={headerIconSize}
                    />
                </div>
                <div className="flex justify-center">
                    <HeaderIcon
                        Icon={PoocoinIcon}
                        Link={
                            "https://poocoin.app/tokens/0x484511cfce53b15298678794c31be4263ef62be4"
                        }
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={CoingeckoIcon}
                        Link={"https://www.coingecko.com/"}
                        Size={headerIconSize}
                    />
                    <HeaderIcon
                        Icon={CoinmarketcapIcon}
                        Link={"https://www.coinmarketcap.com/"}
                        Size={headerIconSize}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
