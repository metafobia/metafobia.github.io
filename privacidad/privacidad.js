  document.getElementById("forget").addEventListener("click", () => {
    try { localStorage.removeItem("metafobia:visitas"); sessionStorage.removeItem("metafobia:repos3"); } catch (e) {}
    document.getElementById("ok").textContent = "listo. la página ya no recuerda tus visitas.";
  });
