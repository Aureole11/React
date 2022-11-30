import axios from "axios";
import React from "react";
import base_url from "../api/bootapi";
import AddCourse from "./AddCourse";
import{
    Card,
    CardBody,
    // CardTitle,
    CardSubtitle,
    CardText,
    // CardButton,
    // CardFooter,
    Button,
    Container,
    // Input
} from "reactstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Course = ({ course, update }) => {
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("course deleted");
                update(id);
            },
            (error)=>{
                toast.error("course not deleted !! Server problem");
            }
        )
    }
    const navigate=useNavigate();

    const updateCourse = (data) => {
        axios.put(`${base_url}/courses`, data).then(
            (response)=>{
                <AddCourse />
                
                
                deleteCourse(course.id);
                navigate('/Add Courses');
                postDataToServer(course);
                // data.put({title:"", description:""});
                // setCourses(id="", title="", description="" );
                toast.success("course updated");
                update(course);
            },
            (error)=>{
                toast.error("course not updated");
            }
        )
    }

    return(
    <Card className="text-center">
        <CardBody>
            <CardSubtitle style={{fontWeight: 'bold'}}>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                <Button color="warning" 
                style={{marginLeft: 3}}
                onClick={()=>{
                    
                    // navigate('/Add Course').then(
                    updateCourse(course);
                }}
                >
                Update
                </Button>
            </Container>
        </CardBody>
    </Card>
    );
};
export default Course;