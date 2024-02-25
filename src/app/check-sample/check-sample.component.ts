import { 
  AfterContentChecked
  , AfterContentInit
  , AfterViewChecked
  , AfterViewInit
  , Component
  , DoCheck
  , OnDestroy
  , OnInit
 } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent 
implements OnInit, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade:number = 0;

  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    if (this.quantidade <= 0){
      //console.error("Numero negativo!") 
      throw new Error('Numero negativo!')
    } else {
    this.quantidade -= 1
    }
  }

  constructor() { }

  //checked -> content -> view

  //quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  //depois da inicialização da view
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  //Após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  //Após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    throw new Error('Fui destruido');
  }

}
