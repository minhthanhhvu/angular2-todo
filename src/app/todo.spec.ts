import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('Phải chấp nhận giá trị trong hàm khởi tạo', () => {
    let todo = new Todo({
      title: 'Xin chao',
      complete: true,
    });
    expect(todo.title).toEqual('Xin chao');
    expect(todo.complete).toEqual(true);
  })
});
