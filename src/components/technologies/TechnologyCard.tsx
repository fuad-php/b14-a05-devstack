import { IoStar } from "react-icons/io5";
import type { ITechnology } from "../../types/TechnologyTypes";
import type { Dispatch, SetStateAction } from "react";

interface ITechnologyCardProps {
    technology: ITechnology;
    selectedStack: ITechnology[];
    setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
    technology,
    selectedStack,
    setSelectedStack,
}: ITechnologyCardProps) => {

    const isSelected = selectedStack.some(
        (stack) => stack.id === technology.id
    );

    const handleSetSelected = () => {
        // Prevent duplicate technology
        if (isSelected) return;

        setSelectedStack((prev) => [...prev, technology]);
    };

    return (
        <div className="card overflow-hidden bg-base-100 shadow-xl">
            <div className="flex items-center justify-between px-4 pt-4">
                <img
                    className="h-14 w-14 object-contain"
                    src={technology.image}
                    alt={technology.name}
                />

                {technology.genre && (
                    <div className="badge badge-secondary">
                        {technology.genre}
                    </div>
                )}
            </div>

            <div className="card-body p-4">
                <h2 className="card-title text-xl font-bold">
                    {technology.name}
                </h2>

                <p className="text-sm font-medium leading-6 text-base-content/70">
                    {technology.description}
                </p>

                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="btn btn-sm font-semibold">
                        {technology.category}
                    </span>

                    <span className="text-sm font-semibold">
                        {technology.level}
                    </span>

                    <span className="flex items-center gap-1 text-sm font-semibold">
                        <IoStar className="text-yellow-400" />
                        {technology.rating}
                    </span>
                </div>

                <div className="card-actions mt-3">
                    <button
                        onClick={handleSetSelected}
                        disabled={isSelected}
                        className="btn w-full rounded-2xl bg-black text-white hover:bg-gray-800 pointer-events-auto! disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSelected ? "Added" : "Add to stack"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TechnologyCard;