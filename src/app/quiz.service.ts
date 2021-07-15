import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes :Quiz[]=[
    {
      question:'What\'s Your Department.',
      answer:[
        {option: 'IT',correct:true},
        {option:'CS',correct:true},
        {option:'IS',correct:true}
      ]
    },
    {
      question:'What\'s Your GPA',
      answer:[
        {option: 'More than 4.5 ',correct:true},
        {option:'3.5 to 4',correct:true},
        {option:'3 to 3.5',correct:true}
      ]
    },
    {
      question:'Are You Coder\'s ?.',
      answer:[
        {option: 'Yes',correct:true},
        {option:'NO',correct:false}
      ]
    },
    {
      question:'Are You familiar with Git And Github ?.',
      answer:[
        {option: 'Yes',correct:true},
        {option:'No',correct:false}
      ]
    },
    {
      question:'Do you have Experience with Front-end language ?.',
      answer:[
        {option: 'Yes',correct:true},
        {option:'No',correct:false}
      ]
      }
    
  ]

  constructor() { }
  getQuizzes(){
  return this.quizzes;
  }
}
