export  function carouselText() {
/*$('.test').click(function() {
	$('.carousel-caption h3').fadeOut()
});*/
let textForSlider = [
{h3:'Собака друг людини',p:'Вірний товариш який ніколи незрадить'},
{h3:'Купи собі друга',p:'Купуйте цуценя і Ви придбаєте саму віддану любов на світі.'},
{h3:'Разом із собакою завжди весело',p:'Той, хто говорить, що щастя не купиш, ніколи не купував цуценя.'},
{h3:'Любиш мене - люби мою собаку',p:'Собаки теж сміються, тільки вони сміються хвостом.'}
];
let numberOfTextMasive = 0;
$('.textForSliderBlock h3').text(textForSlider[numberOfTextMasive].h3);
$('.textForSliderBlock p').text(textForSlider[numberOfTextMasive].p);
/*$('.carousel-control-prev').on('click', function(){
	$('.textForSliderBlock h3').fadeOut(600);
	$('.textForSliderBlock p').fadeOut(600,function(){
		numberOfTextMasive--
		if(numberOfTextMasive==4){
			numberOfTextMasive=0
								}
		if(numberOfTextMasive==-1){
			numberOfTextMasive=3
								}
		$('.textForSliderBlock h3').text(textForSlider[numberOfTextMasive].h3)
		$('.textForSliderBlock p').text(textForSlider[numberOfTextMasive].p);
		$('.textForSliderBlock h3').fadeIn(600);
		$('.textForSliderBlock p').fadeIn(600);
	});
	
})
$('.carousel-control-next').on('click', function(){
	$('.textForSliderBlock h3').fadeOut(600);
	$('.textForSliderBlock p').fadeOut(600,function(){
		numberOfTextMasive++
		if(numberOfTextMasive==4){
			numberOfTextMasive=0
								}
		if(numberOfTextMasive==-1){
			numberOfTextMasive=3
								}
		$('.textForSliderBlock h3').text(textForSlider[numberOfTextMasive].h3)
		$('.textForSliderBlock p').text(textForSlider[numberOfTextMasive].p);
		$('.textForSliderBlock h3').fadeIn(600);
		$('.textForSliderBlock p').fadeIn(600);
	});
})*/
$('.carousel').on('slide.bs.carousel', function () {
	$('.textForSliderBlock h3').fadeOut(600);
	$('.textForSliderBlock p').fadeOut(600);
})
$('.carousel').on('slid.bs.carousel', function () {
	let numberSlide = $('.carousel-item.active').index() ;
		$('.textForSliderBlock h3').text(textForSlider[numberSlide].h3)
		$('.textForSliderBlock p').text(textForSlider[numberSlide].p);
		$('.textForSliderBlock h3').fadeIn(600);
		$('.textForSliderBlock p').fadeIn(600);
});
};