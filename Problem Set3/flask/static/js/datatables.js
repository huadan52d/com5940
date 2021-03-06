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
                        { title: "评分",
                          defaultContent:""},
                        { title: "书名",
                              defaultContent:""},
                        { title: "链接",
                          defaultContent:""},
                        { title: "信息",
                            defaultContent:""},
                        { title: "人数",
                          defaultContent:""},
                        { title: "购买",
                            defaultContent:""},
                    ] // rmf columns
                } );
      }); // end .getJSON
       });

$(document).ready(function(){


    var table2_items = [];
    var i = 0;
    var airtable_data = "https://api.airtable.com/v0/appURqPIQIxvuVI8v/Imported%20table?api_key=keyV24tV2nJhgN75C&sortField=visitor&sortDirection=asc&view=Grid%20view"
    var table2_dataSet = [];

    $.getJSON(airtable_data,function(result){
      $.each(result.records,function(key,value){
         table2_items = [];
       table2_items.push(value.fields.title);
       table2_items.push(value.fields.link);
       table2_items.push(value.fields.visitor);
       table2_items.push(value.fields.excerpt);
         table2_dataSet.push(table2_items);
         console.log(table2_items);
      });
         console.log(table2_dataSet);
         $("#table2").DataTable({
           data:table2_dataSet,
           retrive:true,
           destroy:true,
           columns: [
                   { title: "帖子",
                     defaultContent:""},
                   { title: "链接",
                       defaultContent:"" },
                   { title: "访问量",
                     defaultContent:"" },
                   { title: "摘要",
                     defaultContent:""},

                  ]
         });
    });
  });
