
import imgglobal from "./globalpage.jpg"
import imggirle from"./girleimg.jpeg"
import imgboy from "./boyimg.jpg"

const Global = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 col mb-5">
          <div
            className="card h-100 position-relative"
            style={{ objectFit: "cover", height: "290px" ,width:"350px" }}
          >
            <div className="card-body">
              <img
                className="card-img-top"
                style={{ objectFit: "cover" }}
                src={imgglobal}
                alt=""
              />
              <h5 className="card-title">Global conference</h5>
              <div className="card-text">
                He moonlights difficult engrossed it,sportsmen.Interested has
              </div>
              <div className="card-global">
                all Devonshire difficult gay assistance joy.
              </div>
              <div
                className="photos-and-circle-cont"
                style={{ marginTop: 5, marginLeft: 10 }}
              >
                <div className="circled-photos">
                  <div className="each-circle-photo">
                    <img
                      className="hh"
                      alt="avatar1"
                      src={imggirle}
                    />
                  </div>
                  <div className="each-circle-photo">
                    <img
                      className="hh"
                      alt="avatar1"
                      src={imgboy}
                    />
                  </div>
                  <div className="one-circle">
                    <span
                      className="att-number"
                      style={{ fontSize: 10, color: "white" }}
                    >
                      +34
                    </span>
                  </div>
                  <div className="attending-text">
                    <p>are attending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Global; 