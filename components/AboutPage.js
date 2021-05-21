import Card from "./Card";

function AboutPage() {
    return (
        <div
            className="flex max-w-s7xl space-x-10 h-96 w-screen 
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
            <Card
                Content={
                    "Strawberry is ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed egestas purus. Mauris commodo luctus commodo. Nam mole"
                }
            />
            <Card
                Content={
                    "Inspired by ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed egestas purus. Mauris commodo luctus commodo. Nam mole"
                }
            />
            <Card
                Content={
                    "Community Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed egestas purus. Mauris commodo luctus commodo. Nam mole"
                }
            />
            <Card
                Content={
                    "Meme-Based Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed egestas purus. Mauris commodo luctus commodo. Nam mole"
                }
            />
            <Card
                Content={
                    "Trust Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed egestas purus. Mauris commodo luctus commodo. Nam mole"
                }
            />
        </div>
    );
}

export default AboutPage;
