export interface Produto {

    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    imagem: string;
}

export interface ProdutoCarrinho extends Produto{
    quantidade: number;
}

export const produtos: Produto [] = [
    { id: 1, nome: "Cadeira gamer DF", preco: 1500, quantidade: 10, imagem: "./assets/cadeira-gamer.jpg"},
    { id: 2, nome: "Mouse gamer DF", preco: 300, quantidade: 10, imagem: "./assets/mouse-1.jpg"},
    { id: 3, nome: "Mouse gamer SD", preco: 350, quantidade: 10, imagem: "./assets/mouse-2.jpg"},
    { id: 4, nome: "Mouse gamer PA", preco: 300, quantidade: 10, imagem: "./assets/mouse-3.jpg"},
    { id: 5, nome: "Teclado gamer XP", preco: 400, quantidade: 10, imagem: "./assets/teclado-2.jpg"}, 
    { id: 6, nome: "Combo gamer XP", preco: 600, quantidade: 10, imagem: "./assets/Combo-gamer.jpg"},
    { id: 7, nome: "Fones de ouvido", preco: 200, quantidade: 10, imagem: "./assets/fones-1.jpg"}, 
    { id: 8, nome: "Fones de ouvido", preco: 300, quantidade: 10, imagem: "./assets/fones-2.jpg"} 
    

]