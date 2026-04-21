export interface PartnerFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  expertise: string;
  heardAboutUs?: string;
  message?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}
