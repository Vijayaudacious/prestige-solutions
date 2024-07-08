import { Card, Row, Col, Divider } from "antd";
import "./ProcessFlow.css";
import HeaderTitle from "../HeaderTitle";

const steps = [
  { title: "Understanding Requirement & Specifications", color: "#D8C3A5" },
  { title: "Job Definitions on job portal", color: "#E6AF2E" },
  {
    title:
      "Finding Candidate\nDatabase\nMail Campaign\nAdvertisements\nTele-Campaign",
    color: "#5D737E",
  },
  { title: "Scrutinize Resumes", color: "#A3BFA8" },
  { title: "Client Review of Selected Resumes", color: "#C1A1D3" },
  { title: "Client Follow-up", color: "#D8C3A5" },
  { title: "Interview line-up", color: "#E6AF2E" },
  { title: "Feedback", color: "#5D737E" },
  { title: "Joining of the Candidate", color: "#A3BFA8" },
];

const ProcessFlow = () => {
  return (
    <div className="process-flow" id="processing">
      <HeaderTitle title="Our Processing" />
      <Divider />
      <Row gutter={[20, 20]} justify="center">
        {steps.slice(0, 5).map((step, index) => (
          <Col key={index} className="process-step">
            <Card
              className="process-card"
              style={{ backgroundColor: step.color }}
            >
              <div className="card-content">{step.title}</div>
            </Card>
            {index < 4 && <div className="arrow right-arrow"></div>}
          </Col>
        ))}
      </Row>
      <Divider />
      <Row gutter={[20, 20]} justify="center">
        {steps.slice(5).map((step, index) => (
          <Col key={index} className="process-step">
            <Card
              className="process-card"
              style={{ backgroundColor: step.color }}
            >
              <div className="card-content">{step.title}</div>
            </Card>
            {index < 2 && <div className="arrow right-arrow"></div>}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProcessFlow;
