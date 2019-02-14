<?php /* Template Name: Brand */ ?>
<?php 
get_header(); ?>

	<div id="content" style="width:100%; margin-top:5%" >
   <?php
$query = new AirpressQuery();
$query->setConfig("Default");
$query->table("Brand");


$events = new AirpressCollection($query);

foreach($events as $e){
echo
"<center><strong>猫粮品牌</strong>：".$e["Name"]."<br>
<center><img src='".$e["pic_name"]."'></img><br>
<strong>猫粮描述</strong>：".$e["Description"]."<br>
<strong>🐱星人饮食状况</strong>：".$e["Record"]."<br><hr>";
}
?></div>

<div id="content">
	<?php comments_template('',true);?>
</div>
<div id="tertiary"style="margin-top:13%"><h2>
	如果您对猫粮选择/喂养问题有疑问,<br>欢迎在评论区提问或吐槽,<br>我们会有及时回复<i class="fas fa-cat"></i>
	</h2>
</div>

