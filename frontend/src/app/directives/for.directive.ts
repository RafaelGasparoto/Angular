import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective implements OnInit {
  //appFor nome do seletor da diretiva, 
  //(appFor)In -> In é a palavra chave na tag,
  //depois de In ele vai pegar um elemento [array], 'string', number, etc...
  //por exemplo <tag *appFor="let n In [1, 2, 3]">{{ n }}</tag>
  
  @Input("appForIn")
  numbers!: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
    ) {}

  ngOnInit(): void {
    for(let number of this.numbers){
      this.container.createEmbeddedView(
        this.template, { $implicit : number }
      );
    }
  }

}
