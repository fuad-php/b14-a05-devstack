import { IoStar } from "react-icons/io5";
import type { ITechnology } from "../../types/TechnologyTypes";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface ITechnologyCardProps {
    technology: ITechnology;
    selectedStack: ITechnology[];
    setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
    badgeClass:string;
}

const TechnologyCard = ({
    technology,
    selectedStack,
    setSelectedStack,
    badgeClass
}: ITechnologyCardProps) => {

    const isSelected = selectedStack.some(
        (stack) => stack.id === technology.id
    );

    const handleSetSelected = () => {
        if (isSelected) return;
        toast.success('Technology added to your stack!')

        setSelectedStack((prev) => [...prev, technology]);
    };

    return (
        <div className={`card overflow-hidden bg-base-100 shadow-xl transition-all duration-200 border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-pink-300 ${isSelected ? "border border-pink-400" : ""} `}>
            <div className="flex items-center justify-between px-4 pt-4">
                <img className="h-14 w-14 object-contain" src={technology.icon} alt={technology.name} />
                <div className={`badge ${badgeClass} badge-soft font-bold p-4`}>
                    {technology.badge}
                </div>
            </div>
            <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold">{technology.name} </h2>
                <p className="text-sm font-medium leading-6 text-base-content/70">
                    {technology.description}
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="btn btn-sm font-semibold">
                        {technology.category}
                    </span>
                    <span className="text-sm font-semibold">
                        {technology.difficulty}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-semibold">
                        <IoStar className="text-yellow-400" />
                        {technology.rating}
                    </span>
                </div>
                <div className="card-actions mt-3">
                    <button onClick={handleSetSelected} disabled={isSelected} className="btn w-full rounded-2xl bg-black text-white hover:bg-gray-800 pointer-events-auto! disabled:opacity-50 disabled:cursor-not-allowed" >
                        {isSelected ? "Added" : "Add to stack"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;