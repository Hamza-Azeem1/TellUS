import video from "../assets/bg-video.mp4";

const Banner = () => {
    return (
        <section style={{ position: "relative", minHeight: "100vh" }}>
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src={video} type="video/mp4" />
            </video>

            <div className="flex flex-col justify-center items-center min-h-screen relative z-10">
                <div className="text-white text-center">
                    <h1 className="text-3xl lg:text-5xl font-bold">
                        If opportunity does not knock, build a door
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;