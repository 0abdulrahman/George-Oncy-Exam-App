import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import QuestionsForm from "./questions-form";
import { Button } from "@/components/ui/button";
import { JSON_HEADER } from "@/lib/constant/api.constant";
import { cookies } from "next/headers";
import { decode } from "next-auth/jwt";

export default async function QuestionsDialog({
  quizesId,
}: {
  quizesId: string;
}) {
  // Fetch Questions
  const authCookies = cookies().get("next-auth.session-token")?.value;
  const token = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: authCookies,
  });


  const response = await fetch(`${process.env.API}/questions?exam=6700708d30a3c3c1944a9c60`,
    {
      headers: {
        token: `${token?.token}`,
        ...JSON_HEADER,
      },
    }
  );

  const questions: APIResponse<{ questions: Question[] }> =
    await response.json();

  if ("code" in questions) {
    throw new Error(questions.message);
  }

  // console.log(questions)
  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger
        asChild
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        <Button>Start</Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="min-h-[550px] flex flex-col">
        {questions?.questions && <QuestionsForm questions={questions.questions} />}
      </DialogContent>
    </Dialog>
  );
}
