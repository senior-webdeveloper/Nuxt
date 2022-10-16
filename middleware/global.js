export default function ({ app, redirect, route }) {
  if (!app.$auth.loggedIn && route.path.includes("/dashboard"))
    return redirect("/");

  const appMetaData = app.$auth.$storage.getUniversal("appMetaData");
  if ((!appMetaData || !appMetaData.role) && route.path.includes("/dashboard"))
    return redirect("/");
  if (
    appMetaData &&
    appMetaData.role == "admin" &&
    route.path.includes("/dashboard/owner")
  )
    return redirect("/");
  if (
    appMetaData &&
    appMetaData.role == "distributor" &&
    (route.path.includes("/dashboard/admin") ||
      route.path.includes("/dashboard/owner") ||
      route.path.includes("/dashboard/reports"))
  )
    return redirect("/");
}
