import Image from "next/image";

function HeaderIcon({ Icon, Link, Size }) {
    return (
        <div className="transition-all hover:px-2">
            <a
                className="cursor-pointer
                sm:m-0.5
                md:m-0.5
                lg:m-1
                xl:m-2
                m-4

                transition-all filter grayscale hover:filter grayscale"
                href={Link}
            >
                <Image src={Icon} width={Size} height={Size} layout="fixed" />
            </a>
        </div>
    );
}

export default HeaderIcon;
