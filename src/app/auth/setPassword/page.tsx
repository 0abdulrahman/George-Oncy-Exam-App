import React from "react";
import LandingAuth from "@/components/custom/landing-auth";
import NavAuth from "@/components/features/auth/nav-auth";
import SocialButton from "@/components/features/auth/social-button";
import SetPasswordForm from "./_components/SetPassword-Form";

export default function setPasswordPage() {
  return (
    <main className="grid  lg:grid-cols-2 h-screen grid-cols-1 ">
      {/* loanding */}
      <LandingAuth />
      {/*  Forgot Password */}
      <section className="grid grid-cols-1 gap-10  justify-self-center  pb-10 lg:pb-0    ">
        {/* nav auth */}
        <NavAuth />
        {/* Form Forgot Password */}
        <div>
          <SetPasswordForm></SetPasswordForm>
          <SocialButton />
        </div>
      </section>
    </main>
  );
}
