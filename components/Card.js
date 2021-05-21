function Card({ Content }) {
    return (
        <div
            className="flex justify-center border-4 border-yellow-900 rounded-xl bg-yellow-700 text-white shadow-lg font-bold
               
                        transition-all
                        
                        hover:shadow-2xl 
                        hover:text-yellow-200"
        >
            <p
                className="p-2  
            transition-all 
            hover:py-3"
            >
                {Content}
            </p>
        </div>
    );
}

export default Card;
