document.addEventListener('keydown', function (e) {
    if (e.which == 9) {
        e.preventDefault();
    }
});

function moveUp(name)
{
	moveDown(name)

	page = document.getElementById('page_'+name);
	link = document.getElementById('link_'+name);
				
	if (page.classList.contains('page_active'))
	{
		page.classList.remove('page_active');
		link.classList.remove('link_active');
		document.getElementById('header').style.color = 'white';
		document.getElementById('logo').style.fill = 'white';
	}else
	{
		page.classList.add('page_active');
		link.classList.add('link_active');
		document.getElementById('header').style.color = '#444';
		document.getElementById('logo').style.fill = '#222';
	}
}

function moveDown(name)
{
	pageList = ['about', 'news', 'contact', 'projects', 'schedule', 'wiki']

	for (var i = 0; i <= 5; i++) {

		if (pageList[i] == name) { continue }						
					
		if (document.getElementById('page_'+pageList[i]).classList.contains('page_active'))
		{
			document.getElementById('page_'+pageList[i]).classList.remove('page_active')
			document.getElementById('link_'+pageList[i]).classList.remove('link_active')
		}
	}
	document.getElementById('header').style.color = 'white';
	document.getElementById('logo').style.fill = 'white';
}