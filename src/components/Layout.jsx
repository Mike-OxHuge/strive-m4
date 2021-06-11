import Player from "./Player";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";
const Layout = ({ children }) => {
  return (
    <Row style={{ maxWidth: "100%", maxHeight: "100vh" }}>
      <Col xs={2}>
        <aside>
          <Sidebar />
        </aside>
      </Col>
      <Col xs={10}>
        <Container>{children}</Container>
        <footer>
          <Player />
        </footer>
      </Col>
    </Row>
  );
};

export default Layout;
