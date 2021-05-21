import Card from "./Card";

function TokenomicsPage() {
    return (
        <div
            className="flex space-x-10 
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
            <Card Content={"Total Supply: 1000000000000000"} />
            <Card Content={"Market Cap: $0"} />
            <Card Content={"Current Price: $0"} />
            {/* Holders 
                    Fees
                    Fee Distribution Secret! No one cares about the fees
                    Tokens Burned 
                    Liquidity Not Included */}
        </div>
    );
}

export default TokenomicsPage;
