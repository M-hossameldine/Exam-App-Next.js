import FormFooter from "../_components/form-footer";
import FormBody from "./_components/form-body";

export default function page() {
  return (
    <form>
      <h1 className="text-3xl font-bold mb-10">Login</h1>
      <FormBody />
      <FormFooter
        submitButtonText="Login"
        altActionDescription="Don't have an account?"
        altActionText="Create yours"
        altActionHref="/auth/signup"
        error=""
      />
    </form>
  );
}
