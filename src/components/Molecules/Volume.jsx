import Card from "react-bootstrap/Card";
import { ChartRight } from "../Atoms/ChartRight/ChartRight";

function VolumeSection() {
  return (
    <Card>
      <Card.Header as="h5" className="bg-dark text-light">
        Volume
      </Card.Header>
      <Card.Body className="bg-">
        <ChartRight title="Existing Gas" />
      </Card.Body>
    </Card>
  );
}

export default VolumeSection;
