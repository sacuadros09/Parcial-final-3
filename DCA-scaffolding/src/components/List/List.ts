import { addObserver, appState } from "../../store";


class List extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }


    connectedCallback() {
        this.render()
    }


    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML="";
        appState.comidas.forEach((c)=> {
        const pContainer = this.ownerDocument.createElement('article');
        const pTitle = this.ownerDocument.createElement('h3');
        pTitle.textContent = c.name;


        const pIngrediente = this.ownerDocument.createElement('h3');
        pIngrediente.textContent = c.ingredientes;

        const pReceta = this.ownerDocument.createElement('h3');
        pReceta.textContent = c.recetas;


        pContainer?.appendChild(pTitle);
        pContainer?.appendChild(pIngrediente);
        pContainer?.appendChild(pReceta);
        this.shadowRoot?.appendChild(pContainer);
     
        })
   
    }
}


customElements.define('app-list', List)
export default List;