import LandingCard from "./LandingCard";

function Landing({ items }) {
  return (
    <>
      <div className="homeContainer">
        {items.map((item) => (
          <LandingCard key={item.id} item={item} /> // Ensure you return the component
        ))}
      </div>
    </>
  );
}

export default Landing;
