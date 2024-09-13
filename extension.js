function generateCampaign() {
    // Obtener el nombre de la campaña del campo de entrada
    let campaignName = document.getElementById('campaignName').value;

    // Obtener el dashboard actual de Tableau
    const tableauDashboard = tableau.extensions.dashboardContent.dashboard;
    
    // Inicializar una estructura para almacenar los filtros
    let filtersApplied = {};

    // Recorrer todas las hojas del dashboard
    tableauDashboard.worksheets.forEach(function(sheet) {
        // Obtener los filtros aplicados en cada hoja
        sheet.getFiltersAsync().then(filters => {
            filters.forEach(filter => {
                filtersApplied[filter.fieldName] = filter.appliedValues;
            });

            // Lógica para guardar los filtros y la lista de clientes
            saveCampaignData(campaignName, filtersApplied);
        });
    });
}

// Función para guardar los datos de la campaña
function saveCampaignData(campaignName, filters) {
    console.log('Nombre de Campaña:', campaignName);
    console.log('Filtros Aplicados:', filters);
    
    // Aquí puedes enviar los datos a un backend para guardarlos
}
