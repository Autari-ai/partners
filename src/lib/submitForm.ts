import type { PartnerFormData } from "@/types";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? "";

export async function submitPartnerForm(
  data: PartnerFormData
): Promise<{ success: boolean }> {
  if (!GOOGLE_SCRIPT_URL) {
    throw new Error("Form submission is not configured");
  }

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return { success: true };
}
