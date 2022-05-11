import { Injectable } from '@angular/core';
import { getDatabase, onValue, ref, get } from 'firebase/database';
import { Router } from '@angular/router';
import { ProviderId } from 'firebase/auth';

@Injectable()
export class VoosDisponiveisService {

  constructor(
    private router: Router
  ) { }

  public async getVoosDisponiveis(): Promise<any> {
    const db = getDatabase();
    let voos: any[] = [];

    const snapshot = await get(ref(db, '/voos-disponiveis'))

      snapshot.forEach((childSnapshot: any) => {
        let voo = childSnapshot.val();

        console.log(voo);
        voo.key = childSnapshot.key;
        voos.push(voo);
      });

      // console.log(voos[0][0]);
    //console.log(voos[0]);
    return (voos);
  }

}

// const snapshot = await get(ref(db, '/users/' + id))
// user = snapshot.val();



