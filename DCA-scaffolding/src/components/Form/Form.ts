import { dispatch } from "../../store";
import { saveComida } from "../../store/action";



 const userInput ={
    name:"",
    ingredientes: "",
    recetas: "",
    
 }
 
 class Comida extends HTMLElement{


    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }


    connectedCallback() {
        this.render()
    }


    render() {
        const lName = this.ownerDocument.createElement("label")
        lName.textContent ="Name";
        const name = this.ownerDocument.createElement('input');
        name.addEventListener("change",(s: any)=>{
            console.log (s.target.value);
            userInput.name = s.target.value;
        })
    
        const lIngredientes = this.ownerDocument.createElement("label")
        lIngredientes.textContent ="Ingrediente";
        const ingredientes = this.ownerDocument.createElement('input');
       ingredientes.addEventListener("change",(s: any)=>{
            console.log (s.target.value);
            userInput.ingredientes = s.target.value;
        })
        const lRecetas = this.ownerDocument.createElement("label")
        lRecetas.textContent ="Recetas";
        const recetas = this.ownerDocument.createElement('input');
        recetas.addEventListener("change",(s: any)=>{
            console.log (s.target.value);
            userInput.recetas = s.target.value;
        })
        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Publicar"
        btn.addEventListener("click",async () => {
            console.log(userInput)
            dispatch( await saveComida(userInput))
        });




        this.shadowRoot?.appendChild(lName);
        this.shadowRoot?.appendChild(name);
        this.shadowRoot?.appendChild(lIngredientes);
        this.shadowRoot?.appendChild(ingredientes);
        this.shadowRoot?.appendChild(lRecetas);
        this.shadowRoot?.appendChild(recetas);
        this.shadowRoot?.appendChild(btn);
    }
}


customElements.define('app-comida', Comida)


export default Comida;
