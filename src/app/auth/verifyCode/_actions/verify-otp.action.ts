"use server";

import { JSON_HEADER } from "@/lib/constant/api.constant";

export async function verifyOTPAction(values: { resetCode: string }) {
  const response = await fetch(`${process.env.API}/auth/verifyResetCode`, {
    method: "POST",
    headers: { ...JSON_HEADER },
    body: JSON.stringify(values),
  });

  // A type should be added too
  const payload = await response.json();

  return payload;
}
