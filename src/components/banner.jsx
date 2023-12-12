import ReactPlayer from "react-player";
import video from "../assets/bg-video.mp4";

const Banner = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <ReactPlayer
                url={video}
                playing
                loop
                muted
                width="100%"
                height="100%"
                style={{ position: "absolute", top: 0, left: 0 }}
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h1 className="text-3xl lg:text-5xl font-bold">
                    If opportunity does not knock, build a door
                </h1>
            </div>
        </div>
    );
};

export default Banner;
