function Partner() {
  const partners = ["INDIHOME", "ROG", "Logitech", "Redbull"];

  return (
    <section className="container my-5 text-white">
      <h2>Our Partners</h2>

      <div className="row">
        {partners.map((item,index)=>(
          <div className="col-md-3" key={index}>
            <div className="card p-4 text-center">
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partner;