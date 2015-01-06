$(function () {   

// Calendar file layout.
// ----------------------------------------------------------------------------
// File definition: RPDB/Calendar
// ----------------------------------------------------------------------------
// 
// Database Name.: *PUBLIC/DG NET Local
// Library.......: RPDB
// File..........: Calendar
// File alias....: Calendar
// Format........: RFORMAT
// Type..........: Physical
// Base file.....:
// Description...:
// Record length.: 197
// Key length....: 16
// Key field(s)..: ID
// 
// Field name           Data type   Length  Decimals  Description
// ----------------------------------------------------------------------------
//  ID                  Zoned          16        0
//  Title               Char          128
//  StrDate             Timestamp
//  EndDate             Timestamp
//  AllDay              Zoned           1        0
// ----------------------------------------------------------------------------

    function getQueryResults() {
        var query = new ASNAHelpers.QueryInputArgs()
        query.url = "../services/jsonservice.ashx";
        query.Library = "rpdb";
        query.File = "calendar";
        query.FieldsList = "Title:title,StrDate:startDate,EndDate:endDate,AllDay:allDay";
        query.Rows = -1;
        query.Query = "ID > {ID}";
        query.addQueryParm("ID",0);

        return query;
    }

    function jsonReadyToRender(json) {
        var o = json;

        $("#json-target").text(JSON.stringify(json.list));
    }

    function jsonCallComplete() {
    }

    $("#get-calendar-data").on("click", function() {
        var query = getQueryResults();
        ASNAHelpers.ajax.postJson(query.url,query.getJson(),jsonReadyToRender,jsonCallComplete);
    });               
});