export default function({ store, redirect }) {
  if (!store.state.auth.user.role_id == 3) {
    return redirect("/");
  }
}
