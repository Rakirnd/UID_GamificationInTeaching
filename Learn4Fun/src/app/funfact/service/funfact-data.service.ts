import {Injectable} from '@angular/core';
import {FunFact, Comment} from '../funfact.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FunfactDataService {

  funFacts = [];
  messageForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      message: ['', Validators.required]
    });

    this.funFacts = [
      new FunFact(
        this.messageForm,
        'Intel Processors',
        'over 1 billion transistors',
        'There are close to 1 billion transistors inside a 2nd Generation Intel Core processor. If a car were to have 1 billion parts - compared to the 30.000 they currently have - it would take the most productive car manufacturer 114 years to assemble this car. If a processor were a country and its transistor count was a country\'s population, a 2nd Generation Intel Core processor would be the third most populated country in the world (995 million+) just behind China and India.',
        ['../../assets/images/funfact/intel-cpu1.jpg', '../../assets/images/funfact/intel-cpu2.jpg'],
        ['CPU', 'intel', 'technology', 'processor'],
        'https://www.youtube.com/embed/d9SWNLZvA8g',
        [new Comment('Jon', 'Interesting! Would like to know more about this.', [new Comment('Julia', 'You can check CS108 lectures for further information.', [])])]
      ),

      new FunFact(
        this.messageForm,
        'AI - the lifesaver',
        'ML Saves Lives! Computer-ided Detection (CAD) software can spot 52% of breast cancer cells, a year before patients are diagnosed.',
        'Computer-aided detection (CADe) and diagnosis (CAD) has been a rapidly growing, active area of research in medical imaging. Machine learning (ML) plays an essential role in CAD, because objects such as lesions and organs may not be represented accurately by a simple equation; thus, medical pattern recognition essentially requires learning from examples. One of the most popular uses of ML is the classification of objects such as lesion candidates into certain classes (e.g., abnormal or normal, and lesions or non-lesions) based on input features (e.g., contrast and area) obtained from segmented lesion candidates.',
        ['../../assets/images/funfact/ai1.jpeg', '../../assets/images/funfact/ai2.png'],
        ['AI', 'machine-learning', 'lifesaver', 'CAD'],
        'https://www.youtube.com/embed/Nj2YSLPn6OY',
        [new Comment('Adam', 'Nice post. Thanks for sharing!', []), new Comment('George', 'Amazing. I learnt something new today.', [])]
      )
    ];
  }

  getFunFacts() {
    return this.funFacts;
  }

  addFunFact(funFact: FunFact) {
    this.funFacts.push(funFact);
  }
}
