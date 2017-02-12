/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos', () => {
    it('Phải trả về mảng trống theo mặc định', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('Phải trả về tất cả nhắc nhở', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Nhắc nhở 1', complete: false});
      let todo2 = new Todo({title: 'Nhắc nhở 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#save(todo)', () => {
    it('Tự động gán ID tăng dần', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Nhắc nhở 1', complete: false});
      let todo2 = new Todo({title: 'Nhắc nhở 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));
  });
  
  describe('#deleteTodoById(id)', () => {
    it('Xóa nhắc nhở với ID tương ứng', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Nhắc nhở 1', complete: false});
      let todo2 = new Todo({title: 'Nhắc nhở 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('Không xóa nhắc nhở nếu không tồn tại', inject([TodoDataService], (service: TodoDataService) => {
      let todo1 = new Todo({title: 'Nhắc nhở 1', complete: false});
      let todo2 = new Todo({title: 'Nhắc nhở 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));
  });

  describe('#updateTodoById(id, values)', () => {
    it('Sửa nhắc nhở theo ID', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({title: 'Nhắc nhở 1', complete: false});
      service.addTodo(todo);
      let updateTodo = service.updateTodoById(1, {title: 'Nhắc nhở mới'});
      expect(updateTodo.title).toEqual('Nhắc nhở mới');
    }));

    it('Trả về null nếu nhắc nhở không tồn tại', inject([TodoDataService], (service: TodoDataService) => {
      let todo = new Todo({title: 'Nhắc nhở 1', complete: false});
      service.addTodo(todo);
      let updateTodo = service.updateTodoById(2, {title: 'Nhắc nhở mới'});
      expect(updateTodo).toEqual(null);
    }));
  });

  describe('#toggleTodoComplete(todo)', () => {
    it('Đảo trạng thái nhắc nhở', inject([TodoDataService], (service: TodoDataService){
      let todo = new Todo({title: 'Nhắc nhở 1', complete: false});
      service.addTodo(todo);
      let toggleTodo = service.toggleTodoComplete(todo);
      expect(toggleTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(toggleTodo.complete).toEqual(false);
    }));
  });
});
