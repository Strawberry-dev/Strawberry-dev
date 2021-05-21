import Image from "next/image";

function CoinIcon({ Icon, Link, Size }) {
    return (
        <div className="flex justify-center mt-16">
            {/** The Coin */}
            <div className="transition-all animate-bounce h-10">
                <a href={Link}>
                    <Image
                        src={Icon}
                        width={Size}
                        height={Size}
                        layout="fixed"
                    />
                </a>
            </div>
        </div>
    );
}

export default CoinIcon;
