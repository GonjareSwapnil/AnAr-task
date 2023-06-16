import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  taskCompleted: any;
  taskList:any;

  constructor(private service:CommonService){

  }
  
  ngOnInit(){
    this.getTaskList();
  }

  // To get task list from API
  getTaskList(){
    this.service.getTaskList('todos').subscribe((res)=>{
      this.taskList = res;
      console.log(res)
   },
   error=>{
     console.log(error);
   })
  }
}
