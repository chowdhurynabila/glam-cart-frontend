import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <BeatLoader
        color="#fd9a06"
        loading={true}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
