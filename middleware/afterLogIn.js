export default function ({ app, redirect }) {
  if (app.$auth.loggedIn) {
    const appMetaData = app.$auth.$storage.getUniversal("appMetaData");
    if (appMetaData.role == "owner" || appMetaData.role == "Owner") {
      return redirect("/dashboard/admin"); // initially redirecting to /dashboard/owner
    }
    if (appMetaData.role == "admin" || appMetaData.role == "Admin") {
      return redirect("/dashboard/admin");
    }
    if (
      appMetaData.role == "distributor" ||
      appMetaData.role == "Distributor"
    ) {
      return redirect("/dashboard");
    }
  }
}
