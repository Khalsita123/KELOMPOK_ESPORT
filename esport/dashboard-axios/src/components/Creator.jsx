function Creator() {
  const creators = ["Raply", "Cindy", "Aldo"];

  return (
    <section className="container my-5 text-white">
      <h2>Our Creators</h2>

      <div className="row">
        {creators.map((creator,index)=>(
          <div className="col-md-4" key={index}>
            <div className="card p-3 text-center">
              {creator}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Creator;