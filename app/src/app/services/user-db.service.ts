import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { Autenticacao } from "./auth.service";
import { Voo } from "../cancelar-voo/voo";

@Injectable()
export class UserDB {

    public errorMessage: string = '';
    public token_id: string = '';

    constructor(
        private router: Router,
        private autenticacao: Autenticacao
    ) { }


    public async cadastroUser(user: User): Promise<any> {
        const auth: Auth = getAuth();
        const db = getDatabase();
        return createUserWithEmailAndPassword(auth, user.email, user.senha)
            .then((resposta: any) => {
                let userDate: any = user
                delete userDate.senha
                set(ref(db, `users/${user.cpf}`), userDate)
                alert("cadastro bem sucessido. faça o login para realizar sua primeira compra")
                console.log(auth.currentUser);
                this.router.navigate(['../']);
                
            })
            .catch((erro: Error) => {
                this.errorMessage = erro.message
                console.log(this.errorMessage)
            });
    }

    public async listarAlunos(): Promise<any> {
        const db = getDatabase();
        return onValue(ref(db, `/users`), (snapshot) => {
            let users: User[] = [];
            snapshot.forEach((childSnapshot: any) => {
                let user = childSnapshot.val();
                console.log(user)
                user.key = childSnapshot.key;
                users.push(user)
            })
            return users;
        });
    }

    public listarVoosComprados(): any {
        const db = getDatabase();
        const auth = getAuth();
        const user = auth.currentUser;
        let voosComprados: Voo[] = []; 
        if (user !== null){
            onValue(ref(db, `/users/btoa{user.email}/voos-comprados`), (snapshot) => {
                
                snapshot.forEach((childSnapshot: any) => {
                    let vooComprado = childSnapshot.val();

                    console.log(vooComprado)
                    console.log(vooComprado)
                    vooComprado.key = childSnapshot.key;
                    voosComprados.push(vooComprado)
                })
                
            });
        return voosComprados;
        }
    }

}