ng g c components/template/header
ng g c components/template/footer
ng g c components/template/nav
ng g c components/product/product-read
ng g c components/product/product-update
ng g c components/product/product-delete
ng g s components/template/header/header
ng g c views/home
ng g c views/product

material Schematics 
ng generate @angular/material:table components/product/product-read2 (modelo)

g-> generate
c-> components
d -> directiva
s -> service

********************** Aula1
Assuntos do Angular
Componentes		Diretivas
Rotas			Pipes
Observables		Services

Attribute Directives -> Altera a aparência e o comportamento de um elemento,
componente ou outra diretiva.

Structural Directives -> Altera o layout adcionando e removendo elementos da
DOM.

Property Binding
* Componente Angular (HTML)|(TS)

Event Binding
* Componente Angular (HTML)|(TS)

One Way Data Binding
* Componente Angular (HTML)|(TS) -> Value

Two Way Data Binding
* Componente Angular (HTML)|(TS) -> input [(ngModel)] ="Ana"

Aungular Router -> carrega os componentes para Router Outlet
/home -> Comp.Home

/produto -> Comp.Prod

/usuario -> Comp.Usuario

Angular Pipes -> processamento que faz em cima de variaveis
<p> 
	O vencimento é 
	{{ produto.vencimento | date: 'fulldate' | uppercase }} 
</p> 

**********************Aula2
Programação Reativa
Reactivex
import { observable } from "rxjs"

O Padrão Observer
	* orientado a Evento
		Evento (detecta)<-subject <-(registrar)observer (vários)

Entendendo Observables
   * Callbacks=>Promises=>Observables(Reusável, Stream Dados, Operadores)
**********************Aula3
Services -> São classes que tem como principal objetivo organizar e 
compartilhar métodos e dados entre componentes.

ng g s services/product

Injectable -> Uma unica classe

Injeção de Dependencia -> É um padrão na qual a classe recebe as
dependencias de uma fonte externa ao inves de criar por conta propria.

SEM injecao de Dependencia
Classe Carro => Classe Motor

COM injecao de Dependencia
Classe Carro <= Classe Motor

Angular Framework 
|
Instancia

@Injectable
ProductService	ProductCreateComponent

Services sao singletons dentro do escopo de um injector:
	* ModuleInjector-> @NgModule, @Injectable
	* ElementInjector -> @Directive, @Component
