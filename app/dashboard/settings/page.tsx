import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { ProfileCard } from "@/components/profile-card";
import { PreferencesCard } from "@/components/preferences-card";

export default async function SettingsPage() {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const safeProfile = profile || {
    id: user.id,
    full_name: "",
    avatar_url: null,
    language: "English",
    notifications_email: true,
    notifications_push: false,
    theme_preference: "system",
  };

  safeProfile.email = user.email;
  safeProfile.created_at = user.created_at;

  return (
    <div className="animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Account Settings</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProfileCard profile={safeProfile} />
        <PreferencesCard profile={safeProfile} />
      </div>
    </div>
  );
}
