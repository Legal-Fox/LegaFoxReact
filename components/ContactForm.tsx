"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLocale } from 'next-intl';

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the shape of the contactTranslations prop
interface ContactTranslations {
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButton: string;
  successMessage: string;
  errorMessage: string;
  errorOccurred: string;
  ValidationMessages: {
    name: {
      minLength: string;
    };
    phone: {
      invalid: string;
      length: string;
    };
    message: {
      minLength: string;
    };
  };
}

// Define the shape of the form values
interface FormValues {
  name: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<{ contactTranslations: ContactTranslations }> = ({ contactTranslations }) => {
  const locale = useLocale()
  const formSchema = z.object({
    name: z.string().min(3, {
      message: contactTranslations.ValidationMessages.name.minLength,
    }),
    phone: z.string()
      .regex(/^\+?[1-9]\d{1,14}$/, {
        message: contactTranslations.ValidationMessages.phone.invalid,
      })
      .refine((value) => {
        const digits = value.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 15;
      }, {
        message: contactTranslations.ValidationMessages.phone.length,
      }),
    message: z.string().min(10, {
      message: contactTranslations.ValidationMessages.message.minLength,
    }),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const response = await fetch(`/${locale}/api/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert(contactTranslations.successMessage);
        form.reset();
      } else {
        const errorData = await response.json();
        alert(`${contactTranslations.errorMessage} ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(contactTranslations.errorOccurred);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactTranslations.nameLabel}</FormLabel>
              <FormControl>
                <Input placeholder={contactTranslations.namePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactTranslations.phoneLabel}</FormLabel>
              <FormControl>
                <Input placeholder={contactTranslations.phonePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{contactTranslations.messageLabel}</FormLabel>
              <FormControl>
                <Textarea placeholder={contactTranslations.messagePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{contactTranslations.submitButton}</Button>
      </form>
    </Form>
  );
};

export default ContactForm;