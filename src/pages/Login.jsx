import LoginForm from "@/components/LoginForm";
import Nav from "@/components/Nav";

export default function Login() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Nav />
        <div>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex">
              <LoginForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
