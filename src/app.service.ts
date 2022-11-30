import { Injectable } from '@nestjs/common';
export interface Task {
  name: string,
  dueDate: Date,
  owner: string,
  createBy: string
}
@Injectable()
export class AppService {
  getHello(): Task[] {
    const data = [
      {
          name: 'taskName1',
          dueDate: new Date(),
          owner: 'Rodney',
          createBy: 'Rodney'
      },
      {
          name: 'taskName2',
          dueDate: new Date(),
          owner: 'Rodney',
          createBy: 'Rodney'
      },
      {
          name: 'taskName3',
          dueDate: new Date(),
          owner: 'Rodney',
          createBy: 'Rodney'
      },
  ]
    console.log(JSON.stringify(data))
    return data;
  }
}
