import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Session } from '@supabase/supabase-js';
import {SupabaseService} from './supabase-service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private session: Session | null = null;
  loading = false;


  constructor(
    private supabase: SupabaseService,
    private router: Router
  ) {}

  async init(): Promise<void> {
    const { data } = await this.supabase.supabase.auth.getSession();
    this.session = data.session;

    this.supabase.supabase.auth.onAuthStateChange((_event, session) => {
      this.session = session;

      if (!session) {
        this.router.navigate(['/login']);
      }
    });
  }


  isAuthenticated(): boolean {
    return !!this.session;
  }

  async signInAnonymously() {
    return this.supabase.supabase.auth.signInAnonymously();
  }

  async signInWithOAuth(provider: 'google' | 'github' | 'azure') {
    this.loading = true;
    const redirectTo = 'http://localhost:4200/'; // przekierowanie po logowaniu

    const { data, error } = await this.supabase.supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo }
    });

    if (error) {
      console.error('OAuth login error:', error.message);
      this.loading = false;
      return;
    }

    const { data: sessionData } = await this.supabase.supabase.auth.getSession();
    this.session = sessionData.session;

    this.loading = false;

    if (this.session) {
      this.router.navigate(['/']);
    }
  }

  async logout() {
    await this.supabase.supabase.auth.signOut();
    this.session = null;
    await this.router.navigate(['/login']);
  }
}
