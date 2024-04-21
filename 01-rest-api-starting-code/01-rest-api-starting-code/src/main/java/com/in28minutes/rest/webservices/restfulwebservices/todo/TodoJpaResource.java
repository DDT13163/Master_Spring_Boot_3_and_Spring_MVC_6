//package com.in28minutes.rest.webservices.restfulwebservices.todo;
//
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//public class TodoJpaResource {
//
//    private TodoRepository todoRepository;
//
//    private TodoService todoService;
//
//    public TodoJpaResource(TodoRepository todoRepository, TodoService todoService) {
//        this.todoRepository = todoRepository;
//        this.todoService = todoService;
//    }
//
//    @GetMapping("/users/{username}/todos")
//    public List<Todo> retrieveTodos(@PathVariable String username) {
//
//        return todoRepository.findByUsername(username);
//    }
//
//    @GetMapping("/users/{username}/todos/{id}")
//    public Todo retrieveTodo(@PathVariable String username, @PathVariable int id) {
//
//        return todoRepository.findById(id).get();
//    }
//
//    @DeleteMapping("/users/{username}/todos/{id}")
//    public ResponseEntity<Void> deleteTodo(@PathVariable int id) {
//        todoService.deleteById(id);
//        return ResponseEntity.noContent().build();
//    }
//
//    @PutMapping("/users/{username}/todos/{id}")
//    public Todo updateTodo(@RequestBody Todo todo) {
//        //todoService.updateTodo(todo);
//        todoRepository.save(todo);
//        return todo;
//    }
//
//    @PostMapping("/users/{username}/todos")
//    public Todo createTodo(@PathVariable String username, @RequestBody Todo todo) {
//        todo.setUsername(username);
//        todo.setId(null);
////        Todo createTodo = todoService.addTodo(username, todo.getDescription(),
////                todo.getTargetDate(), todo.isDone());
//        return todoRepository.save(todo);
//    }
//}
