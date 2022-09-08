import FootprintCard from "../components/FootprintCard";

const Footprint = () => {
  return (
    <div className="flex flex-grow flex-col justify-center items-center gap-6">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-center">
        What is your 
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          {" "}plastic footprint
        </span>?
      </h1>

      {/* Footprint cards container */}
      <div className=" flex gap-14 justify-center items-center">
        <FootprintCard
          title={"🐕 Small consumption"}
          description={
            <ul>
              <li>I rarely eat out and often cook my own meals</li>
              <li>I always use a re-usable bag</li>
              <li>I always use a re-usable bottle for drinks</li>
            </ul>
          }
          buttonText={"Select"}
        />
        <FootprintCard
          title={"🐎 Medium consumption"}
          description={
            <ul>
              <li>I sometimes cook at home</li>
              <li>
                I own a re-usable bag but sometimes forget to bring it with me
              </li>
              <li>
                I use a re-usable bottle for water/coffee/tea, but rely on
                plastic cups/straws when buying drinks at cafes
              </li>
            </ul>
          }
          buttonText={"Select"}
        />
        <FootprintCard
          title={"🐘 Large consumption"}
          description={
            <ul>
              <li>I often purchase convenience foods almost every day</li>
              <li>I don't own a re-usable bag. I purchase plastic bags</li>
              <li>I don't own a re-usable bottle</li>
            </ul>
          }
          buttonText={"Select"}
        />
      </div>
    </div>
  );
};

export default Footprint;
