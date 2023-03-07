function search_topic() {
	let input = document.getElementById('searchbar').value
	input = input.toLowerCase();
	let x = document.getElementsByClassName('dropdown-content');

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display = "none";
		} else {
			x[i].style.display = "table-row";
		}
	}
}
