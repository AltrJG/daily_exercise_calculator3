import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';

interface AuthFormProps {
  isLogin?: boolean;
  onSubmit: (username: string, password: string) => Promise<void>;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin = true, onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isLogin && password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      await onSubmit(username, password);
      navigate('/');
    } catch (err) {
      setError('Error al ' + (isLogin ? 'iniciar sesión' : 'registrarse'));
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="neon-container p-8">
          <div className="flex items-center gap-2 mb-6">
            {isLogin ? (
              <LogIn className="w-6 h-6 text-[var(--neon-cyan)]" />
            ) : (
              <UserPlus className="w-6 h-6 text-[var(--neon-pink)]" />
            )}
            <h2 className="text-2xl font-bold text-white">
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </h2>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/50 border border-red-500 rounded text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--neon-cyan)] mb-1">
                Nombre de Usuario
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="neon-input w-full rounded-lg focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--neon-cyan)] mb-1">
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="neon-input w-full rounded-lg focus:outline-none"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-[var(--neon-cyan)] mb-1">
                  Confirmar Contraseña
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="neon-input w-full rounded-lg focus:outline-none"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full neon-button text-white py-2 px-4 rounded-lg"
            >
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;