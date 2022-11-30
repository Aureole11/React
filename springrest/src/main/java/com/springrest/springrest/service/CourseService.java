package com.springrest.springrest.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.springrest.springrest.model.Course;
import com.springrest.springrest.repository.CourseRepository;

@Service

public class CourseService {
	
	@Autowired
	private CourseRepository repo;

	public CourseService() {
		
	}
	
	public List<Course> getCourses() {
		return repo.findAll();
	}

	public Course getCourseById(long courseId) {
		return repo.findById(courseId).get();
	}

	public Course addCourse(Course course) {
		return repo.save(course);
		
	}

	public Course updateCourse(Course course) {
		return repo.save(course);
		
	}

	public void deleteCourse(long courseId) {
		repo.deleteById(courseId);
		
	}

}
