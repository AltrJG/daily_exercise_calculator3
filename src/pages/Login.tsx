import React from 'react';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  return <AuthForm isLogin onSubmit={signIn} />;
};

export default Login;