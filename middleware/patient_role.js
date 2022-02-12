export default function({ store, redirect }) {
  if (!store.state.auth.user.role_id == 2) {
    return redirect("/");
  }
}
