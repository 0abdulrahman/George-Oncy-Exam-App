import { getAuthHeader } from "../utils/auth-header";

export async function getExams() {
  const response = await fetch(`${process.env.API}/exams`, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<PaginatedResponse<{ exams: Exam[] }>> = await response.json();

  return payload;
}
