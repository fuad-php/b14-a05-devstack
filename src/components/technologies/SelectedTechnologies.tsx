import { RxCross1 } from "react-icons/rx";
import type { ITechnology } from "../../types/TechnologyTypes";
import type { Dispatch, SetStateAction } from "react";

interface SelectedStackProps {
    selectedStack: ITechnology[];
    setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const SelectedTechnologies = ({
    selectedStack,
    setSelectedStack,
}: SelectedStackProps) => {
    const removeTechnology = (id: number) => {
        setSelectedStack((prev) =>
            prev.filter((stack) => stack.id !== id)
        );
    };

    return (
        <div className="card sticky top-2 w-full border border-base-300 bg-base-100 shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                    Your Stack
                </h2>

                <p className="text-sm text-base-content/70">
                    {selectedStack.length > 0 ? selectedStack.length + "Technologies selected" : "No Technologies selected yet"}                     
                </p>

                <div className="mt-4 space-y-2">
                    {selectedStack.length > 0 ? (
                        selectedStack.map((stack) => (
                            <div
                                key={stack.id}
                                className="flex items-center justify-between rounded-lg bg-base-200 p-3"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        className="h-14 w-14 object-contain"
                                        src={stack.image}
                                        alt={stack.name}
                                    />

                                    <span className="font-semibold">
                                        {stack.name}
                                    </span>
                                </div>

                                <button
                                    onClick={() =>
                                        removeTechnology(stack.id)
                                    }
                                    className="cursor-pointer"
                                    aria-label={`Remove ${stack.name}`}
                                >
                                    <RxCross1 />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center rounded-lg bg-base-200 p-4">
                            <p className="text-sm text-base-content/60">
                                Your Stack is empty
                            </p>
                        </div>
                    )}

                    {selectedStack.length >= 2 && (
                        <div className="flex justify-center">
                            <button
                                onClick={() => setSelectedStack([])}
                                className="btn w-full rounded-xl border-2 bg-transparent text-red-600"
                            >
                                Remove All
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectedTechnologies;