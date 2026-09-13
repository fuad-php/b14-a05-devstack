import { RxCross1 } from "react-icons/rx";
import type { ITechnology } from "../../types/TechnologyTypes";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

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
        toast.warning('Technology removed from your stack! ')
    };

    const handleRemoveAll = () => {
        setSelectedStack([])
        toast.warning('Removed All items!')
    } 

    return (
        <div className="card w-full border border-base-300 bg-base-100 shadow-sm">
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
                            <div key={stack.id} className="flex items-center justify-between border border-solid border-gray-300 rounded-lg bg-base-200 p-3">
                                <div className="flex items-center gap-2">
                                    <img className="h-14 w-14 object-contain" src={stack.image} alt={stack.name}/>
                                    <div className="flex flex-col gap-2">
                                        <span className="font-bold">{stack.name}</span>
                                        <span className="text-gray-400">{stack.category}</span>
                                    </div>
                                </div>
                                <button onClick={() => removeTechnology(stack.id)} className="cursor-pointer font-bold" aria-label={`Remove ${stack.name}`}><RxCross1 /></button>
                            </div>
                        ))
                    ) : (
                        <div className="flex items-center justify-center rounded-lg bg-base-200 p-4">
                            <p className="text-sm text-center text-base-content/60">
                                Your Stack is empty
                            </p>
                        </div>
                    )}

                    {selectedStack.length >= 1 && (
                        <div className="flex justify-center">
                            <button onClick={handleRemoveAll} className="btn w-full rounded-xl border-2 bg-transparent text-red-600">Remove All</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectedTechnologies;