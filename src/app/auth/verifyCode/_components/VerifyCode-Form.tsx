"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { verifyOTPAction } from "../_actions/verify-otp.action";

const Schema = z.object({
  resetCode: z.string().min(4, "At least 4 letters are required"),
});

type formSchema = z.infer<typeof Schema>;
export default function VerifyCodeForm() {
  // Navigation
  const router = useRouter();

  // Form
  const form = useForm({
    resolver: zodResolver(Schema),
    defaultValues: {
      resetCode: "",
    },
  });
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  // Functions
  async function onSubmit(values: formSchema) {
    const data = await verifyOTPAction(values);

    if ("error" in data) {
      return setError("root", { message: data.error });
    }

    router.push("/auth/setPassword");
  }

  return (
    <div className="flex justify-center ">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {/* Title */}
          <h1 className="text-2xl font-bold">Verify code</h1>

          {/* Feedback message */}
          <p className="mt-5 text-red-500">{errors.root?.message}</p>

          {/* Reset Code */}
          <FormField
            control={control}
            name="resetCode"
            render={({ field }) => (
              <FormItem className="my-2">
                {/* Label */}
                <FormLabel className="sr-only">Verify OTP Code</FormLabel>

                {/* Field */}
                <FormControl className="relative">
                  <Input {...register("resetCode")} type="resetCode" className="p-5" placeholder="Enter Code" {...field} />
                </FormControl>

                {/* Message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Resend Code */}
          <p className="mb-4   text-end">
            Didn&apos;t receive a code?{" "}
            <button type="button" onClick={() => router.push("/auth/forgotPassword")} className="mb-7 mt-3  text-end text-primary">
              Resend
            </button>
          </p>

          {/* Submit */}
          <Button className="hover:bg-blue-800 py-5  w-full rounded-[20px]" type="submit">
            Verify
          </Button>
        </form>
      </Form>
    </div>
  );
}
