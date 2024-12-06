import Header from "@/components/landing-page/header";
import ProfileInfo from "@/components/landing-page/header/profile-info";

export default function Home() {
  return (
    <>
      <div className="flex justify-end">
        <ProfileInfo />
      </div>
    </>
  );
}
