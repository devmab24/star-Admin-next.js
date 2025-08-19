
// components/Dashboard/TopPerformer.jsx
export default function TopPerformer() {
  const performers = [
    { name: "Brandon Washington", id: "162543", image: "/images/faces/face1.jpg" },
    { name: "Wayne Murphy", id: "162543", image: "/images/faces/face2.jpg" },
    { name: "Katherine Butler", id: "162543", image: "/images/faces/face3.jpg" },
    { name: "Matthew Bailey", id: "162543", image: "/images/faces/face4.jpg" },
    { name: "Rafell John", location: "Alaska, USA", image: "/images/faces/face5.jpg" },
  ];

  return (
    <div className="row flex-grow">
      <div className="col-12 grid-margin stretch-card">
        <div className="card card-rounded">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h4 className="card-title card-title-dash">Top Performer</h4>
                  </div>
                </div>
                <div className="mt-3">
                  {performers.map((performer, index) => (
                    <div 
                      key={index} 
                      className={`wrapper d-flex align-items-center justify-content-between py-2 ${
                        index === performers.length - 1 ? 'pt-2' : 'border-bottom'
                      }`}
                    >
                      <div className="d-flex">
                        <img
                          className="img-sm rounded-10"
                          src={performer.image}
                          alt="profile"
                        />
                        <div className="wrapper ms-3">
                          <p className="ms-1 mb-1 fw-bold">{performer.name}</p>
                          <small className="text-muted mb-0">
                            {performer.id || performer.location}
                          </small>
                        </div>
                      </div>
                      <div className="text-muted text-small">1h ago</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
