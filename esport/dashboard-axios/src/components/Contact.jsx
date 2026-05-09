function Contact() {
  return (
    <section className="container my-5 text-white">
      <h2>Contact Us</h2>

      <form>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Nama"
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
        />

        <textarea
          className="form-control mb-3"
          placeholder="Pesan"
        ></textarea>

        <button className="btn btn-purple">
          Kirim Pesan
        </button>
      </form>
    </section>
  );
}

export default Contact;