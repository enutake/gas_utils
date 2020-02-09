function myFunction() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  spreadsheet.getRange('1:1000').applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
  var banding = spreadsheet.getRange('A1:Z1000').getBandings()[0];
  banding.setHeaderRowColor('#5ab95f9')
  .setFirstRowColor('#ffffff')
  .setSecondRowColor('#e8f0fe')
  .setFooterRowColor(null);
  spreadsheet.getActiveRangeList().setVerticalAlignment('middle');
  spreadsheet.getRange('1:1').activate();
  spreadsheet.getActiveRangeList().setFontColor('#ffffff')
  .setFontWeight('bold')
  .setHorizontalAlignment('center');
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('#');
  spreadsheet.getRange('A2').activate();
  spreadsheet.getCurrentCell().setFormula('=row()-1');
  spreadsheet.getActiveRange().autoFill(spreadsheet.getRange('A2:A11'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES);
  spreadsheet.getRange('A2:A11').activate();
  spreadsheet.getActiveSheet().autoResizeColumns(1, 1);
  spreadsheet.getActiveSheet().setFrozenRows(1);
  spreadsheet.getActiveSheet().setFrozenColumns(1);
};
