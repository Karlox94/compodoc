import { Component } from '@angular/core';
/**
 * Componente principal
 *
 * @export
 * @class AppComponent
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    /** Titulo */
    title = 'compodoc';
    /** Descripción */
    private  description = 'descripion';

    /**
     * Creates an instance of AppComponent.
     * @param {*} variable Variable de prueba
     * @memberof AppComponent
     */
    constructor(private variable) {
        console.log(variable);
    }

    /**
     * {@link /additional-documentation/pagina-extra.html} [Internal Link]{@link /additional-documentation/pagina-extra.html}
     *
     * @memberof AppComponent
     */
    externalLinks() {
        console.log('comment');
        
    }

    /**
     * {@link https://www.google.com.co/}  [Google Link]{@link https://www.google.com.co}
     *
     * @memberof AppComponent
     */
    internalLinks() {
        console.log('comment');
        
    }

    /**
     * Primera linea
     * 
     * Segunda linea
     */
    multiline() {
        console.log('multiline');
        
    }
}
