import PetButtons from "./buttons";
import Card from "./items";
import pets from "./data";


const Peters = pets.map((item) => {
  return <Card key={item.id} name={item.name} photo={item.image} />;
});
function Application() {
  return (
    <>
      <main>
        <div className="card">
          <h2>Welcome to PetLand!</h2>
          <em>Find your dream pet</em>
        </div>
        {Peters}
          <PetButtons name="Adopt" />
      </main>
    </>
  );
}

export default Application;
