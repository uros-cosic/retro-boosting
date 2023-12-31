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

export const accountFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .optional(),
  avatar: z.any().optional(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .optional(),
  passwordConfirm: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .optional(),
});

export type AccountFormValues = z.infer<typeof accountFormSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export const checkoutSchema = z.object({
  email: z.string().email(),
  paymentMethod: z.string().default("paypal"),
});

export type CheckoutValues = z.infer<typeof checkoutSchema>;

export const jobSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  currentRank: z.string(),
  opgg: z.string(),
  server: z.string(),
  mainLanes: z.string(),
  mainChampions: z.string(),
  country: z.string(),
  languages: z.string(),
  discord: z.string(),
  type: z.string(),
});

export type jobValues = z.infer<typeof jobSchema>;

export const newPasswordSchema = z.object({
  password: z.string().min(8),
  passwordConfirm: z.string().min(8),
});

export type newPasswordValues = z.infer<typeof newPasswordSchema>;
