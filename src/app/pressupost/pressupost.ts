export class Pressupost {
    nomPersona: string;
    cognomPersona: string;
    situacioLaboral: string;
    id_persona: string;
    demanda: string;

    public getNom(){
    	return this.nomPersona;
	}
	public setNom(nom:string){
		this.nomPersona=nom;
	}

	public setCognom(cognom:string){
		this.cognomPersona=cognom;
	}

	public setSituacioLaboral(situacioLaboral:string){
		this.situacioLaboral=situacioLaboral;
	}

	public setIdPersona(id:string){
		this.id_persona=id;
	}

	public setDemanda(demanda:string){
		this.demanda=demanda;
	}
}

