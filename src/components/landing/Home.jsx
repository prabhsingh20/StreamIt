import { useState } from "react";
import { homeData } from "../../dummyData";
import Landing from "./Landing";
import "./home.css";

function Home() {
  const [items, setItems] = useState(homeData);

  return (
    <>
      <section className="home">
        <Landing items={items} />
      </section>
      <div className="margin"></div>
    </>
  );
}

export default Home;
