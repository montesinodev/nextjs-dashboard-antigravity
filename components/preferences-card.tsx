"use client";

import React, { useTransition, useState, useEffect } from "react";
import { useTheme } from "@/components/theme-provider";
import { savePreferences } from "@/app/dashboard/settings/actions";

export function PreferencesCard({ profile }: { profile: any }) {
  const { setTheme } = useTheme();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [themePref, setThemePref] = useState(profile.theme_preference || "system");
  const [emailNotifications, setEmailNotifications] = useState(profile.notifications_email ?? true);
  const [pushNotifications, setPushNotifications] = useState(profile.notifications_push ?? false);
  const [language, setLanguage] = useState(profile.language || "English");

  useEffect(() => {
    if (profile.theme_preference) {
      setTheme(profile.theme_preference);
    }
  }, [profile.theme_preference, setTheme]);

  const onSave = () => {
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append("theme_preference", themePref);
    formData.append("language", language);
    formData.append("notifications_email", String(emailNotifications));
    formData.append("notifications_push", String(pushNotifications));

    startTransition(async () => {
      const res = await savePreferences(formData);
      if (res.error) {
        setError(res.error);
      } else {
        setSuccess("Preferences updated successfully!");
        setTheme(themePref as "light" | "dark" | "system");
        setTimeout(() => setSuccess(null), 3000);
      }
    });
  };

  return (
    <div className="rounded-xl p-6 border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:shadow-none transition-colors duration-300 h-fit">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Preferences
      </h2>

      {error && <div className="mb-4 p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400 rounded-md">{error}</div>}
      {success && <div className="mb-4 p-3 text-sm text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 rounded-md">{success}</div>}

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">Theme Preference</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Select your default dashboard theme.</div>
          </div>
          <select
            value={themePref}
            onChange={(e) => setThemePref(e.target.value)}
            disabled={isPending}
            className="w-full sm:w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors disabled:opacity-50"
          >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
          <div className="font-medium text-gray-900 dark:text-gray-100 mb-4">Notification Settings</div>

          <div className="space-y-4">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-700 dark:text-gray-300">Email Notifications</span>
              <input
                type="checkbox"
                className="sr-only peer"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                disabled={isPending}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-700 dark:text-gray-300">Push Notifications</span>
              <input
                type="checkbox"
                className="sr-only peer"
                checked={pushNotifications}
                onChange={() => setPushNotifications(!pushNotifications)}
                disabled={isPending}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">Language</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Select your preferred language.</div>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            disabled={isPending}
            className="w-full sm:w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-colors disabled:opacity-50"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
        </div>
      </div>

      <div className="mt-8 flex justify-end pt-6 border-t border-gray-200 dark:border-gray-800">
        <button
          onClick={onSave}
          disabled={isPending}
          className="w-full sm:w-auto rounded-lg px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200 disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
