import { AngularFireAuth } from '@angular/fire/auth'

import { environment } from '../../environments/environment'
import { AuthMode } from './auth.enum'
import { FirebaseAuthService } from './auth.firebase.service'
import { InMemoryAuthService } from './auth.in-memory.service'
import { AuthService } from './auth.service'

export function authFactory(angularFireAuth: AngularFireAuth): AuthService {
  switch (environment.authMode) {
    case AuthMode.InMemory:
      return new InMemoryAuthService()
    case AuthMode.Firebase:
      return new FirebaseAuthService(angularFireAuth)
    case AuthMode.CustomServer:
      throw new Error('Not yet implemented')
  }
}
