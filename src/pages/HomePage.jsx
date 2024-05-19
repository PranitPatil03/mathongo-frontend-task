import Notes from "../components/Notes";
import VideoPlayer from "../components/VideoPlayer";

const HomePage = () => {
  return (
    <>
    <div className="w-full h-screen">
      <VideoPlayer></VideoPlayer>
      <Notes></Notes>
    </div>
    </>
  )
};

export default HomePage;
