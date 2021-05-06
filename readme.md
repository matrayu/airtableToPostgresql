# Airtable to PostgreSQL

Hacky lil' script that will convert an Airtable Base to a PostgreSQL-like schema and generate a csv. 

My usecase was wanting to visualize some Airtable bases in Lucidchart. Lucidchart allows for Entity Relationship Diagram (ERD) imports from csv, so this works great.


## Running

1. Navigate to Airtable base API page (ie: https://airtable.com/appnGoUJxA6R6XXXXX/api/docs)
2. Open devTools console
    - To open the developer console in Google Chrome, open the Chrome Menu in the upper-right-hand corner of the browser window and select More Tools > Developer Tools. You can also use the shortcut Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux).
3. Copy & paste [script](https://github.com/matrayu/airtableToPostgresql/blob/master/convertAirtableToPostgresqlSchema.js "script") into console and hit enter. The result of this action will automatically download a .csv file to your local HDD.
<hr>

## Importing into Lucidchart
4. File -> Import Data
5. Select "Entity Relationship (ERD)"
6. Select "Import Your Data" -> "Import from SQL Database"
7. Select "PostgreSQL" and click "Next"
8. Select "Choose File" and locate the file that was downloaded in step 3 and click "Open"
9. Click "Import"

Once imported, you should now be able to drag and drop your tables onto you Lucidchart diagram

<hr>

Example output of an Airtable Base, represented visually in Lucidchart
![airtablePostgreSQLExample](https://user-images.githubusercontent.com/45020760/117190096-d6c58a00-ad93-11eb-831c-fb0215324395.jpg)

