"use client";

import React, { useTransition, useState, useRef } from "react";
import { saveProfile } from "@/app/dashboard/settings/actions";

export function ProfileCard({ profile }: { profile: any }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(
    profile.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.full_name || "User")}&size=128&background=random`
  );
  const [isEditing, setIsEditing] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAvatarPreview(url);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);
    formData.append("avatar_url", profile.avatar_url || "");

    startTransition(async () => {
      const res = await saveProfile(formData);
      if (res.error) {
        setError(res.error);
      } else {
        setSuccess("Profile updated successfully!");
        setIsEditing(false);
        setTimeout(() => setSuccess(null), 3000);
      }
    });
  };

  const displayDate = profile.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
    : "Unknown Date";

  return (
    <div className="rounded-xl p-6 border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:shadow-none transition-colors duration-300 h-fit">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Profile Summary</h2>
        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Edit Mode
          </button>
        )}
      </div>

      {error && <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400 rounded-md">{error}</div>}
      {success && <div className="mb-4 p-3 text-sm text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 rounded-md">{success}</div>}

      <form ref={formRef} onSubmit={onSubmit} className="flex flex-col sm:flex-row items-center sm:items-start gap-6 w-full">
        <div className="relative shrink-0 flex flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarPreview}
            alt="User Avatar"
            className="w-24 h-24 object-cover rounded-full border-2 border-gray-100 dark:border-gray-800 shadow-sm"
          />
          {isEditing && (
            <label className="text-xs font-medium text-blue-600 dark:text-blue-400 cursor-pointer hover:underline">
              Change Avatar
              <input
                type="file"
                name="avatar"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </label>
          )}
        </div>
        <div className="flex flex-col flex-1 space-y-4 text-center sm:text-left w-full mt-2">
          {isEditing ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input
                name="full_name"
                defaultValue={profile.full_name || ""}
                required
                disabled={isPending}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:text-white disabled:opacity-50"
              />
            </div>
          ) : (
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{profile.full_name || "New User"}</h3>
          )}

          <p className="text-sm text-gray-500 dark:text-gray-400">{profile.email}</p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Account Created: <span className="font-medium text-gray-700 dark:text-gray-300">{displayDate}</span>
          </div>
        </div>
      </form>

      {isEditing && (
        <div className="mt-8 flex justify-end gap-3 border-t border-gray-200 dark:border-gray-800 pt-6">
          <button
            type="button"
            disabled={isPending}
            onClick={() => { setIsEditing(false); setError(null); setSuccess(null); }}
            className="rounded-lg px-4 py-2 bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => formRef.current?.requestSubmit()}
            disabled={isPending}
            className="rounded-lg px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save Profile"}
          </button>
        </div>
      )}
    </div>
  );
}
