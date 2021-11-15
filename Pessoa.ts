class pessoa {
  nome: string;

constructor (n: string) {
         this.nome = n;
        }
}
let milena: pessoa = new pessoa('Milena');
console.log(milena.nome);
milena.nome = 'Fulano de Tal';
console.log(milena.nome);


class Pessoa2 {
  private _nome:string;
  private _cpf:string;

{
constructor (nome:string, cpf: string)
           this_nome = nome;
           this_cpf = cpf;

}
 get nome () {
   return this. _nome;
 }
 set nome(n: string){
   this._nome=n;
 }
