import { describe, expect, it } from "vitest";

import {
  ALL_STATUSES,
  allowedStatusTransitions,
  canDeleteTodo,
  canEditTodo,
  canReadTodo,
  isAdmin,
  visibleColumnsFor,
  type CurrentUser,
} from "@/lib/authorization";

const admin: CurrentUser = { id: "admin-1", role: "ADMIN", groupId: null };
const owner: CurrentUser = { id: "user-1", role: "DEV", groupId: "group-a" };
const qaOwner: CurrentUser = { id: "user-6", role: "QA", groupId: "group-a" };
const qaTeammate: CurrentUser = { id: "user-2", role: "QA", groupId: "group-a" };
const devTeammate: CurrentUser = { id: "user-7", role: "DEV", groupId: "group-a" };
const outsider: CurrentUser = { id: "user-3", role: "DEV", groupId: "group-b" };
const noGroupUser: CurrentUser = { id: "user-4", role: "DEV", groupId: null };

const ownedTodo = { id: owner.id, groupId: owner.groupId };
const qaOwnedTodo = { id: qaOwner.id, groupId: qaOwner.groupId };

describe("isAdmin", () => {
  it("is true only for the ADMIN role", () => {
    expect(isAdmin(admin)).toBe(true);
    expect(isAdmin(owner)).toBe(false);
  });
});

describe("canReadTodo", () => {
  it("allows the owner", () => {
    expect(canReadTodo(owner, ownedTodo)).toBe(true);
  });

  it("allows admin regardless of group", () => {
    expect(canReadTodo(admin, ownedTodo)).toBe(true);
  });

  it("allows a same-group teammate", () => {
    expect(canReadTodo(qaTeammate, ownedTodo)).toBe(true);
  });

  it("denies a user in a different group", () => {
    expect(canReadTodo(outsider, ownedTodo)).toBe(false);
  });

  it("denies a user with no group, for another user's todo", () => {
    expect(canReadTodo(noGroupUser, ownedTodo)).toBe(false);
  });

  it("denies when both users have no group", () => {
    const otherNoGroupTodo = { id: "user-5", groupId: null };
    expect(canReadTodo(noGroupUser, otherNoGroupTodo)).toBe(false);
  });
});

describe("canEditTodo / canDeleteTodo", () => {
  it("allows the owner", () => {
    expect(canEditTodo(owner, owner.id)).toBe(true);
    expect(canDeleteTodo(owner, owner.id)).toBe(true);
  });

  it("allows admin", () => {
    expect(canEditTodo(admin, owner.id)).toBe(true);
    expect(canDeleteTodo(admin, owner.id)).toBe(true);
  });

  it("denies a same-group teammate (view/status only, not edit/delete)", () => {
    expect(canEditTodo(qaTeammate, owner.id)).toBe(false);
    expect(canDeleteTodo(qaTeammate, owner.id)).toBe(false);
  });

  it("denies an outsider", () => {
    expect(canEditTodo(outsider, owner.id)).toBe(false);
    expect(canDeleteTodo(outsider, owner.id)).toBe(false);
  });
});

describe("visibleColumnsFor", () => {
  it("shows QA only the testing-onward columns", () => {
    expect(visibleColumnsFor("QA")).toEqual([
      "READY_FOR_TESTING",
      "TESTED_AND_VERIFIED",
      "COMPLETED",
    ]);
  });

  it("shows DEV and ADMIN every column", () => {
    expect(visibleColumnsFor("DEV")).toEqual(ALL_STATUSES);
    expect(visibleColumnsFor("ADMIN")).toEqual(ALL_STATUSES);
  });
});

describe("allowedStatusTransitions", () => {
  it("lets admin set any status on any ticket", () => {
    expect(allowedStatusTransitions(admin, ownedTodo)).toEqual(ALL_STATUSES);
    expect(allowedStatusTransitions(admin, qaOwnedTodo)).toEqual(ALL_STATUSES);
  });

  it("lets a dev owner move through the dev statuses only", () => {
    expect(allowedStatusTransitions(owner, ownedTodo)).toEqual([
      "TO_DO",
      "IN_PROGRESS",
      "READY_FOR_TESTING",
    ]);
  });

  it("lets a qa owner move through the qa statuses only (their own tickets are already qa work)", () => {
    expect(allowedStatusTransitions(qaOwner, qaOwnedTodo)).toEqual([
      "READY_FOR_TESTING",
      "TESTED_AND_VERIFIED",
      "COMPLETED",
    ]);
  });

  it("lets a qa teammate move a dev's ticket through the qa statuses", () => {
    expect(allowedStatusTransitions(qaTeammate, ownedTodo)).toEqual([
      "READY_FOR_TESTING",
      "TESTED_AND_VERIFIED",
      "COMPLETED",
    ]);
  });

  it("denies a non-owner, non-qa dev teammate any status change", () => {
    expect(allowedStatusTransitions(devTeammate, ownedTodo)).toEqual([]);
  });

  it("denies an outsider (different group)", () => {
    expect(allowedStatusTransitions(outsider, ownedTodo)).toEqual([]);
  });

  it("denies a user with no group, for another user's ticket", () => {
    expect(allowedStatusTransitions(noGroupUser, ownedTodo)).toEqual([]);
  });
});
