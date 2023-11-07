function PetButtons({name}) {
  return (
    <>
      <div>
        <button>
          <span role="img">😸</span>
          {name}
        </button>
        <button>
          <span role="img">🐕</span>
          {name}
        </button>
      </div>
    </>
  );
}

export default PetButtons;
