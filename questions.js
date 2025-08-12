// Questions data for Mentor Merlin quiz
const questions = [
  {
    id: 1,
    type: 'mcq',
    question: 'What does CBT stand for in the NMC registration process?',
    options: ['Clinical Based Test', 'Computer Based Test', 'Competency Benchmark Test', 'Clinical Board Test'],
    correctIndex: 1,
    explanation: 'CBT stands for Computer Based Test.'
  },
  {
    id: 2,
    type: 'mcq',
    question: 'Which organisation provides the CBT platform?',
    options: ['Pearson Vue', 'Prometric', 'British Council', 'Kapla'],
    correctIndex: 0,
    explanation: 'Pearson Vue is the official CBT delivery partner.'
  },
  {
    id: 3,
    type: 'mcq',
    question: 'What is the first step to book your CBT?',
    options: ['Login to your account', 'Schedule your exam', 'Access the Pearson Vue portal', 'Make payment'],
    correctIndex: 2,
    explanation: 'You begin by accessing the Pearson Vue portal.'
  },
  {
    id: 4,
    type: 'mcq',
    question: 'The CBT is part of which larger assessment?',
    options: ['OSCE Test', 'NMC Test of Competence', 'IELTS Assessment', 'UK Visa Screening'],
    correctIndex: 1,
    explanation: 'CBT is one part of the NMC Test of Competence.'
  },
  {
    id: 5,
    type: 'mcq',
    question: 'How many parts does the CBT have?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'CBT consists of two parts: Part A (numeracy) and Part B (theory).'
  },
  {
    id: 6,
    type: 'mcq',
    question: 'Part A of the CBT focuses on:',
    options: ['Clinical scenarios', 'Patient safety guidelines', 'Numeracy (basic drug calculations)', 'Ethical decision-making'],
    correctIndex: 2,
    explanation: 'Part A is the numeracy (drug calculations) section.'
  },
  {
    id: 7,
    type: 'mcq',
    question: 'How many questions are there in Part A?',
    options: ['10', '15', '50', '100'],
    correctIndex: 1,
    explanation: 'Part A contains 15 numeracy questions.'
  },
  {
    id: 8,
    type: 'mcq',
    question: 'What is the minimum number of correct answers needed to pass Part A?',
    options: ['8', '10', '12', '15'],
    correctIndex: 1,
    explanation: 'You must answer at least 10 of 15 correctly to pass Part A.'
  },
  {
    id: 9,
    type: 'mcq',
    question: 'How many questions are there in Part B?',
    options: ['15', '50', '75', '100'],
    correctIndex: 2,
    explanation: 'Part B consists of 75 theory questions.'
  },
  {
    id: 10,
    type: 'mcq',
    question: 'What is the minimum number of correct answers required to pass Part B?',
    options: ['50', '68', '70', '80'],
    correctIndex: 1,
    explanation: 'You need at least 68 correct answers to pass Part B.'
  },
  {
    id: 11,
    type: 'mcq',
    question: 'What is the full test fee for the CBT?',
    options: ['£50', '£70', '£83', '£100'],
    correctIndex: 2,
    explanation: 'The full CBT fee is £83.'
  },
  {
    id: 12,
    type: 'mcq',
    question: 'How much does it cost to resit only Part A?',
    options: ['£50', '£70', '£83', '£100'],
    correctIndex: 0,
    explanation: 'Resitting Part A costs £50.'
  },
  {
    id: 13,
    type: 'mcq',
    question: 'How much does it cost to resit only Part B?',
    options: ['£50', '£70', '£83', '£100'],
    correctIndex: 1,
    explanation: 'Resitting Part B costs £70.'
  },
  {
    id: 14,
    type: 'mcq',
    question: 'How long is the CBT test result valid for?',
    options: ['1 year', '2 years', '3 years', '5 years'],
    correctIndex: 1,
    explanation: 'CBT results are valid for 2 years.'
  },
  {
    id: 15,
    type: 'mcq',
    question: 'If an applicant fails the CBT three times, what must they do before reapplying?',
    options: ['Wait 1 month', 'Restart the entire NMC application process and wait 6 months', 'Only retake Part B', 'Contact Pearson Vue'],
    correctIndex: 1,
    explanation: 'After three failures, you must restart the NMC application and wait six months.'
  }
];