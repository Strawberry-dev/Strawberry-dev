import CheckmarkText from "./CheckmarkText";

function RewardsModal() {
    return (
        <div
            className="flex flex-col items-start text-left border-4 border-yellow-900 rounded-xl bg-yellow-700 text-white p-3 shadow-lg space-y-1 
        
        
    transition-all
    hover:py-5
    hover:shadow-2xl"
        >
            {/* Earn reward when someone sells! */}
            <CheckmarkText Text={"Moon"} />
            {/* Earn reward when someone sells! */}
            <CheckmarkText Text={"Mars"} />
            {/* Earn reward when someone sells! */}
            <CheckmarkText Text={"Pluto"} />
            {/* Earn reward when someone sells! */}
            <CheckmarkText Text={"Galaxy"} />
        </div>
    );
}

export default RewardsModal;
