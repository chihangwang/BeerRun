$.each(['比爾先生運動T-SHIRT', '安全第一喝啤酒帽 (報名前300名)', '我愛比爾號碼布',
        '金光閃閃完跑獎牌開瓶器', '蒐集啤酒束口袋', '一起去跑步比爾先生長條毛巾'], function(index, item) {
  $('#gift img:nth-child(' + (index+1) + ')').hover(function(){
    $('.run .gift .item').text(item);
  });
});
