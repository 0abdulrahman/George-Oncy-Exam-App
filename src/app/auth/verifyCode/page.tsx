import LandingAuth from "@/components/custom/landing-auth";
import NavAuth from "@/components/features/auth/nav-auth";
import SocialButton from "@/components/features/auth/social-button";
import VerifyCodeForm from "./_components/VerifyCode-Form";

export default function verifyCodePage() {
  return (
    <main className="grid  lg:grid-cols-2 h-screen grid-cols-1 ">
      {/* landing */}
      <LandingAuth />

      {/* Verify Code */}
      <section className="grid grid-cols-1 gap-10  justify-self-center  pb-10 lg:pb-0    ">
        {/* Nav auth */}
        <NavAuth />

        {/* Form Verify Code */}
        <div>
          <VerifyCodeForm></VerifyCodeForm>
          <SocialButton />
        </div>
      </section>
    </main>
  );
}
