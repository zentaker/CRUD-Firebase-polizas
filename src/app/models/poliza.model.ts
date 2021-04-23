export class PolizaModel {
    id: string;
    cliente: string;
    producto: string;
    bien: string;
    fecha: string;
    estado: boolean;

    constructor() {
        this.estado = true;
    }
}