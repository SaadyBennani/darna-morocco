import { SignUp } from "@clerk/nextjs";
import { isRole } from "@/lib/roles";

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { role: requestedRole } = await searchParams;
  const role = isRole(requestedRole) ? requestedRole : "traveler";

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/20">
      <SignUp fallbackRedirectUrl={`/onboarding?role=${role}`} />
    </div>
  );
}
