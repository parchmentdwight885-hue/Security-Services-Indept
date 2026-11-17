// @claude:user-owned — public consultation inquiry page.

import type { Metadata } from 'next';
import { ConsultationInquiryForm } from '@/components/custom/consultation-inquiry-form';
import { siteName } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Start a consultation',
  description: `Share the context for a ${siteName} security consultation — guard staffing, design review, or both.`,
};

export default function ContactPage() {
  return <ConsultationInquiryForm />;
}
