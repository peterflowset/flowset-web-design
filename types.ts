// Fix: Import React to provide the React namespace for ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepProps {
  number: string;
  title: string;
  description: string;
  duration?: string;
  isLast?: boolean;
}

export interface ProblemProps {
  title: string;
  description: string;
}