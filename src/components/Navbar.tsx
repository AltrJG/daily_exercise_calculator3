import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, LogIn, LogOut, UserPlus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { currentUser, signOut } = useAuth();

  return (
    <nav className="bg-[var(--dark-gray)] border-b border-[var(--neon-blue)] px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white hover:text-[var(--neon-cyan)] transition-colors">
          <Dumbbell className="w-6 h-6" />
          <span className="text-xl font-bold">CalorieTracker</span>
        </Link>

        <div className="flex items-center gap-4">
          {currentUser ? (
            <>
              <span className="text-[var(--neon-cyan)]">
                {currentUser.email?.split('@')[0]}
              </span>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 text-white hover:text-[var(--neon-pink)] transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Salir</span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="flex items-center gap-2 text-white hover:text-[var(--neon-cyan)] transition-colors"
              >
                <LogIn className="w-5 h-5" />
                <span>Iniciar Sesión</span>
              </Link>
              <Link
                to="/signup"
                className="flex items-center gap-2 text-white hover:text-[var(--neon-pink)] transition-colors"
              >
                <UserPlus className="w-5 h-5" />
                <span>Registrarse</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;