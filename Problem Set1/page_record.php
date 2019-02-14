<?php /* Template Name: Record */ ?>
<?php 
get_header(); ?>

<div style="margin-top:5%" >

<h1><strong>
	<center>阿宝🐱进食情况:不定期更新</center></strong>
	</h1>
	<br><br>
   <?php
$query = new AirpressQuery();
$query->setConfig("Default_2");
$query->table("Record");


$events = new AirpressCollection($query);

foreach($events as $e){
echo
"<center><strong>喂养时段</strong>：".$e["Name"]."<br>
<center><img src='".$e["pic_name"]."'></img><br>
<strong>喂养日期</strong>：".$e["Date"]."<br>
<strong>猫粮品牌</strong>：".$e["Brand"]."<br>
<strong>味道</strong>：".$e["Taste"]."<br>
<strong>🐱星人饮食状况</strong>：".$e["Condition"]."<br><hr>";
}
?></div>
<div id="content">
	<?php comments_template('',true);?>
</div>
<div id="tertiary"style="margin-top:13%"><h2>
	如果您对猫粮选择/喂养问题有疑问,<br>欢迎在评论区提问或吐槽,<br>我们会有及时回复<i class="fas fa-cat"></i>
	</h2>
</div>