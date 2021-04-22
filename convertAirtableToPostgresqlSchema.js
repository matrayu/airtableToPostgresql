// in browser, navigate to Airtable base API page (ie https://airtable.com/appnGoUJxA6R6XXXXX/api/docs)
// copy and paste the script below into the devTools console
// output with generate a postgress-like schema csv

let baseName = application.name;
let tableMap = [];
let rows = [];

for (const [key, value] of Object.entries(application.tablesById)) {
    tableMap.push({id: value.id, name: value.name})
  }

tableMap.forEach((table, i) => {
    let titleDataColumns = application.tablesById[`${table.id}`].columns;

    titleDataColumns.forEach((column, i) => {
        let newName = column.name.replace(/#/g, "number");
        let newRow = [
          `postgresql;"${baseName}";"public";"${table.name}";"${newName}";${
            i + 1
          };"${column.type}"`,
        ];
        rows.push(newRow);
      });
})

let csvContent =
  "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");

let encodedUri = encodeURI(csvContent);
window.open(encodedUri);
