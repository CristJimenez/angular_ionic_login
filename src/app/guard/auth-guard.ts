import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Storage } from '../shared/services/storage/storage';

export const authGuard: CanActivateFn = (route, state) => {
  const storageSrv = inject(Storage);
  const router = inject(Router);
  const auth = storageSrv.get<{ uuid: string }>('AUTH');
  if(!auth) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
