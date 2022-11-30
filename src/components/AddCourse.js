import React, { Fragment } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const AddCourse=()=>{
        useEffect(() => {
            document.title = "Add Courses";
            }, []);

              const [course, setCourse]= useState({});

              //form handler function
              const handleForm=(e)=>{
                console.log(course);
                postDataToServer(course);
                e.preventdefault();
              }

              //creating data to post data on server
              const postDataToServer=(data)=>{
                axios.post(`${base_url}/courses`, data).then(
                    (response)=>{
                        console.log(response);
                        console.log("success");
                        toast.success("course added successfully");
                        setCourse({id: "", title: "", description: ""});
                    },
                    (error)=>{
                        console.log(error);
                        console.log("error");
                        toast.error("Error ! Something went wrong");
                    }
                )
              }

    return(
        <Fragment>
        <h1 className="text-center" style={{marginBottom: 3}}>Fill Course Detail:</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input 
                    type="text" 
                    placeholder="Enter course id" 
                    name="userId" 
                    id="userId"
                    onChange={(e) => {
                        setCourse({...course, id: e.target.value});
                    }}
                    />
                    
                </FormGroup>
                
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input 
                    type="text" 
                    placeholder="Enter course title" 
                    id="title"
                    onChange={(e) => {
                        setCourse({...course, title: e.target.value});
                    }}
                    />
                </FormGroup>
                
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input 
                    type="textarea" 
                    placeholder="Enter the course description" 
                    id="description"
                    style={{height:100}}
                    onChange={(e) => {
                        setCourse({...course, description: e.target.value});
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit"
                     color="success">
                     Add Course
                     </Button>
                    <Button
                    type="reset" 
                    onClick={()=>{
                        setCourse({id: "", title: "", description: ""});
                    }}
                    color="warning" 
                    style={{marginLeft:5}}
                    >
                    Clear
                    </Button>
                </Container>
            </Form>
        </Fragment>
    );
}
export default AddCourse;