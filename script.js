document.addEventListener('keydown', function (e) {
    if (e.which == 9) {
        e.preventDefault();
    }
});

function moveUp(name)
{
	active = findActive()

	if (active != "")
	{
		document.getElementById('page_'+active).style.zIndex = "0"
		document.getElementById('page_'+name).style.zIndex = "1"
		document.getElementById('link_'+active).classList.remove('link_active')
	}

	setTimeout(function(){ document.getElementById('page_'+active).classList.remove('page_active') },750)

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

function findActive()
{
	pageList = ['about', 'news', 'contact', 'projects', 'schedule', 'wiki']
	active = ""

	for (var i = 0; i <= 5; i++) {		
		if (document.getElementById('page_'+pageList[i]).classList.contains('page_active'))
		{
			active = pageList[i];
			break;
		}
	}

	return active;
}