import { useState } from "react";
import Home from "../components/landing/Home";
import Upcomming from "../components/Upcomming/Upcomming";
import { upcome, latest, recommended } from "../dummyData";
import Trending from "../components/trending/Trending";

function HomePage() {
  const [upcoming] = useState(upcome);
  const [fresh] = useState(latest);
  const [recmd] = useState(recommended);

  return (
    <>
      <Home />
      <Upcomming items={upcoming} title="Upcoming Movies" />
      <Upcomming items={fresh} title="Latest Movies" />
      <Trending />
      <Upcomming items={recmd} title="Recommended Movies" />
    </>
  );
}

export default HomePage;
