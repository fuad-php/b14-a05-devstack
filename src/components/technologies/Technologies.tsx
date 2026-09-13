import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { ITechnology } from "../../types/TechnologyTypes";
import SelectedTechnologies from "./SelectedTechnologies";

interface ItechnologyPprops {
    technologyStacks : Promise<ITechnology[]>
}

const Technologies = ({technologyStacks} : ItechnologyPprops) => {
    const technologies = use(technologyStacks);
    const [selectedStack, setSelectedStack] = useState<ITechnology[]>([])
    return (
        <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold sm:text-4xl">Explore the <span className="brand-gradient bg-clip-text text-transparent">Technologies</span></h1>
                    <p className="mt-2 mb-4 font-semibold text-base-content/70">Pick one technology per category to build your ideal stack</p>
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                        {technologies.map(
                            (technology: ITechnology, index: number) => (
                                <div key={index} className="card w-full bg-base-100 shadow-sm transition hover:shadow-md">
                                    <TechnologyCard technology={technology} selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
                                </div>
                            )
                        )}
                    </div>
                    <div className="lg:col-span-1">
                        <SelectedTechnologies selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;