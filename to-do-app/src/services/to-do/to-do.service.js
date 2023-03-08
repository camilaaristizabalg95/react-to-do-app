import { toDoApiClient } from '@http-clients/exports.module';

class toDoService {
  static getToDoList(){
    toDoApiClient.get('/to-do.json').then(data => console.log(data))
  }

  static addToDoToList() {
    toDoApiClient.post('/to-do.json', { body: JSON.stringify({ td3: {title: 'TD3'} }) }).then(data => console.log(data))
  }

  static removeToDoFromList(){
    toDoApiClient.delete('/to-do/-NQ27Dl647mmZmws9fbn.json'). then(data => console.log(data))
  }

  static getToDoById(){
    toDoApiClient.get('/to-do/td1.json').then(data => console.log(data))
  }

  static updateToDo(){
    toDoApiClient.put('/to-do/td1.json',{body: JSON.stringify({title:'I did it!'})})
  }
}

export default toDoService;