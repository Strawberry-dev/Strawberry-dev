import Image from "next/image";

function Button({ Icon, Name, Link }) {
    var headerIconSize = 50;

    return (
        <div>
            <a
                href={Link}
                className="flex justify-center items-center cursor-pointer rounded-full bg-yellow-400 space-x-5 h-20 shadow-lg w-44

                border-4 border-solid border-yellow-700

                
                sm:px-24
                md:px-24
                lg:px-24
                xl:px-28
                px-32

                transition-all 
                hover:shadow-2xl
                hover:bg-yellow-500
                hover:tracking-wider"
            >
                <div className="flex">
                    <Image
                        src={Icon}
                        width={headerIconSize}
                        height={headerIconSize}
                        layout="fixed"
                    />
                </div>

                <p
                    className="font-bold text-yellow-900
                    sm:text-xs
                    md:text-xs
                    lg:text-xs
                    xl:text-sm
                    text-base"
                >
                    {Name}
                </p>
            </a>
        </div>
    );
}

export default Button;
