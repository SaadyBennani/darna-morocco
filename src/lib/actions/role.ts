"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { isRole, type Role } from "@/lib/roles";

export async function setActiveRole(role: Role) {
  if (!isRole(role)) {
    throw new Error(`Invalid role: ${role}`);
  }

  const { userId } = await auth();
  if (!userId) {
    throw new Error("Not signed in");
  }

  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: { activeRole: role },
  });

  return { activeRole: role };
}
