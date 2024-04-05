import Nav from "@/components/Nav";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <div className="bg-[#F3F3F3] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <Nav />
        <div>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex">
              <RegisterForm />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
