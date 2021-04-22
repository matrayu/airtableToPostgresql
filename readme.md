# Airtable to PostgreSQL

Hacky lil' script that will convert an Airtable Base to a PostgreSQL-like schema and generate a csv. 

My usecase was wanting to visualize some Airtable bases in Lucid Chart. Lucid Chart allows for ERD imports from csv, so this works great.


## Running

1. Navigate to Airtable base API page (ie: https://airtable.com/appnGoUJxA6R6XXXXX/api/docs)
2. Open devTools console
    - To open the developer console in Google Chrome, open the Chrome Menu in the upper-right-hand corner of the browser window and select More Tools > Developer Tools. You can also use the shortcut Option + ⌘ + J (on macOS), or Shift + CTRL + J (on Windows/Linux).
3. Copy & paste [script](https://github.com/matrayu/airtableToPostgresql/blob/master/convertAirtableToPostgresqlSchema.js "script") into console and hit enter
<hr>
