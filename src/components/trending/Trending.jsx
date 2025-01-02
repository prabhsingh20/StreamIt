import { useState } from "react";
import { trending } from "../../dummyData";
import Landing from "../landing/Landing";
import "./trending.css";

function Trending() {
  const [trend, setTrend] = useState(trending);

  return (
    <>
      <section className="trending">
        <Landing items={trend} />
      </section>
    </>
  );
}

export default Trending;
