export type Role = "traveler" | "merchant";

export const ROLES: Role[] = ["traveler", "merchant"];

export function isRole(value: unknown): value is Role {
  return value === "traveler" || value === "merchant";
}

export function otherRole(role: Role): Role {
  return role === "traveler" ? "merchant" : "traveler";
}
