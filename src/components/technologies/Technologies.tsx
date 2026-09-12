import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { ITechnology } from "../../types/TechnologyTypes";
import { RxCross1 } from "react-icons/rx";

interface ItechnologyPprops {
    technologyPlayers : Promise<ITechnology[]>
}

const Technologies = ({technologyPlayers} : ItechnologyPprops) => {
    const technologies = use(technologyPlayers);

    return (
        <div className="min-h-screen bg-base-200 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold sm:text-4xl">
                        Explore the{" "}
                        <span className="text-pink-400">
                            Technologies
                        </span>
                    </h1>

                    <p className="mt-2 font-semibold text-base-content/70">
                        Pick one technology per category to build your ideal
                        stack
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                        {technologies.map(
                            (technology: ITechnology, index: number) => (
                                <div
                                    key={index}
                                    className="card w-full bg-base-100 shadow-sm transition hover:shadow-md"
                                >
                                    <TechnologyCard
                                        technology={technology}
                                    />
                                </div>
                            )
                        )}
                    </div>
                    <div className="lg:col-span-1">
                        <div className="card sticky top-6 w-full border border-base-300 bg-base-100 shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">
                                    Your Stack
                                </h2>
                                <p className="text-sm text-base-content/70">
                                    0 Technology selected
                                </p>
                                <div className="mt-4 space-y-2">
                                    <div className="flex items-center justify-between rounded-lg bg-base-200 p-3">
                                        <div className="flex gap-4 items-center">
                                            <img className="h-14 w-14 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="react" />
                                            <span className="font-semibold">Frontend</span>
                                        </div>
                                        <button className="cursor-pointer" aria-label="Remove frontend technology">
                                            <RxCross1 />
                                        </button>
                                    </div>
                                    <div className="flex justify-center">
                                        <button className="btn bg-transparent w-full rounded-xl border-2 text-red-600">Remove All</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;