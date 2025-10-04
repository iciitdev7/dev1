// Language context for managing translations
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { appStorage } from '../utils/localStorage';

const LanguageContext = createContext();

// English translations
const en = {
  // Navigation and Common
  home: 'Home',
  dashboard: 'Dashboard',
  progress: 'Progress',
  assessment: 'Assessment',
  skills: 'Skills',
  back: 'Back',
  next: 'Next',
  previous: 'Previous',
  complete: 'Complete',
  start: 'Start',
  submit: 'Submit',
  cancel: 'Cancel',
  loading: 'Loading...',
  settings: 'Settings',
  
  // Home Page
  appName: 'SalesMind',
  tagline: 'Mental Wellness for Sales Teams',
  heroTitle: 'Transform Your Sales with Mental Fitness',
  heroDescription: 'Master emotional resilience, build unshakeable confidence, and develop the mental tools to thrive under pressure. Start your personalized journey today.',
  takeAssessment: 'Take Assessment',
  goToDashboard: 'Go to Dashboard',
  viewDemo: 'View Demo',
  everythingYouNeed: 'Everything you need to succeed',
  comprehensiveTools: 'Comprehensive mental wellness tools designed specifically for sales professionals',
  
  // Features
  mentalResilienceTitle: 'Mental Resilience Training',
  mentalResilienceDesc: 'Build emotional strength to bounce back from rejection and maintain peak performance.',
  personalizedSkillTitle: 'Personalized Skill Development',
  personalizedSkillDesc: 'Take a comprehensive assessment and receive tailored training recommendations.',
  progressTrackingTitle: 'Progress Tracking',
  progressTrackingDesc: 'Monitor your improvements with detailed analytics and progress visualization.',
  salesSpecificTitle: 'Sales-Specific Tools',
  salesSpecificDesc: 'Access exercises designed specifically for sales professionals and their unique challenges.',
  
  // Stats
  coreSkills: 'Core Mental Skills',
  interactiveDrills: 'Interactive Drills',
  averageSession: 'Average Session',
  
  // Footer
  footerTagline: 'Empowering sales professionals with mental wellness tools for peak performance.',
  
  // Assessment
  assessmentTitle: 'SalesMind Assessment',
  questionOf: 'Question {current} of {total}',
  progressLabel: 'Progress',
  completeAssessment: 'Complete Assessment',
  
  // Dashboard
  welcomeBack: 'Welcome back, {name}! 👋',
  readyToBoost: 'Ready to boost your sales performance with targeted mental training?',
  overallScore: 'Overall Score',
  drillsCompleted: 'Drills Completed',
  currentStreak: 'Current Streak',
  timeInvested: 'Time Invested',
  consecutiveDays: 'consecutive days',
  thisWeek: 'this week',
  priorityFocusArea: 'Priority Focus Area',
  recommendedBased: 'Based on your assessment, we recommend focusing on this skill first',
  recommended: 'Recommended',
  startTraining: 'Start Training',
  allMentalSkills: 'All Mental Skills',
  skillsAvailable: '{count} skills available',
  exercises: 'exercises',
  recentActivity: 'Recent Activity',
  justCompleted: 'Just completed',
  
  // Skills
  currentProgress: 'Current Progress',
  basedOn: 'Based on:',
  trainingExercises: 'Training Exercises',
  exercisesAvailable: '{count} exercises available',
  startExercise: 'Start Exercise',
  completed: 'Completed',
  minutes: 'minutes',
  
  // Progress
  myProgress: 'My Progress',
  totalCompleted: 'Total Completed',
  allTimeDrills: 'all-time drills',
  weeklyGoal: 'Weekly Goal',
  weeklyActivity: 'Weekly Activity',
  dailyDrillCompletions: 'Your daily drill completions this week',
  skillImprovements: 'Skill Improvements',
  pointIncreases: 'Point increases across skill areas',
  recentActivities: 'Recent Activities',
  latestCompleted: 'Your latest completed exercises',
  
  // Settings
  appSettings: 'App Settings',
  manageDataPreferences: 'Manage your data and preferences',
  languagePreferences: 'Language Preferences',
  customizeExperience: 'Customize your SalesMind experience',
  interfaceLanguage: 'Interface Language',
  choosePreferredLanguage: 'Choose your preferred language for the interface',
  dataManagement: 'Data Management',
  backupRestoreClear: 'Backup, restore, or clear your application data',
  
  // Data Manager
  localStorageStatus: 'Local Storage Status',
  used: 'Used',
  available: 'Available',
  storageUsage: 'Storage Usage',
  assessmentSaved: 'Assessment Saved',
  assessmentNotTaken: 'Assessment Not Taken',
  drillsCompleted: 'Drills Completed',
  skillsTracked: 'Skills Tracked',
  trackedSkills: 'tracked skills',
  assessmentAnswers: 'assessment answers',
  dataLoadedFromStorage: 'Data loaded from storage',
  localStorageNotAvailable: 'Local storage is not available in your browser',
  exportData: 'Export Data',
  downloadBackup: 'Download a backup of all your SalesMind data',
  exportBackup: 'Export Backup',
  backupCreatedSuccessfully: 'Backup file created and downloaded successfully',
  importData: 'Import Data',
  restoreFromBackup: 'Restore your data from a previously exported backup file',
  invalidBackupFormat: 'Invalid backup file format',
  dataImportedSuccessfully: 'Data imported successfully! Reloading...',
  failedToImportData: 'Failed to import data',
  invalidJsonFile: 'Invalid JSON file format',
  clearAllData: 'Clear All Data',
  permanentlyDelete: 'Permanently delete all your SalesMind data from this device',
  clearAllDataConfirm: 'Are you sure you want to clear all data? This action cannot be undone.',
  allDataCleared: 'All data has been cleared successfully',
  currentDataSummary: 'Current Data Summary',
  
  // Skill Names
  emotionalResilience: 'Emotional Resilience to Rejection',
  energyFocus: 'Energy and Focus Management',
  confidenceBuilding: 'Confidence Building',
  stressManagement: 'Stress and Anxiety Management',
  motivation: 'Motivation and Goal Setting',
  communication: 'Communication Skills',
  timeManagement: 'Time Management and Productivity',
  relationshipBuilding: 'Relationship Building',
  adaptability: 'Adaptability and Change Management',
  problemSolving: 'Creative Problem-Solving',
  flexibleThinking: 'Flexible Thinking',
  empathyListening: 'Empathy and Active Listening',
  anxietyManagement: 'Anxiety Management Before Calls',
  handlingObjections: 'Handling Objections',
  goalSettingMotivation: 'Goal Setting and Motivation',
  
  // Skill Descriptions
  emotionalResilienceDesc: 'Build mental toughness to bounce back quickly from rejection and maintain motivation.',
  energyFocusDesc: 'Optimize your mental energy and maintain sharp focus throughout long sales days.',
  confidenceBuildingDesc: 'Develop unshakeable self-confidence and positive self-talk for sales success.',
  stressManagementDesc: 'Learn proven techniques to manage stress and anxiety in high-pressure situations.',
  motivationDesc: 'Set meaningful goals and maintain high motivation levels for sustained performance.',
  communicationDesc: 'Enhance your verbal and non-verbal communication for better client connections.',
  timeManagementDesc: 'Optimize your schedule and increase productivity with proven time management strategies.',
  relationshipBuildingDesc: 'Develop authentic, long-lasting relationships with clients and colleagues.',
  adaptabilityDesc: 'Develop flexibility and resilience to thrive in changing business environments.',
  problemSolvingDesc: 'Enhance your ability to find innovative solutions to complex sales challenges.',
  flexibleThinkingDesc: 'Overcome rigid thinking patterns and avoid being stuck in single scripts.',
  empathyListeningDesc: 'Build trust and enhance discovery-meeting conversions through deep understanding.',
  anxietyManagementDesc: 'Decrease avoidance behavior and encourage early outreach efforts.',
  handlingObjectionsDesc: 'Accelerate transitions to next steps while maintaining objection-handling efficiency.',
  goalSettingMotivationDesc: 'Maintain focus on leading metrics through structured goal setting.',
  
  // Authentication
  auth: {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signOut: 'Sign Out',
    signInWithGoogle: 'Sign in with Google',
    signUpWithGoogle: 'Sign up with Google',
    orContinueWith: 'Or continue with',
    createAccount: 'Create Account',
    signInToAccount: 'Sign in to your account',
    resetPassword: 'Reset Password',
    signUpDescription: 'Create your account to start your mental fitness journey',
    signInDescription: 'Welcome back! Please sign in to your account',
    resetPasswordDescription: 'Enter your email to receive a password reset link',
    fullName: 'Full Name',
    enterFullName: 'Enter your full name',
    email: 'Email',
    enterEmail: 'Enter your email',
    password: 'Password',
    enterPassword: 'Enter your password',
    confirmPassword: 'Confirm Password',
    confirmPasswordPlaceholder: 'Confirm your password',
    processing: 'Processing...',
    noAccount: "Don't have an account?",
    alreadyHaveAccount: 'Already have an account?',
    forgotPassword: 'Forgot your password?',
    rememberPassword: 'Remember your password?',
    backToSignIn: 'Back to sign in',
    secureAuth: 'Your data is encrypted and secure',
    invalidEmail: 'Please enter a valid email address',
    passwordTooShort: 'Password must be at least 6 characters',
    passwordsDoNotMatch: 'Passwords do not match',
    nameRequired: 'Full name is required',
    signUpSuccess: 'Account created successfully! Redirecting...',
    signInSuccess: 'Signed in successfully! Redirecting...',
    resetEmailSent: 'Password reset email sent! Check your inbox.',
    invalidCredentials: 'Invalid email or password',
    userAlreadyExists: 'An account with this email already exists',
    emailNotConfirmed: 'Please check your email and confirm your account',
    unexpectedError: 'An unexpected error occurred. Please try again.',
    authRequired: 'Authentication Required',
    authRequiredDescription: 'Please sign in to access this page',
    setNewPassword: 'Set New Password',
    setNewPasswordDescription: 'Enter your new password below',
    newPassword: 'New Password',
    enterNewPassword: 'Enter your new password',
    confirmNewPassword: 'Confirm New Password',
    updating: 'Updating...',
    updatePassword: 'Update Password',
    invalidResetLink: 'Invalid or expired reset link',
    passwordUpdateFailed: 'Failed to update password',
    passwordUpdatedSuccess: 'Password updated successfully! Redirecting...',
  },
  
  // Demo Page
  welcomeToDemo: 'Welcome to the Demo',
  experienceHow: 'Experience how SalesMind can transform your sales performance',
  initialAssessment: 'Initial Assessment',
  startWithQuick: 'Start with a quick assessment to identify your strengths and areas for growth',
  personalizedDashboard: 'Personalized Dashboard',
  yourDashboardShows: 'Your dashboard shows progress, recommendations, and daily goals',
  interactiveDrills: 'Interactive Drills',
  practiceWithEngaging: 'Practice with engaging exercises designed by mental health professionals',
  progressTracking: 'Progress Tracking',
  trackYourImprovement: 'Track your improvement over time with detailed analytics',
  readyToStart: 'Ready to Start?',
  signUpNowToBegin: 'Sign up now to begin your personalized mental fitness journey',
  demoTour: 'Demo Tour',
  stepOf: 'Step {current} of {total}',
  sampleAssessmentQuestion: 'Sample Assessment Question',
  rateYourCurrent: 'Rate your current confidence level in sales situations',
  howConfidentAre: 'How confident are you when approaching new prospects?',
  veryConfident: 'Very confident',
  confident: 'Confident',
  neutral: 'Neutral',
  notConfident: 'Not very confident',
  notAtAllConfident: 'Not confident at all',
  thisIsPreview: 'This is a preview - the real assessment has 25 questions',
  skillsInProgress: 'Skills in Progress',
  recommendedSkills: 'Recommended Skills',
  basedOnYourAssessment: 'Based on your assessment results',
  emotionalRegulation: 'Emotional Regulation',
  cognitiveFlexibility: 'Cognitive Flexibility',
  highPriority: 'High Priority',
  mediumPriority: 'Medium Priority',
  abcCardExercise: 'ABC Card Exercise',
  emotionalRegulationDrill: 'Emotional regulation drill',
  scenario: 'Scenario',
  potentialClient: 'A potential client just told you they\'re going with a competitor',
  activatingEvent: 'A - Activating Event',
  lostMajorDeal: 'Lost a major deal to competitor',
  beliefWhatYou: 'B - Belief (What you thought)',
  typeYourAutomatic: 'Type your automatic thoughts here...',
  consequenceEmotional: 'C - Consequence (Emotional response)',
  howDoYouFeel: 'How do you feel and what did you do?',
  tryThisAnd: 'Try this and 30+ other evidence-based exercises',
  skillImprovementOver: 'Skill Improvement Over Time',
  before: 'Before',
  after: 'After',
  mon: 'Mon',
  tue: 'Tue',
  wed: 'Wed',
  thu: 'Thu',
  fri: 'Fri',
  sat: 'Sat',
  sun: 'Sun',
  readyToTransform: 'Ready to Transform Your Sales?',
  joinAndStart: 'Join thousands of sales professionals who are already improving their mental fitness',
  signUpFree: 'Sign Up Free',
  backToHome: 'Back to Home',
  getStarted: 'Get Started',
  
  // Assessment Questions
  assessmentQuestions: {
    emotionalResilience1: 'How quickly do you bounce back after a client rejection?',
    emotionalResilience2: 'When facing repeated "no\'s", how do you feel?',
    emotionalResilience3: 'How do you handle criticism of your sales approach?',
    energyFocus1: 'How often do you feel mentally drained during the workday?',
    energyFocus2: 'How well can you concentrate during important calls?',
    energyFocus3: 'How do you maintain energy throughout long sales days?',
    confidence1: 'How confident do you feel when approaching new prospects?',
    confidence2: 'How do you feel about your sales abilities?',
    stress1: 'How do you handle high-pressure sales situations?',
    stress2: 'How often do you experience sales-related anxiety?',
    motivation1: 'How motivated are you to achieve your sales targets?',
    motivation2: 'How clear are you about your career goals?',
    communication1: 'How comfortable are you with difficult conversations?',
    communication2: 'How well do you listen to customer needs?',
    timeManagement1: 'How well do you prioritize your daily tasks?',
    timeManagement2: 'How often do you meet your deadlines?',
    relationships1: 'How easily do you build rapport with new clients?',
    relationships2: 'How well do you maintain long-term client relationships?',
    adaptability1: 'How well do you adjust to changing market conditions?',
    adaptability2: 'How do you handle unexpected changes in your sales process?',
    problemSolving1: 'How do you approach complex client problems?',
    problemSolving2: 'How confident are you in finding creative solutions?',
    empathy1: 'How well do you understand your clients\' underlying concerns?',
    empathy2: 'How often do you reflect back what clients say?',
    empathy3: 'How comfortable are you with emotional conversations?',
  },
  
  // Assessment Options
  assessmentOptions: {
    emotionalResilience1: ['Immediately', 'Within an hour', 'Next day', 'Days later'],
    emotionalResilience2: ['Motivated to improve', 'Slightly discouraged', 'Very frustrated', 'Want to quit'],
    emotionalResilience3: ['Use it to improve', 'Take it personally but recover', 'Feel defensive', 'Avoid feedback'],
    energyFocus1: ['Rarely', 'Sometimes', 'Often', 'Almost always'],
    energyFocus2: ['Fully focused', 'Mostly focused', 'Sometimes distracted', 'Often distracted'],
    energyFocus3: ['Natural high energy', 'Take strategic breaks', 'Push through fatigue', 'Struggle with fatigue'],
    confidence1: ['Very confident', 'Somewhat confident', 'Nervous but manage', 'Very anxious'],
    confidence2: ['Strong and improving', 'Good with room to grow', 'Adequate but doubting', 'Lack confidence'],
    stress1: ['Thrive under pressure', 'Manage well', 'Get somewhat anxious', 'Feel overwhelmed'],
    stress2: ['Never', 'Rarely', 'Sometimes', 'Frequently'],
    motivation1: ['Extremely motivated', 'Very motivated', 'Somewhat motivated', 'Struggling with motivation'],
    motivation2: ['Very clear path', 'Generally clear', 'Somewhat unclear', 'Very unclear'],
    communication1: ['Very comfortable', 'Mostly comfortable', 'Somewhat uncomfortable', 'Very uncomfortable'],
    communication2: ['Excellent listener', 'Good listener', 'Average listener', 'Need improvement'],
    timeManagement1: ['Very organized', 'Mostly organized', 'Somewhat scattered', 'Very disorganized'],
    timeManagement2: ['Always', 'Usually', 'Sometimes', 'Rarely'],
    relationships1: ['Very easily', 'Fairly easily', 'With some effort', 'With great difficulty'],
    relationships2: ['Excellent', 'Good', 'Fair', 'Poor'],
    adaptability1: ['Very adaptable', 'Mostly adaptable', 'Somewhat rigid', 'Very rigid'],
    adaptability2: ['Embrace change', 'Adapt quickly', 'Need time to adjust', 'Resist change'],
    problemSolving1: ['Systematic approach', 'Intuitive problem-solving', 'Ask for help', 'Feel overwhelmed'],
    problemSolving2: ['Very confident', 'Somewhat confident', 'Not very confident', 'Lack confidence'],
    empathy1: ['Always pick up on emotions', 'Usually understand concerns', 'Sometimes miss cues', 'Often misunderstand needs'],
    empathy2: ['Always paraphrase', 'Often reflect', 'Sometimes summarize', 'Rarely reflect back'],
    empathy3: ['Very comfortable', 'Mostly comfortable', 'Somewhat uncomfortable', 'Very uncomfortable'],
  },
};

// Russian translations
const ru = {
  // Navigation and Common
  home: 'Главная',
  dashboard: 'Панель управления',
  progress: 'Прогресс',
  assessment: 'Оценка',
  skills: 'Навыки',
  back: 'Назад',
  next: 'Далее',
  previous: 'Предыдущий',
  complete: 'Завершить',
  start: 'Начать',
  submit: 'Отправить',
  cancel: 'Отмена',
  loading: 'Загрузка...',
  settings: 'Настройки',
  
  // Home Page
  appName: 'SalesMind',
  tagline: 'Ментальное здоровье для команд продаж',
  heroTitle: 'Трансформируйте свои продажи с помощью ментальной подготовки',
  heroDescription: 'Овладейте эмоциональной устойчивостью, создайте непоколебимую уверенность и развейте ментальные инструменты для успеха в условиях высокого давления. Начните свой персонализированный путь сегодня.',
  takeAssessment: 'Пройти оценку',
  goToDashboard: 'Перейти к панели',
  viewDemo: 'Посмотреть демо',
  everythingYouNeed: 'Всё что вам нужно для успеха',
  comprehensiveTools: 'Комплексные инструменты ментального здоровья, разработанные специально для профессионалов продаж',
  
  // Features
  mentalResilienceTitle: 'Тренировка ментальной устойчивости',
  mentalResilienceDesc: 'Развивайте эмоциональную силу, чтобы быстро восстанавливаться после отказов и поддерживать пиковую производительность.',
  personalizedSkillTitle: 'Персонализированное развитие навыков',
  personalizedSkillDesc: 'Пройдите комплексную оценку и получите индивидуальные рекомендации по обучению.',
  progressTrackingTitle: 'Отслеживание прогресса',
  progressTrackingDesc: 'Отслеживайте свои улучшения с помощью детальной аналитики и визуализации прогресса.',
  salesSpecificTitle: 'Инструменты для продаж',
  salesSpecificDesc: 'Получите доступ к упражнениям, разработанным специально для профессионалов продаж.',
  
  // Stats
  coreSkills: 'Основных ментальных навыков',
  interactiveDrills: 'Интерактивных упражнений',
  averageSession: 'Средняя сессия',
  
  // Footer
  footerTagline: 'Расширяем возможности профессионалов продаж с помощью инструментов ментального здоровья для достижения пиковой производительности.',
  
  // Assessment
  assessmentTitle: 'Оценка SalesMind',
  questionOf: 'Вопрос {current} из {total}',
  progressLabel: 'Прогресс',
  completeAssessment: 'Завершить оценку',
  
  // Dashboard
  welcomeBack: 'С возвращением, {name}! 👋',
  readyToBoost: 'Готовы повысить свою эффективность продаж с помощью целенаправленной ментальной подготовки?',
  overallScore: 'Общий балл',
  drillsCompleted: 'Упражнений выполнено',
  currentStreak: 'Текущая серия',
  timeInvested: 'Время вложено',
  consecutiveDays: 'Дней подряд',
  thisWeek: 'На этой неделе',
  priorityFocusArea: 'Приоритетная область фокуса',
  recommendedBased: 'На основе вашей оценки мы рекомендуем сначала сосредоточиться на этом навыке',
  recommended: 'Рекомендуется',
  startTraining: 'Начать тренировку',
  allMentalSkills: 'Все ментальные навыки',
  skillsAvailable: '{count} навыков доступно',
  exercises: 'упражнений',
  recentActivity: 'Недавняя активность',
  justCompleted: 'Только что завершено',
  
  // Skills
  currentProgress: 'Текущий прогресс',
  basedOn: 'Основано на:',
  trainingExercises: 'Тренировочные упражнения',
  exercisesAvailable: '{count} упражнений доступно',
  startExercise: 'Начать упражнение',
  completed: 'Завершено',
  minutes: 'минут',
  
  // Progress
  myProgress: 'Мой прогресс',
  totalCompleted: 'Всего завершено',
  allTimeDrills: 'Упражнений за всё время',
  weeklyGoal: 'Недельная цель',
  weeklyActivity: 'Недельная активность',
  dailyDrillCompletions: 'Ваши ежедневные завершения упражнений на этой неделе',
  skillImprovements: 'Улучшения навыков',
  pointIncreases: 'Увеличение баллов по областям навыков',
  recentActivities: 'Недавняя активность',
  latestCompleted: 'Ваши последние завершенные упражнения',
  
  // Settings
  appSettings: 'Настройки приложения',
  manageDataPreferences: 'Управляйте своими данными и предпочтениями',
  languagePreferences: 'Языковые предпочтения',
  customizeExperience: 'Настройте свой опыт SalesMind',
  interfaceLanguage: 'Язык интерфейса',
  choosePreferredLanguage: 'Выберите предпочитаемый язык для интерфейса',
  dataManagement: 'Управление данными',
  backupRestoreClear: 'Резервное копирование, восстановление или очистка данных приложения',
  
  // Data Manager
  localStorageStatus: 'Статус локального хранилища',
  used: 'Использовано',
  available: 'Доступно',
  storageUsage: 'Использование хранилища',
  assessmentSaved: 'Оценка сохранена',
  assessmentNotTaken: 'Оценка не пройдена',
  drillsCompleted: 'Упражнений завершено',
  skillsTracked: 'Навыков отслеживается',
  trackedSkills: 'отслеживаемых навыков',
  assessmentAnswers: 'ответов оценки',
  dataLoadedFromStorage: 'Данные загружены из хранилища',
  localStorageNotAvailable: 'Локальное хранилище недоступно в вашем браузере',
  exportData: 'Экспорт данных',
  downloadBackup: 'Скачайте резервную копию всех ваших данных SalesMind',
  exportBackup: 'Экспортировать резервную копию',
  backupCreatedSuccessfully: 'Файл резервной копии создан и скачан успешно',
  importData: 'Импорт данных',
  restoreFromBackup: 'Восстановите свои данные из ранее экспортированного файла резервной копии',
  invalidBackupFormat: 'Неверный формат файла резервной копии',
  dataImportedSuccessfully: 'Данные импортированы успешно! Перезагрузка...',
  failedToImportData: 'Не удалось импортировать данные',
  invalidJsonFile: 'Неверный формат JSON файла',
  clearAllData: 'Очистить все данные',
  permanentlyDelete: 'Навсегда удалить все ваши данные SalesMind с этого устройства',
  clearAllDataConfirm: 'Вы уверены, что хотите очистить все данные? Это действие нельзя отменить.',
  allDataCleared: 'Все данные успешно очищены',
  currentDataSummary: 'Текущая сводка данных',
  
  // Skill Names
  emotionalResilience: 'Эмоциональная устойчивость к отказам',
  energyFocus: 'Управление энергией и фокусом',
  confidenceBuilding: 'Построение уверенности',
  stressManagement: 'Управление стрессом и тревогой',
  motivation: 'Мотивация и постановка целей',
  communication: 'Навыки коммуникации',
  timeManagement: 'Управление временем и продуктивность',
  relationshipBuilding: 'Построение отношений',
  adaptability: 'Адаптивность и управление изменениями',
  problemSolving: 'Творческое решение проблем',
  flexibleThinking: 'Гибкое мышление',
  empathyListening: 'Эмпатия и активное слушание',
  anxietyManagement: 'Управление тревогой перед звонками',
  handlingObjections: 'Обработка возражений',
  goalSettingMotivation: 'Постановка целей и мотивация',
  
  // Skill Descriptions
  emotionalResilienceDesc: 'Развивайте ментальную стойкость, чтобы быстро восстанавливаться после отказов и поддерживать мотивацию.',
  energyFocusDesc: 'Оптимизируйте свою ментальную энергию и поддерживайте острый фокус в течение долгих рабочих дней.',
  confidenceBuildingDesc: 'Развивайте непоколебимую уверенность в себе и позитивный внутренний диалог для успеха в продажах.',
  stressManagementDesc: 'Изучите проверенные техники управления стрессом и тревогой в ситуациях высокого давления.',
  motivationDesc: 'Ставьте значимые цели и поддерживайте высокий уровень мотивации для устойчивой производительности.',
  communicationDesc: 'Улучшите свою вербальную и невербальную коммуникацию для лучших связей с клиентами.',
  timeManagementDesc: 'Оптимизируйте свой график и повысьте продуктивность с помощью проверенных стратегий управления временем.',
  relationshipBuildingDesc: 'Развивайте аутентичные, долгосрочные отношения с клиентами и коллегами.',
  adaptabilityDesc: 'Развивайте гибкость и устойчивость для процветания в изменяющейся бизнес-среде.',
  problemSolvingDesc: 'Улучшите свою способность находить инновационные решения сложных задач продаж.',
  flexibleThinkingDesc: 'Преодолевайте жесткие паттерны мышления и избегайте застревания в одних сценариях.',
  empathyListeningDesc: 'Создавайте доверие и улучшайте конверсию встреч через глубокое понимание.',
  anxietyManagementDesc: 'Уменьшайте избегающее поведение и поощряйте ранние усилия по установлению контактов.',
  handlingObjectionsDesc: 'Ускоряйте переходы к следующим шагам, сохраняя эффективность обработки возражений.',
  goalSettingMotivationDesc: 'Поддерживайте фокус на ведущих метриках через структурированную постановку целей.',
  
  // Authentication
  auth: {
    signIn: 'Войти',
    signUp: 'Регистрация',
    signOut: 'Выйти',
    signInWithGoogle: 'Войти через Google',
    signUpWithGoogle: 'Регистрация через Google',
    orContinueWith: 'Или продолжить с',
    createAccount: 'Создать аккаунт',
    signInToAccount: 'Войти в свой аккаунт',
    resetPassword: 'Сбросить пароль',
    signUpDescription: 'Создайте свой аккаунт, чтобы начать путь ментальной подготовки',
    signInDescription: 'Добро пожаловать! Пожалуйста, войдите в свой аккаунт',
    resetPasswordDescription: 'Введите свой email для получения ссылки сброса пароля',
    fullName: 'Полное имя',
    enterFullName: 'Введите ваше полное имя',
    email: 'Email',
    enterEmail: 'Введите ваш email',
    password: 'Пароль',
    enterPassword: 'Введите ваш пароль',
    confirmPassword: 'Подтвердите пароль',
    confirmPasswordPlaceholder: 'Подтвердите ваш пароль',
    processing: 'Обработка...',
    noAccount: 'Нет аккаунта?',
    alreadyHaveAccount: 'Уже есть аккаунт?',
    forgotPassword: 'Забыли пароль?',
    rememberPassword: 'Вспомнили пароль?',
    backToSignIn: 'Вернуться к входу',
    secureAuth: 'Ваши данные зашифрованы и защищены',
    invalidEmail: 'Пожалуйста, введите действительный email адрес',
    passwordTooShort: 'Пароль должен содержать минимум 6 символов',
    passwordsDoNotMatch: 'Пароли не совпадают',
    nameRequired: 'Полное имя обязательно',
    signUpSuccess: 'Аккаунт создан успешно! Перенаправление...',
    signInSuccess: 'Вход выполнен успешно! Перенаправление...',
    resetEmailSent: 'Email для сброса пароля отправлен! Проверьте свою почту.',
    invalidCredentials: 'Неверный email или пароль',
    userAlreadyExists: 'Аккаунт с этим email уже существует',
    emailNotConfirmed: 'Пожалуйста, проверьте свой email и подтвердите аккаунт',
    unexpectedError: 'Произошла неожиданная ошибка. Пожалуйста, попробуйте снова.',
    authRequired: 'Требуется аутентификация',
    authRequiredDescription: 'Пожалуйста, войдите для доступа к этой странице',
    setNewPassword: 'Установить новый пароль',
    setNewPasswordDescription: 'Введите ваш новый пароль ниже',
    newPassword: 'Новый пароль',
    enterNewPassword: 'Введите ваш новый пароль',
    confirmNewPassword: 'Подтвердите новый пароль',
    updating: 'Обновление...',
    updatePassword: 'Обновить пароль',
    invalidResetLink: 'Неверная или истекшая ссылка сброса',
    passwordUpdateFailed: 'Не удалось обновить пароль',
    passwordUpdatedSuccess: 'Пароль обновлен успешно! Перенаправление...',
  },
  
  // Demo Page
  welcomeToDemo: 'Добро пожаловать в демо',
  experienceHow: 'Узнайте, как SalesMind может трансформировать вашу эффективность продаж',
  initialAssessment: 'Первоначальная оценка',
  startWithQuick: 'Начните с быстрой оценки для выявления ваших сильных сторон и областей роста',
  personalizedDashboard: 'Персонализированная панель',
  yourDashboardShows: 'Ваша панель показывает прогресс, рекомендации и ежедневные цели',
  interactiveDrills: 'Интерактивные упражнения',
  practiceWithEngaging: 'Практикуйтесь с увлекательными упражнениями, разработанными специалистами по ментальному здоровью',
  progressTracking: 'Отслеживание прогресса',
  trackYourImprovement: 'Отслеживайте свои улучшения с течением времени с помощью детальной аналитики',
  readyToStart: 'Готовы начать?',
  signUpNowToBegin: 'Зарегистрируйтесь сейчас, чтобы начать свой персонализированный путь ментальной подготовки',
  demoTour: 'Демо-тур',
  stepOf: 'Шаг {current} из {total}',
  sampleAssessmentQuestion: 'Пример вопроса оценки',
  rateYourCurrent: 'Оцените ваш текущий уровень уверенности в ситуациях продаж',
  howConfidentAre: 'Насколько уверенно вы себя чувствуете при обращении к новым потенциальным клиентам?',
  veryConfident: 'Очень уверенно',
  confident: 'Уверенно',
  neutral: 'Нейтрально',
  notConfident: 'Не очень уверенно',
  notAtAllConfident: 'Совсем не уверенно',
  thisIsPreview: 'Это предварительный просмотр - настоящая оценка содержит 25 вопросов',
  skillsInProgress: 'Навыки в процессе',
  recommendedSkills: 'Рекомендуемые навыки',
  basedOnYourAssessment: 'На основе результатов вашей оценки',
  emotionalRegulation: 'Эмоциональная регуляция',
  cognitiveFlexibility: 'Когнитивная гибкость',
  highPriority: 'Высокий приоритет',
  mediumPriority: 'Средний приоритет',
  abcCardExercise: 'Упражнение ABC-карта',
  emotionalRegulationDrill: 'Упражнение эмоциональной регуляции',
  scenario: 'Сценарий',
  potentialClient: 'Потенциальный клиент только что сказал вам, что выбирает конкурента',
  activatingEvent: 'A - Активирующее событие',
  lostMajorDeal: 'Потерял крупную сделку в пользу конкурента',
  beliefWhatYou: 'B - Убеждение (Что вы подумали)',
  typeYourAutomatic: 'Введите ваши автоматические мысли здесь...',
  consequenceEmotional: 'C - Последствие (Эмоциональная реакция)',
  howDoYouFeel: 'Как вы себя чувствуете и что вы сделали?',
  tryThisAnd: 'Попробуйте это и 30+ других научно обоснованных упражнений',
  skillImprovementOver: 'Улучшение навыков со временем',
  before: 'До',
  after: 'После',
  mon: 'Пн',
  tue: 'Вт',
  wed: 'Ср',
  thu: 'Чт',
  fri: 'Пт',
  sat: 'Сб',
  sun: 'Вс',
  readyToTransform: 'Готовы трансформировать свои продажи?',
  joinAndStart: 'Присоединяйтесь к тысячам профессионалов продаж, которые уже улучшают свою ментальную подготовку',
  signUpFree: 'Зарегистрироваться бесплатно',
  backToHome: 'Вернуться на главную',
  getStarted: 'Начать',
  
  // Assessment Questions
  assessmentQuestions: {
    emotionalResilience1: 'Как быстро вы восстанавливаетесь после отказа клиента?',
    emotionalResilience2: 'Когда сталкиваетесь с повторными "нет", как вы себя чувствуете?',
    emotionalResilience3: 'Как вы справляетесь с критикой вашего подхода к продажам?',
    energyFocus1: 'Как часто вы чувствуете ментальное истощение в течение рабочего дня?',
    energyFocus2: 'Насколько хорошо вы можете концентрироваться во время важных звонков?',
    energyFocus3: 'Как вы поддерживаете энергию в течение долгих рабочих дней?',
    confidence1: 'Насколько уверенно вы себя чувствуете при обращении к новым потенциальным клиентам?',
    confidence2: 'Как вы оцениваете свои способности в продажах?',
    stress1: 'Как вы справляетесь с ситуациями высокого давления в продажах?',
    stress2: 'Как часто вы испытываете тревогу, связанную с продажами?',
    motivation1: 'Насколько вы мотивированы достигать своих целей продаж?',
    motivation2: 'Насколько четко вы представляете свои карьерные цели?',
    communication1: 'Насколько комфортно вам ведение сложных разговоров?',
    communication2: 'Насколько хорошо вы слушаете потребности клиентов?',
    timeManagement1: 'Насколько хорошо вы расставляете приоритеты в ежедневных задачах?',
    timeManagement2: 'Как часто вы соблюдаете свои дедлайны?',
    relationships1: 'Насколько легко вы устанавливаете контакт с новыми клиентами?',
    relationships2: 'Насколько хорошо вы поддерживаете долгосрочные отношения с клиентами?',
    adaptability1: 'Насколько хорошо вы адаптируетесь к изменяющимся рыночным условиям?',
    adaptability2: 'Как вы справляетесь с неожиданными изменениями в процессе продаж?',
    problemSolving1: 'Как вы подходите к сложным проблемам клиентов?',
    problemSolving2: 'Насколько вы уверены в поиске креативных решений?',
    empathy1: 'Насколько хорошо вы понимаете скрытые заботы ваших клиентов?',
    empathy2: 'Как часто вы отражаете то, что говорят клиенты?',
    empathy3: 'Насколько комфортно вам ведение эмоциональных разговоров?',
  },
  
  // Assessment Options
  assessmentOptions: {
    emotionalResilience1: ['Немедленно', 'В течение часа', 'На следующий день', 'Через несколько дней'],
    emotionalResilience2: ['Мотивирован улучшаться', 'Слегка обескуражен', 'Очень расстроен', 'Хочу бросить'],
    emotionalResilience3: ['Использую для улучшения', 'Принимаю близко к сердцу, но восстанавливаюсь', 'Чувствую защитную реакцию', 'Избегаю обратной связи'],
    energyFocus1: ['Редко', 'Иногда', 'Часто', 'Почти всегда'],
    energyFocus2: ['Полностью сосредоточен', 'В основном сосредоточен', 'Иногда отвлекаюсь', 'Часто отвлекаюсь'],
    energyFocus3: ['Естественно высокая энергия', 'Делаю стратегические перерывы', 'Преодолеваю усталость', 'Борюсь с усталостью'],
    confidence1: ['Очень уверенно', 'Довольно уверенно', 'Нервничаю, но справляюсь', 'Очень тревожно'],
    confidence2: ['Сильные и улучшающиеся', 'Хорошие с возможностью роста', 'Адекватные, но сомневаюсь', 'Не хватает уверенности'],
    stress1: ['Процветаю под давлением', 'Хорошо справляюсь', 'Немного тревожусь', 'Чувствую себя подавленным'],
    stress2: ['Никогда', 'Редко', 'Иногда', 'Часто'],
    motivation1: ['Крайне мотивирован', 'Очень мотивирован', 'Довольно мотивирован', 'Борюсь с мотивацией'],
    motivation2: ['Очень четкий путь', 'В общем понятно', 'Довольно неясно', 'Очень неясно'],
    communication1: ['Очень комфортно', 'В основном комфортно', 'Довольно некомфортно', 'Очень некомфортно'],
    communication2: ['Отличный слушатель', 'Хороший слушатель', 'Средний слушатель', 'Нужно улучшение'],
    timeManagement1: ['Очень организован', 'В основном организован', 'Довольно разбросан', 'Очень неорганизован'],
    timeManagement2: ['Всегда', 'Обычно', 'Иногда', 'Редко'],
    relationships1: ['Очень легко', 'Довольно легко', 'С некоторыми усилиями', 'С большим трудом'],
    relationships2: ['Отлично', 'Хорошо', 'Удовлетворительно', 'Плохо'],
    adaptability1: ['Очень адаптивен', 'В основном адаптивен', 'Довольно жесткий', 'Очень жесткий'],
    adaptability2: ['Принимаю изменения', 'Быстро адаптируюсь', 'Нужно время для адаптации', 'Сопротивляюсь изменениям'],
    problemSolving1: ['Систематический подход', 'Интуитивное решение проблем', 'Прошу помощи', 'Чувствую себя подавленным'],
    problemSolving2: ['Очень уверен', 'Довольно уверен', 'Не очень уверен', 'Не хватает уверенности'],
    empathy1: ['Всегда улавливаю эмоции', 'Обычно понимаю заботы', 'Иногда упускаю сигналы', 'Часто неправильно понимаю потребности'],
    empathy2: ['Всегда перефразирую', 'Часто отражаю', 'Иногда резюмирую', 'Редко отражаю обратно'],
    empathy3: ['Очень комфортно', 'В основном комфортно', 'Довольно некомфортно', 'Очень некомфортно'],
  },
};

const translations = { en, ru };

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = appStorage.loadLanguage();
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ru' : 'en';
    setLanguage(newLanguage);
    appStorage.saveLanguage(newLanguage);
  };

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    if (!value) {
      // Fallback to English if translation not found
      value = translations.en;
      for (const k of keys) {
        value = value?.[k];
      }
    }
    
    if (!value) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    
    // Replace parameters in the translation
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{(\w+)\}/g, (match, param) => {
        return params[param] !== undefined ? params[param] : match;
      });
    }
    
    return value;
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    translations: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}