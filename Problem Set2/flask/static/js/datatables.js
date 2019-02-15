$("button#get_data").click(function() {
        var table1_items = [];
         var i = 0;
         var airtable_read_endpoint ="https://api.airtable.com/v0/appScIz6QwHV1XHeU/high-rating-book?api_key=keyV24tV2nJhgN75C&sortField=score&sortDirection=desc&view=Grid%20view";
         var table1_dataSet = [];
         $.getJSON(airtable_read_endpoint, function(result) {
                $.each(result.records, function(key,value) {
                    table1_items = [];
                        table1_items.push(value.fields.score);
                        table1_items.push(value.fields.name);
                        table1_items.push(value.fields.url);
                        table1_items.push(value.fields.info);
                        table1_items.push(value.fields.rater);
                        table1_items.push(value.fields.channel);
                        table1_dataSet.push(table1_items);
                        console.log(table1_items);
                 }); // end .each
                 console.log(table1_dataSet);
                $('#table1').DataTable( {
                    data: table1_dataSet,
                    retrieve: true,
                    ordering: true,
                    columns: [
                        { title: "score",
                          defaultContent:""},
                        { title: "name",
                              defaultContent:""},
                        { title: "url",
                          defaultContent:""},
                        { title: "info",
                            defaultContent:""},
                        { title: "rater",
                          defaultContent:""},
                        { title: "channel",
                            defaultContent:""},
                    ] // rmf columns
                } );
      }); // end .getJSON
       });
