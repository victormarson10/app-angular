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

  controleComponente:boolean = false;

  adicionar(){
    this.quantidade += 1
    console.log(this.quantidade)
    if (this.quantidade >= 0) {
      this.controleComponente = true;
    }
  }

  decrementar(){
    this.quantidade -= 1
    console.log(this.quantidade)
    if (this.quantidade <= 0) {
      this.controleComponente = false;
    } else {
      this.controleComponente = true;
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
function ControleDeComponente() {
  throw new Error('Function not implemented.');
}

