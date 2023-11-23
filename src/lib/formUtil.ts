import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  subject: z.string(),
  question: z
    .string()
    .min(5, {
      message: "Question must be at least 5 characters",
    })
    .max(250, { message: "Question can't be more than 250 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const registerFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  passwordConfirm: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
