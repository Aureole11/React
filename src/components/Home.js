 import React from "react";
//  import { Jumbotron } from "reactstrap";
 import { Container, Button } from "reactstrap";
import { useEffect } from "react";

 const Home=()=>{
    useEffect(() => {
        document.title = "Home || Learn Coding";
        }, []);
    return (
        <div>
        <Container className="text-center" bg-primary>
            {/* <Jumbotron> */}
                <h1 className="display-3">Learn Coding</h1>
                <p>
                    This code is developed for learning purpose.It's backend is on spring boot and frontend is on react js.
                </p>
                
            {/* </Jumbotron> */}
            <Container>
                <Button color ="primary" outline>
                Start Using
                </Button>
            </Container>
            </Container>
        </div>
    );
 }
 export default Home;