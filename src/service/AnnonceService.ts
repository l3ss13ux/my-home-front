import {Annonce} from "@/model/Annonce";
import axios from 'axios'

export function getAnnonces(): Promise<Annonce[]> {
    return axios.get<Annonce[]>('http://localhost:8080/annonces').then(response => response.data);
}

export function getAnnonce(identifiant: number): Promise<Annonce> {
    return axios.get<Annonce>('http://localhost:8080/annonces/' + identifiant).then(response => response.data);
}
