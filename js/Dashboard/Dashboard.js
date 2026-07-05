// ============================================================
// Dashboard.js - NXR TECH - Graficos administrativos con Chart.js
// Responsable: Maikol Calle
//
// Reportes:
// 1. Ventas mensuales.
// 2. Mas vendidos.
// 3. Comparacion de clientes por ciudad.
// Datos ficticios manejados en JavaScript para la sustentacion.
// ============================================================

protegerPagina();

document.addEventListener("DOMContentLoaded", () => {
    const sesion = obtenerSesion();
    if (!sesion) return;

    configurarChartBase();
    cargarDatosAdministrador(sesion);

    const ventasMensuales = [
        { mes: "Enero", ventas: 1200, gastos: 800 },
        { mes: "Febrero", ventas: 1500, gastos: 1000 },
        { mes: "Marzo", ventas: 1800, gastos: 1200 },
        { mes: "Abril", ventas: 1700, gastos: 1100 },
        { mes: "Mayo", ventas: 2200, gastos: 1500 },
        { mes: "Junio", ventas: 2500, gastos: 1800 }
    ];

    const productosMasVendidos = obtenerProductosMasVendidos();

    const clientesPorCiudad = [
        { nombre: "Lima", clientes: 56, color: "#0071e3" },
        { nombre: "Arequipa", clientes: 24, color: "#16a34a" },
        { nombre: "Trujillo", clientes: 18, color: "#f59e0b" },
        { nombre: "Cusco", clientes: 12, color: "#ef4444" }
    ];

    actualizarIndicadores(ventasMensuales, productosMasVendidos, clientesPorCiudad);
    crearGraficoLineas("grafico-ventas-mensuales", ventasMensuales);
    crearGraficoMasVendidos("grafico-mas-vendidos", productosMasVendidos);
    crearGraficoComparacionCiudades("grafico-comparacion-ciudades", clientesPorCiudad);
    activarCierreSesion();
});

function cargarDatosAdministrador(sesion) {
    const iniciales = sesion.nombre
        .split(" ")
        .map(palabra => palabra[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    document.getElementById("panel-avatar-iniciales").textContent = iniciales;
    document.getElementById("panel-nombre-admin").textContent = sesion.nombre;
    document.getElementById("panel-rol-admin").textContent = sesion.rol;
    document.getElementById("dashboard-fecha").textContent = new Date().toLocaleDateString("es-PE");
}

function actualizarIndicadores(ventasMensuales, productosMasVendidos, clientesPorCiudad) {
    const mejorMes = ventasMensuales.reduce((mayor, mes) =>
        mes.ventas > mayor.ventas ? mes : mayor
    );
    const productoLider = productosMasVendidos.reduce((mayor, producto) =>
        producto.pedidos > mayor.pedidos ? producto : mayor
    );
    const ciudadLider = clientesPorCiudad.reduce((mayor, ciudad) =>
        ciudad.clientes > mayor.clientes ? ciudad : mayor
    );

    document.getElementById("producto-lider").textContent = productoLider.nombre;
    document.getElementById("pedidos-lider").textContent = productoLider.pedidos;
    document.getElementById("ciudad-lider").textContent = ciudadLider.nombre;

    document.getElementById("explicacion-ventas-mensuales").textContent =
        `${mejorMes.mes} es el punto mas alto: S/ ${mejorMes.ventas} en ventas frente a S/ ${mejorMes.gastos} en gastos.`;

    document.getElementById("explicacion-mas-vendidos").textContent =
        `${productoLider.nombre} lidera el reporte con ${productoLider.pedidos} pedidos y S/ ${productoLider.ganancia} de ganancia simulada.`;

    document.getElementById("explicacion-comparacion-ciudades").textContent =
        `${ciudadLider.nombre} es la ciudad con mas clientes registrados: ${ciudadLider.clientes} clientes en la comparacion.`;
}

function obtenerProductosMasVendidos() {
    const colores = ["#0071e3", "#16a34a", "#f59e0b", "#ef4444", "#8b5cf6"];
    const catalogo = typeof listaCatalogo !== "undefined" ? listaCatalogo : [];

    return catalogo
        .filter(item => item.tipo === "Producto")
        .map(producto => {
            const pedidos = Math.max(1, 60 - producto.stock);

            return {
                nombre: producto.nombre,
                pedidos,
                ganancia: pedidos * producto.precio,
                color: colores[producto.id % colores.length]
            };
        })
        .sort((a, b) => b.pedidos - a.pedidos)
        .slice(0, 5);
}

function configurarChartBase() {
    if (typeof Chart === "undefined") return;

    Chart.defaults.font.family = "Poppins, sans-serif";
    Chart.defaults.color = "#1f2937";
    Chart.defaults.plugins.tooltip.backgroundColor = "rgba(13, 13, 13, 0.92)";
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;
}

function crearGraficoLineas(canvasId, datos) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || typeof Chart === "undefined") return;

    new Chart(canvas, {
        type: "line",
        data: {
            labels: datos.map(item => item.mes),
            datasets: [
                {
                    label: "Ventas (S/)",
                    data: datos.map(item => item.ventas),
                    borderColor: "#005daa",
                    backgroundColor: "rgba(0, 93, 170, 0.14)",
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: "#ffffff",
                    pointBorderColor: "#005daa",
                    pointBorderWidth: 2,
                    tension: 0.22
                },
                {
                    label: "Gastos (S/)",
                    data: datos.map(item => item.gastos),
                    borderColor: "#c70039",
                    backgroundColor: "rgba(199, 0, 57, 0.14)",
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: "#ffffff",
                    pointBorderColor: "#c70039",
                    pointBorderWidth: 2,
                    tension: 0.22
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 8, right: 14, bottom: 4, left: 4 } },
            plugins: {
                title: { display: false },
                legend: {
                    position: "top",
                    labels: {
                        color: "#111827",
                        boxWidth: 34,
                        usePointStyle: true,
                        pointStyle: "line",
                        font: { size: 12, weight: "600" }
                    }
                }
            },
            scales: {
                y: {
                    min: 800,
                    max: 2600,
                    ticks: {
                        stepSize: 200,
                        color: "#4b5563",
                        callback: valor => "S/ " + valor
                    },
                    grid: { color: "rgba(17, 24, 39, 0.10)" },
                    border: { display: false }
                },
                x: {
                    ticks: { color: "#4b5563", font: { weight: "600" } },
                    grid: { color: "rgba(17, 24, 39, 0.08)" },
                    border: { display: false }
                }
            }
        }
    });
}

function crearGraficoMasVendidos(canvasId, datos) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || typeof Chart === "undefined") return;

    const totalPedidos = datos.reduce((total, producto) => total + producto.pedidos, 0);
    const centroAnillo = {
        id: "centroAnilloMasVendidos",
        afterDraw(chart) {
            const meta = chart.getDatasetMeta(0);
            if (!meta.data.length) return;

            const centro = meta.data[0];
            const ctx = chart.ctx;
            ctx.save();
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#111827";
            ctx.font = "700 22px Poppins, sans-serif";
            ctx.fillText(totalPedidos, centro.x, centro.y - 8);
            ctx.fillStyle = "#6b7280";
            ctx.font = "600 12px Poppins, sans-serif";
            ctx.fillText("pedidos", centro.x, centro.y + 14);
            ctx.restore();
        }
    };

    new Chart(canvas, {
        type: "doughnut",
        data: {
            labels: datos.map(item => `${item.nombre} - ${item.pedidos} pedidos`),
            datasets: [
                {
                    data: datos.map(item => item.pedidos),
                    backgroundColor: datos.map(item => item.color),
                    borderColor: "#ffffff",
                    borderWidth: 4,
                    hoverOffset: 10
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: "52%",
            layout: { padding: 8 },
            plugins: {
                title: { display: false },
                legend: {
                    position: "bottom",
                    labels: {
                        color: "#111827",
                        padding: 12,
                        usePointStyle: true,
                        font: { size: 11, weight: "600" }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: contexto => {
                            const producto = datos[contexto.dataIndex];
                            return `${producto.nombre}: ${producto.pedidos} pedidos | S/ ${producto.ganancia}`;
                        }
                    }
                }
            }
        },
        plugins: [centroAnillo]
    });
}

function crearGraficoComparacionCiudades(canvasId, datos) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || typeof Chart === "undefined") return;

    const etiquetasBarras = {
        id: "etiquetasClientesCiudad",
        afterDatasetsDraw(chart) {
            const ctx = chart.ctx;
            const meta = chart.getDatasetMeta(0);
            ctx.save();
            ctx.textAlign = "center";
            ctx.textBaseline = "bottom";
            ctx.font = "700 13px Poppins, sans-serif";
            meta.data.forEach((barra, index) => {
                const valor = chart.data.datasets[0].data[index];
                ctx.fillStyle = chart.data.datasets[0].backgroundColor[index];
                ctx.fillText(valor, barra.x, barra.y - 8);
            });
            ctx.restore();
        }
    };

    new Chart(canvas, {
        type: "bar",
        data: {
            labels: datos.map(item => item.nombre),
            datasets: [
                {
                    label: "Clientes",
                    data: datos.map(item => item.clientes),
                    backgroundColor: datos.map(item => item.color),
                    borderColor: datos.map(item => item.color),
                    borderWidth: 1,
                    borderRadius: 10,
                    barPercentage: 0.58,
                    categoryPercentage: 0.72
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 24, right: 8, bottom: 0, left: 0 } },
            plugins: {
                title: { display: false },
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: contexto => `${contexto.raw} clientes`
                    }
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 60,
                    ticks: {
                        stepSize: 10,
                        color: "#4b5563"
                    },
                    grid: { color: "rgba(17, 24, 39, 0.10)" },
                    border: { display: false }
                },
                x: {
                    ticks: { color: "#4b5563", font: { weight: "700" } },
                    grid: { display: false },
                    border: { display: false }
                }
            }
        },
        plugins: [etiquetasBarras]
    });
}

function activarCierreSesion() {
    const botonTop = document.getElementById("btn-cerrar-sesion-top");
    const botonMenu = document.getElementById("btn-cerrar-sesion-menu");

    if (botonTop) botonTop.addEventListener("click", () => cerrarSesion());
    if (botonMenu) {
        botonMenu.addEventListener("click", (evento) => {
            evento.preventDefault();
            cerrarSesion();
        });
    }
}
