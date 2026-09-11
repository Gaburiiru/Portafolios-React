// Cuenta visitas acumuladas en este navegador, sin duplicar por reload dentro de la misma sesión.
export function getOrIncrementVisits() {
  const alreadyCounted = sessionStorage.getItem("gabo_session_counted");
  let total = Number(localStorage.getItem("gabo_visits") || "0");
  if (!alreadyCounted) {
    total += 1;
    localStorage.setItem("gabo_visits", String(total));
    sessionStorage.setItem("gabo_session_counted", "1");
  }
  return total;
}

export function getVisits() {
  return Number(localStorage.getItem("gabo_visits") || "1");
}

export function getCoffees() {
  return Number(localStorage.getItem("gabo_coffees") || "0");
}

export function bumpCoffees() {
  const n = getCoffees() + 1;
  localStorage.setItem("gabo_coffees", String(n));
  return n;
}
