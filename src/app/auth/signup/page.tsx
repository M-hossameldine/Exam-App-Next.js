import FormFooter from "../_components/form-footer";
import FormBody from "./_components/form-body";

export default function page() {
  return (
    <form>
      <h1 className="text-3xl font-bold mb-10">Signup</h1>
      <FormBody />
      <FormFooter
        submitButtonText="Create Account"
        altActionDescription="Already have an account?"
        altActionText="Login"
        altActionHref="/auth/login"
        error=""
      />
    </form>
  );
}
