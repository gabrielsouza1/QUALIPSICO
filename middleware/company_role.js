export default function({ store, redirect }) {
  if (!store.state.auth.user.role_id == 4) {
    return redirect("/");
  }
}
