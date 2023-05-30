import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const comida = this.ownerDocument.createElement('app-comida');
        this.shadowRoot?.appendChild(comida);
    
        const list = this.ownerDocument.createElement('app-list');
        this.shadowRoot?.appendChild(list);
    }
}

customElements.define('app-container', AppContainer)
