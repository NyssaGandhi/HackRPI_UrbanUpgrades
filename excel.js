//xlsx Library
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>

const xlsx = require('xlsx');

//load the excel file
const workbook = xlsx.readFile("power_profiler_zipcode_tool.xlsx");

//Getting Region based on zipcode
//Select 7th sheet
const zipcodeSheetName = workbook.sheetName[6];
const zipcodeSheet = workbook.Sheets[zipcodeSheetName];