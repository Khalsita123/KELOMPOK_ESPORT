import axios from "axios";
import { useEffect, useState } from "react";

function Match() {
  const [matches,setMatches] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res)=>{
        setMatches(res.data);
        setLoading(false);
      });
  }, []);

  if(loading){
    return <h1 className="text-center text-white">Loading...</h1>
  }

  return (
    <section className="container my-5 text-white">
      <h2>Upcoming Match</h2>

      <div className="row">
        {matches.map((match)=>(
          <div className="col-md-4 mb-4" key={match.id}>
            <div className="card">
              <img src={match.url} className="card-img-top"/>
              <div className="card-body">
                <h5>{match.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Match;