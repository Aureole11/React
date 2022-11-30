// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import { Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
// import Course from './components/Course';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header';
import Menus from './components/Menus ';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddCourse from './components/AddCourse';
import Allcourse from './components/Allcourses';
function App() {                          
  // const btnHandle = () => { //toast("this is my fist message");
  // toast.error("done", { 
  //   position: "top-center"
  // });
 
  // const notify = () => toast("Wow so easy!");
  return (
  <div>
  <Router>
  <ToastContainer />

<Container>
<Header />
  <Row>
    <Col md={4}>
      <Menus />
    </Col>
    <Col md={8}>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/add-course" element={<AddCourse />} exact />
      <Route path="/view-courses" element={<Allcourse />} exact />
      {/* <Route path="/" component={Home} exact />
      <Route path="/" component={Home} exact /> */}
      </Routes>
    </Col>
  </Row>
</Container>
  </Router>


  {/* <Home />

  <Allcourse />
  <AddCourse />
  <hr />
  <AddCourse /> */}

  {/* <ToastContainer> */}
    {/* <h1>This is Bootstrap Component</h1>
    <Button color="primary" outline onClick={btnHandle}>
    First React Button
    </Button> */}
    {/* <Button onClick={notify}>
    Notify!
    </Button> */}
  </div>
  );
}

export default App;
