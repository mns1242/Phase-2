import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
quizzes:Quiz[]=[];
currentQuiz=0;
answerSelected=false;

correctAnswer=0;
incorrectAnswer=0;
result=false;

  constructor(private quizService:QuizService) { }

  ngOnInit(){
    this.quizzes=this.quizService.getQuizzes();
  }

  onAnswer(option:boolean){

    this.answerSelected=true;

    setTimeout(()=>{
      this.currentQuiz++;
      this.answerSelected=false;

    },1000);


    if(option){
      this.correctAnswer++;
    }else{
      this.incorrectAnswer++;
    }

    
  }
  showResult(){
    this.result=true;
  }

}
