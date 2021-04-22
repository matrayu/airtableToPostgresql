// in browser, navigate to Airtable base API page (ie https://airtable.com/appnGoUJxA6R6XXXXX/api/docs)
// copy and paste the script below into the devTools console
// output will generate a postgresql-like schema csv

let baseName = application.name;
let tableMap = [];
let rows = [];

for (const [key, value] of Object.entries(application.tablesById)) {
  tableMap.push({ id: value.id, name: value.name });
}

tableMap.forEach((table, i) => {
  let titleDataColumns = application.tablesById[`${table.id}`].columns;
  let pk = application.tablesById[`${table.id}`].primaryColumnName;

  titleDataColumns.forEach((column, i) => {
    let newRow = [];
    let newName = column.name.replace(/#/g, "number");
    let baseRowName = `postgresql;"${baseName}";"public";"${
      table.name
    }";"${newName}";${i + 1};"${column.type}";""`;

    if (pk === newName) {
      newRow = [`${baseRowName};"PRIMARY KEY";"";"";""`];
    }
    if (column.type === "foreignKey") {
      newRow = [
        `${baseRowName};"FOREIGN KEY";"public";"${column.foreignTable.name}";"${column.foreignTable.primaryColumnName}"`,
      ];
    } else {
      newRow = [`${baseRowName};"";"";"";""`];
    }
    rows.push(newRow);
  });
});

let csvContent =
  "data:text/csv;charset=utf-8," + rows.map((e) => e.join(",")).join("\n");

let encodedUri = encodeURI(csvContent);
window.open(encodedUri);
