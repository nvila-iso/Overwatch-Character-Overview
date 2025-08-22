import "./characters.css";

const CharactersPage = () => {
  return (
    <>
      <main>
        <div className="container">
          <img
            className="profile-image"
            src="https://www.overbuff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsigma.f5fc6bfe.png&w=3840&q=100"
          />
          <div className="profile-details">
            <h2>Character Name</h2>
            <p>Character Role</p>
            <button>Details</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default CharactersPage;
