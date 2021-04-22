// in browser, navigate to Airtable base API page (ie https://airtable.com/appnGoUJxA6R6XXXXX/api/docs)
// replace baseName and tableName below
// copy and paste the script below into the devTools console
// output with generate a postgress-like schema

let baseName = 'My Cool Base' /* REPLACE WITH BASE NAME */
let tableName = 'My Awesome Table' /* REAPLCE WITH ACTUAL TABLE NAME */
let tableId = '';
let rows = [];

let tableObj = application.tables.find(table => table.name === tableName)
tableId = tableObj.id
let titleDataColumns = application.tablesById[`${tableId}`].columns;

titleDataColumns.forEach((column, i) => {
    let newRow = [`postgresql;"${baseName}";"public";"${tableName}";"${column.name}";${i+1};"${column.type}"`]
    rows.push(newRow)
});

let csvContent = "data:text/csv;charset=utf-8," 
    + rows.map(e => e.join(",")).join("\n");

let encodedUri = encodeURI(csvContent);
window.open(encodedUri);
