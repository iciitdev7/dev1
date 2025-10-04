'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Brain, Mail, Lock, User, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../../components/LanguageToggle';

export default function AuthPage() {
  const router = useRouter();
  const { signUp, signIn, resetPassword } = useAuth();
  const { t } = useLanguage();
  
  const [mode, setMode] = useState('signin'); // signin, signup, reset
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear messages when user starts typing
    if (message) setMessage(null);
  };

  const validateForm = () => {
    if (!formData.email || !formData.email.includes('@')) {
      setMessage({ type: 'error', text: t('auth.invalidEmail') });
      return false;
    }

    if (mode !== 'reset' && (!formData.password || formData.password.length < 6)) {
      setMessage({ type: 'error', text: t('auth.passwordTooShort') });
      return false;
    }

    if (mode === 'signup' && formData.password !== formData.confirmPassword) {
      setMessage({ type: 'error', text: t('auth.passwordsDoNotMatch') });
      return false;
    }

    if (mode === 'signup' && (!formData.name || formData.name.trim().length < 2)) {
      setMessage({ type: 'error', text: t('auth.nameRequired') });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage(null);

    try {
      if (mode === 'signup') {
        const { data, error } = await signUp(formData.email, formData.password);
        
        if (error) {
          setMessage({ type: 'error', text: getErrorMessage(error.message) });
        } else {
          setMessage({ 
            type: 'success', 
            text: t('auth.signUpSuccess')
          });
          // Redirect to dashboard after successful signup
          setTimeout(() => router.push('/dashboard'), 2000);
        }
      } else if (mode === 'signin') {
        const { data, error } = await signIn(formData.email, formData.password);
        
        if (error) {
          setMessage({ type: 'error', text: getErrorMessage(error.message) });
        } else {
          setMessage({ 
            type: 'success', 
            text: t('auth.signInSuccess')
          });
          // Redirect to dashboard after successful signin
          setTimeout(() => router.push('/dashboard'), 1000);
        }
      } else if (mode === 'reset') {
        const { data, error } = await resetPassword(formData.email);
        
        if (error) {
          setMessage({ type: 'error', text: getErrorMessage(error.message) });
        } else {
          setMessage({ 
            type: 'success', 
            text: t('auth.resetEmailSent')
          });
        }
      }
    } catch (error) {
      setMessage({ type: 'error', text: t('auth.unexpectedError') });
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorMessage) => {
    // Map common Supabase errors to translated messages
    if (errorMessage.includes('Invalid login credentials')) {
      return t('auth.invalidCredentials');
    }
    if (errorMessage.includes('User already registered')) {
      return t('auth.userAlreadyExists');
    }
    if (errorMessage.includes('Email not confirmed')) {
      return t('auth.emailNotConfirmed');
    }
    return t('auth.unexpectedError');
  };

  const resetForm = () => {
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      name: ''
    });
    setMessage(null);
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-[#6495ED]/10">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-[#6495ED]" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#6495ED] to-blue-600 bg-clip-text text-transparent">
                {t('appName')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => router.push('/')}>
                {t('home')}
              </Button>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6495ED] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">
                {mode === 'signup' ? t('auth.createAccount') : 
                 mode === 'signin' ? t('auth.signInToAccount') : 
                 t('auth.resetPassword')}
              </CardTitle>
              <CardDescription>
                {mode === 'signup' ? t('auth.signUpDescription') : 
                 mode === 'signin' ? t('auth.signInDescription') : 
                 t('auth.resetPasswordDescription')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field for signup */}
                {mode === 'signup' && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span>{t('auth.fullName')}</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t('auth.enterFullName')}
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={loading}
                      className="pl-10"
                    />
                  </div>
                )}

                {/* Email field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span>{t('auth.email')}</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('auth.enterEmail')}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={loading}
                    className="pl-10"
                    autoComplete="email"
                  />
                </div>

                {/* Password field */}
                {mode !== 'reset' && (
                  <div className="space-y-2">
                    <Label htmlFor="password" className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-gray-500" />
                      <span>{t('auth.password')}</span>
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder={t('auth.enterPassword')}
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      disabled={loading}
                      className="pl-10"
                      autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                    />
                  </div>
                )}

                {/* Confirm Password field for signup */}
                {mode === 'signup' && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-gray-500" />
                      <span>{t('auth.confirmPassword')}</span>
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder={t('auth.confirmPasswordPlaceholder')}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      disabled={loading}
                      className="pl-10"
                      autoComplete="new-password"
                    />
                  </div>
                )}

                {/* Message Display */}
                {message && (
                  <Alert className={`${
                    message.type === 'success' 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-red-200 bg-red-50'
                  }`}>
                    {message.type === 'success' ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    )}
                    <AlertDescription className={
                      message.type === 'success' ? 'text-green-800' : 'text-red-800'
                    }>
                      {message.text}
                    </AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#6495ED] to-blue-600 hover:from-blue-600 hover:to-[#6495ED] text-white"
                  size="lg"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t('auth.processing')}</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>
                        {mode === 'signup' ? t('auth.createAccount') : 
                         mode === 'signin' ? t('auth.signIn') : 
                         t('auth.sendResetEmail')}
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}
                </Button>
              </form>

              {/* Mode Switching */}
              <div className="mt-6 text-center space-y-2">
                {mode === 'signin' && (
                  <>
                    <p className="text-sm text-gray-600">
                      {t('auth.noAccount')}{' '}
                      <button
                        type="button"
                        onClick={() => switchMode('signup')}
                        className="text-[#6495ED] hover:underline font-medium"
                      >
                        {t('auth.signUp')}
                      </button>
                    </p>
                    <p className="text-sm text-gray-600">
                      <button
                        type="button"
                        onClick={() => switchMode('reset')}
                        className="text-[#6495ED] hover:underline font-medium"
                      >
                        {t('auth.forgotPassword')}
                      </button>
                    </p>
                  </>
                )}

                {mode === 'signup' && (
                  <p className="text-sm text-gray-600">
                    {t('auth.alreadyHaveAccount')}{' '}
                    <button
                      type="button"
                      onClick={() => switchMode('signin')}
                      className="text-[#6495ED] hover:underline font-medium"
                    >
                      {t('auth.signIn')}
                    </button>
                  </p>
                )}

                {mode === 'reset' && (
                  <p className="text-sm text-gray-600">
                    {t('auth.rememberPassword')}{' '}
                    <button
                      type="button"
                      onClick={() => switchMode('signin')}
                      className="text-[#6495ED] hover:underline font-medium"
                    >
                      {t('auth.backToSignIn')}
                    </button>
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {t('auth.secureAuth')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}