import heroImage from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16">

                {/* Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">

                    <div className="w-full max-w-xl">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            Build Your Ideal
                        </h1>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-orange-400 to-blue-800 bg-clip-text text-transparent">
                            Development Stack
                        </h1>

                        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
                            Explore frontend, backend, database and tooling options,
                            compare them side by side and put together the stack
                            that fits your next project.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full sm:w-auto">
                        <button className="btn bg-gradient-to-r from-orange-400 to-red-600 text-white border-0 w-full sm:w-auto">
                            Explore Technologies
                        </button>

                        <button className="btn w-full sm:w-auto">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={heroImage}
                        alt="Banner stack"
                        className="w-full max-w-md lg:max-w-xl h-auto"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
