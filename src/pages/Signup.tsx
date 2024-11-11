import React from 'react';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../contexts/AuthContext';

const Signup: React.FC = () => {
  const { signUp } = useAuth();
  return <AuthForm isLogin={false} onSubmit={signUp} />;
};

export default Signup;