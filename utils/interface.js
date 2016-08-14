function validate (str)
{
    var isbn = str.replace(/\D/g,"");
    if (isbn.length != 10 && isbn.length != 13)
	return {
	    "isbn" : null,
	    "valid": false
	}
    return {
	"isbn" : isbn,
	"valid" : true
    }

}

function convertBook (apibook) {

    var book = {};
    if (apibook.title != null)
	book.title = apibook.title;
    if (apibook.subtitle != null)
	book.subtitle = apibook.subtitle;
    book.publishedDate = apibook.publishedDate;
   if (apibook.publisher != null)
    book.publisher = apibook.publisher;

    for (var id = 0; id < apibook.industryIdentifiers.length; id++){

	if (apibook.industryIdentifiers[id].type == "ISBN_10")
	    book.isbn_10 = apibook.industryIdentifiers[id].identifier;
	if (apibook.industryIdentifiers[id].type == "ISBN_13")
	    book.isbn_13 = apibook.industryIdentifiers[id].identifier;
    }

    book.authors = apibook.authors;

    return book;

}
