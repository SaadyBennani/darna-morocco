import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { isRole } from "@/lib/roles";

export default async function OnboardingPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-up");
  }

  const { role: requestedRole } = await searchParams;
  const role = isRole(requestedRole) ? requestedRole : "traveler";

  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: { activeRole: role },
  });

  redirect(`/dashboard/${role}`);
}
