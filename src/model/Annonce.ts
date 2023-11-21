import {Ville} from "@/model/Ville";

export class Annonce {
    constructor(
        public id: number,
        public titre: string,
        public ville: Ville,
        public codePostal: number,
        public prix: number,
        public description: string,
        public favori: boolean,
        public image: string
    ) {
    }
}