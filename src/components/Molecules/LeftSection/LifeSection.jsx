import CarouselSection from "../Carousel/CarouselComponent";
import "./LifeSection.css";
import { HeartPulseFill, ListCheck, Cash } from "react-bootstrap-icons";

const LifeSection = () => {
  return (
    <div>
      {/* carousel start */}
      <div className="life-section">
        <div className="p-2">
          <CarouselSection />
        </div>
      </div>
      {/* carousel end */}
      {/* ongoing start */}
      <div className="life-section">
        <div className="d-flex mt-2 p-2 justify-content-between align-items-center">
          <div>
            <ListCheck size={36} />
          </div>
          <div>
            <div>
              <p className="life-section__title-info">Ongoing Project</p>
            </div>
            <div>
              <p className="life-section__number-info">3</p>
            </div>
          </div>
        </div>
      </div>
      {/* ongoing end */}
      {/* Safeman start  */}
      <div className="life-section">
        <div className="d-flex mt-2 p-2 justify-content-between align-items-center">
          <div>
            <HeartPulseFill size={36} />
          </div>
          <div>
            <div>
              <p className="life-section__title-info">Total Safeman hours</p>
            </div>
            <div>
              <p className="life-section__number-info">1.250</p>
            </div>
          </div>
        </div>
      </div>
      {/* safeman end */}
      {/* invest start */}
      <div className="life-section">
        <div className="d-flex mt-2 p-2 justify-content-between align-items-center">
          <div>
            <Cash size={36} />
          </div>
          <div>
            <div>
              <p className="life-section__title-info">Est. Investment Cost</p>
            </div>
            <div>
              <p className="life-section__number-info">
                55 USD / inch.m <span>(March '22)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* invest end */}

      {/* maintence start */}
      <div className="mt-2">
        <div className="maintenance__title">
          <p>Maintenance Highlight</p>
        </div>
        <div className="life-section pt-1 pb-2">
          <div className="maintenance__card">
            <div className="maintenance__card-company">
              <p>Company A</p>
            </div>
            <div className="maintenance__card-latest">
              <p>Latest Activity :</p>
              <p>Overhaul engine in "area"</p>
            </div>
            <div className="maintenance__card-status">
              <p>Latest Activity :</p>
              <p>Overhaul engine in "area"</p>
            </div>
          </div>
          <div className="maintenance__card">
            <div className="maintenance__card-company">
              <p>Company B</p>
            </div>
            <div className="maintenance__card-latest">
              <p>Latest Activity :</p>
              <p>Overhaul engine in "area"</p>
            </div>
            <div className="maintenance__card-status">
              <p>Latest Activity :</p>
              <p>Overhaul engine in "area"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSection;
