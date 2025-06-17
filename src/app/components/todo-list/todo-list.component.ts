import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  tasks: any = {
    input: "",
    completed: true,
    star: false
  };

  component = {
    placeholder: "Write your next task here...",
    searchfield: false,
    checkbox: true,
    maxnum: 3,
    favlist: true,
    values: [
      { value: "sdasdsa" },
      { value: "dfaeew" },
      { value: "sdfsdfasdf" },
      { value: "sdfsdfassadasddf" },
    ]
  }

  list: any[] = [];
  searchText: any = "";
  index = 0;

  ngOnInit(): void {
    if (this.component.values.length !== 0){
      for (let input of this.component.values)
      this.list.push({ value: input.value, completed: true, star: false });
    }
    
  }

  addTask(todoForm: NgForm) {
    if (todoForm.value.input && this.index < this.component.maxnum) {
      this.index += 1;
      this.list.push({ value: todoForm.value.input, completed: true, star: false });
      this.tasks.input = ""
    }
    else {
      this.tasks.input = ""
      alert("List Limit Exceeded");
    }
    console.log(this.index);
    // if (todoForm.value.input) {
    //   this.index += 1;
    // }
    // if (this.index > this.component.maxnum) {
    //   this.list.push({ value: todoForm.value.input, completed: true, star: false });
    //   this.tasks.input = ""
    // }
  }

  checkTask(index: number) {
    this.list[index].completed = !this.list[index].completed;
    console.log(this.list);
    this.list.sort((a, b) => b.completed - a.completed);
  }

  starTask(index: number) {
    this.list[index].star = !this.list[index].star;
    console.log(this.list);
    this.list.sort((a, b) => b.star - a.star);
    this.list.filter((tasks) => {
      console.log(tasks)
    })
  }

  deleteTask(index: number) {
    this.list.splice(index, 1);
  }

  // searchList() {
  //   const filterList = this.list.filter(({ value }) => {
  //     return value?.toLowerCase().includes(this.searchText.toLowerCase())
  //   });

  //   this.list = filterList;
  // }
}
