function HeaderButton({ Name, Link }) {
    return (
        <div>
            <a
                href={Link}
                className="flex items-center cursor-pointer rounded-sm h-10 
            sm:w-24
            md:w-28
            lg:w-32
            xl:w-36
            w-40

            transition-all 
            hover:shadow-inner
            hover:bg-yellow-300 
            hover:tracking-widest"
            >
                <p
                    className="text-center mx-auto font-semibold
                sm:text-xs
                md:text-sm
                lg:text-base
                xl:text-lg
                text-xl"
                >
                    {Name}
                </p>
            </a>
        </div>
    );
}

export default HeaderButton;
