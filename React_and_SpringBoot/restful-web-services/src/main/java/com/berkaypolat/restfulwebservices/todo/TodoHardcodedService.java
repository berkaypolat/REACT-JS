package com.berkaypolat.restfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {
	
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "berkayp", "Learn to Dance", new Date(), false));
		todos.add(new Todo(++idCounter, "berkayp", "Learn about Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "berkayp", "Learn to Spring Boot", new Date(), false));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
