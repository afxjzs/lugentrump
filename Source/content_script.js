setTimeout(function() {
	walk(document.body);
}, 1000)

function walk(node)
{
	// I then stole it from Cloud to Butt - Doug
	// I then stole it from Cloud to Butt - Dan
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	/*
	Nick - Not sure what this bit of code does.
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}*/

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}
function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bFAKE NEWS\b/g, "LUGENPRESSE");
	v = v.replace(/\bFake News\b/g, "Lugenpresse");
	v = v.replace(/\bFake news\b/g, "Lugenpresse");
	v = v.replace(/\bfake news\b/g, "lugenpresse");
	v = v.replace(/\bFAKENEWS\b/g, "LUGENPRESSE");
	v = v.replace(/\bFakeNews\b/g, "Lugenpresse");
	v = v.replace(/\bFakenews\b/g, "Lugenpresse");
	v = v.replace(/\bfakenews\b/g, "lugenpresse");

	textNode.nodeValue = v;
}


