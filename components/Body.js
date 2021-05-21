import CoinIcon from "../components/CoinIcon";
import Button from "../components/Button";
import CheckmarkText from "../components/CheckmarkText";
import Card from "../components/Card";
import AboutPage from "../components/AboutPage";
import TokenomicsPage from "../components/TokenomicsPage";
import RewardsModal from "../components/RewardsModal";

function Body() {
    var coinIconSize = 50;

    return (
        <div className="flex flex-col items-center text-center mx-auto">
            {/* The Body */}

            {/* Home */}
            <div className="flex flex-col space-y-10" data-aos="zoom-in">
                <CoinIcon
                    Icon={"/../public/assets/sb-coin-sm.png"}
                    Link={"#top"}
                    Size={coinIconSize}
                />

                <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center space-y-10">
                        <div>
                            {/* SBERRY */}
                            <p
                                className="text-6xl font-bold

                            transition-all 
                            hover:tracking-widest"
                            >
                                $SBERRY
                            </p>
                        </div>
                        <div
                            className="border-2 border-solid border-yellow-300 bg-yellow-200 rounded-xl px-14 font-bold text-yellow-900

                        transition-all 
                        hover:border-2
                        hover:border-yellow-400
                        hover:bg-yellow-300
                        hover:tracking-tight"
                        >
                            {/* Current Price (in BNB) */}
                            <p className="underline">TOKEN PRICE (BNB)</p>
                            <p>(Check on Poocoin)</p>
                        </div>
                        <div
                            className="flex justify-center space-x-10 items-center text-left
                            sm:space-x-0
                            md:space-x-0
                            lg:space-x-0
                            xl:space-x-0
                            
                            sm:flex-col 
                            md:flex-col
                            lg:flex-col
                            xl:flex-col
                            
                            sm:space-y-5
                            md:space-y-5
                            lg:space-y-5
                            xl:space-y-5"
                        >
                            <div>
                                {/* Buy */}
                                <Button
                                    Icon={"/../public/assets/pancakeswap.png"}
                                    Name={"Buy on PancakeSwap"}
                                    Link={"https://pancakeswap.finance/"}
                                />
                            </div>
                            <div>
                                {/* Chart */}
                                <Button
                                    Icon={"/../public/assets/poocoin.png"}
                                    Name={"Poocoin Chart"}
                                    Link={"https://poocoin.app/"}
                                />
                            </div>
                        </div>
                        {/*<RewardsModal />*/}
                    </div>
                </div>
            </div>

            {/* About */}
            <div id="about" className="h-60"></div>
            {/** h-60 = height of header */}
            {/*<AboutPage />*/}

            {/* Tokenomics */}
            <div id="tokenomics" className="h-60"></div>
            {/** h-60 = height of header */}
            <TokenomicsPage />

            {/* Disclaimer */}
            <div id="disclaimer" className="h-60"></div>
            {/** h-60 = height of header */}
            <div
                className="flex space-x-10 justify-center
                            sm:space-x-0
                            md:space-x-0
                            lg:space-x-0
                            xl:space-x-0
                            
                            sm:flex-col 
                            md:flex-col
                            lg:flex-col
                            xl:flex-col
                            
                            sm:space-y-5
                            md:space-y-5
                            lg:space-y-5
                            xl:space-y-5"
                data-aos="zoom-in"
            >
                <p className="text-yellow-900 p-3 text-xs font-bold">
                    Disclaimer: The information provided shall not in any way
                    constitute a recommendation as to whether you should invest
                    in any product discussed. Strawberry (SBERRY) accepts no
                    liability for any loss occasioned to any person acting or
                    refraining from action as a result of any material provided
                    or published
                </p>
            </div>
        </div>
    );
}

export default Body;
